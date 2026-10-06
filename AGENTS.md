# AGENTS.md — Branddrive: Vercel + Supabase (single project for dev + prod)

> Source of truth for AI agents. Read before changing env, DB, auth, or deployment code.

## 1. Project snapshot

- Next.js 15 + React 19 + TypeScript + Tailwind 4 (`package.json:5-13`, `next.config.ts:3`).
- Auth: `better-auth` + `drizzleAdapter` PG (`src/lib/auth.ts:7-15`). Client: `src/lib/auth-client.ts:1-5`. Guard: `src/middleware.ts:4-16` (`/dashboard/:path*`).
- DB: `drizzle-orm` + `postgres-js` (`src/db/index.ts:1-8`). Schema: `c3user/c3session/c3account/c3verification` (`src/db/schema.ts:3-53`). Migrations in `./supabase/migrations` via `drizzle.config.ts:6-14` + runner `src/db/migrate.ts:87-119` (`c3MigrationHistory` log).
- `supabase/migrations/` is Drizzle output, NOT Supabase CLI. Never run `supabase db push`.
- Scripts: `dev`, `build`, `lint`, `db:push`, `db:generate`, `db:migrate`, `db:status` (`package.json:5-13`).

## 2. Target state (authoritative)

| Area | Value |
|---|---|
| Database | Supabase, ONE project for dev + prod. Monitor 7-day Free pause (§6) |
| Legacy DB | Coolify/Hetzner Branddrive `5433` — one-time export source only, then cold backup |
| App | Vercel `https://branddrive-assessment.vercel.app/` (from Coolify) |
| DNS | Vercel free domain only. Remove Cloudflare `branddrive.zeeofor.tech` proxy (delete `A/CNAME` or redirect) |
| Env | `BETTER_AUTH_URL=https://branddrive-assessment.vercel.app/` (was `https://branddrive.supereagles.net/` in `.env:1`), `BETTER_AUTH_SECRET` rotated into Vercel, never committed |
| Repo | Same GitHub repo, connected to Vercel |

Principle: env-driven DB. Migration = `pg_dump`/`pg_restore` + `DATABASE_URL` swap, no code changes.

Rationale: hobby project hosts on free tiers (Vercel + Supabase) to preserve paid Hetzner/Coolify resources for paying projects.

## 3. Invariants

1. Never commit `.env*` (`.gitignore:34`), `*.pem` (`.gitignore:25`), root `*.dump`/`/*.sql`, `id_ed25519`. Use placeholders (`<coolify-pw>`, `<supabase-pw>`, `<ref>`) in docs/chat.
2. Never hardcode URLs, IPs, passwords, or connection strings in `src/`. Always `process.env.*`.
3. Never use `127.0.0.1:5433` tunnel URL in Vercel env. Restores use the proven pooler path (§5a.2); direct (`:5432?sslmode=require`) is for `db:migrate`/SQL checks only.
4. Delete `*.dump` after verified import (contains password hashes + sessions).

## 4. Environment contract

Local `.env` (gitignored, Supabase for dev):

```ini
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=<local-dev-secret>
DATABASE_URL=postgresql://postgres:<supabase-pw>@db.<ref>.supabase.co:6543/postgres?sslmode=require
# Direct (migrations/restore only):
# DATABASE_URL_DIRECT=postgresql://postgres:<supabase-pw>@db.<ref>.supabase.co:5432/postgres?sslmode=require
```

Vercel dashboard (Production + Preview, same Supabase project):

| Var | Value |
|---|---|
| `DATABASE_URL` | pooled `:6543?sslmode=require` (runtime) |
| `BETTER_AUTH_URL` | `https://branddrive-assessment.vercel.app/` (no trailing slash — old `.env:1` had one) |
| `BETTER_AUTH_SECRET` | `<rotated>` |

Known gap: `drizzle.config.ts:4`, `src/db/index.ts:5`, `src/db/migrate.ts:12` load only `.env`, ignoring `.env.local`. Put `DATABASE_URL` in `.env` for all `db:*` commands.

## 5a. One-time migration: Coolify → Supabase (proven path)

Prereqs: PG 18 client (`C:\Program Files\PostgreSQL\18\bin\`), Supabase EU project created, tunnel up only for export:

```powershell
ssh -N -L 5433:127.0.0.1:5433 root@178.104.79.236
```

The local `.vscode/tasks.json` tunnel task was deleted after verification (was gitignored, `.gitignore:48`). For any re-export, run the `ssh` command above manually in a separate terminal.

### 5a.1 Export: Coolify → local file (via tunnel)

```powershell
& "C:\Program Files\PostgreSQL\18\bin\pg_dump.exe" "postgres://postgres:<coolify-pw>@127.0.0.1:5433/postgres" `
  -Fc -v --no-owner --no-acl -f branddrive.dump
```

### 5a.2 Import: local file → Supabase (via pooler, proven)

```powershell
$env:PGPASSWORD = "<supabase-pw>"
& "C:\Program Files\PostgreSQL\18\bin\pg_restore.exe" `
  --host=aws-0-eu-west-1.pooler.supabase.com `
  --port=6543 `
  --username=postgres.<ref> `
  --dbname=postgres `
  --schema=public `
  --no-owner --no-acl --clean --if-exists `
  --verbose branddrive.dump
```

Why this form: the dump includes Supabase-managed schemas (`auth`, `storage`, `vault`) that hosted Supabase owns — restoring them causes permission errors. `--schema=public` restores only your tables/data so those errors disappear. Password via `$env:PGPASSWORD` keeps it out of the process args. Port was never the problem (pooler `:6543` connects fine); the earlier `could not translate host name` was a transient DNS failure that cleared on retry.

Post-restore (mandatory):

1. Row counts match: `SELECT count(*) FROM c3user/c3session/c3account/c3verification` on both sides.
2. `DATABASE_URL` = DIRECT → `npm run db:status`, `npm run db:migrate` (backfills `c3MigrationHistory`).
3. Switch local `.env` + Vercel `DATABASE_URL` to pooler `:6543`. Keep `postgres()` `max:1`, `prepare:false` on pooler (`src/db/index.ts:7`).
4. `npm run build` + register/login/logout + `/dashboard` gate (`src/middleware.ts:7-10`), then delete `*.dump`.

pgAdmin daily: host `db.<ref>.supabase.co:5432`, SSL require, no SSH tunnel.

## 6. Supabase Free pause — monitoring

Free projects pause after ~7 days idle; app looks dead until Dashboard > Restore. Required: keep-warm via Vercel Cron or UptimeRobot `GET https://branddrive-assessment.vercel.app/api/health` every 5 min (create route if missing). On pause: Restore → re-run health + login smoke.

## 7. Vercel deployment

1. Import same GitHub repo, Next.js defaults, `next build`.
2. Set §4 envs, redeploy on change.
3. Required auth fix: `src/lib/auth-client.ts:4` reads server-only `BETTER_AUTH_URL` (undefined in browser). Use `window.location.origin` fallback or `NEXT_PUBLIC_` var; add `trustedOrigins` + `baseURL` in `src/lib/auth.ts:7`.
4. Update `README.md:32` Live URL to `https://branddrive-assessment.vercel.app/` after cutover.

## 8. Verification (every DB/auth/deploy change)

- [ ] `npm run db:status` clean on target DIRECT URL
- [ ] `npm run lint` + `npm run build` pass
- [ ] Local + Vercel `branddrive-assessment.vercel.app` login/logout + `/dashboard` gate work
- [ ] Row counts match (if migrated), `c3MigrationHistory` current
- [ ] `git status` shows no secrets/`*.dump`, `.env*` ignored

## 9. Troubleshooting

| Symptom | Fix |
|---|---|
| `ECONNREFUSED 127.0.0.1:5433` | Start tunnel task (export only) |
| `must be owner` on restore | Retry with `--no-owner --no-acl` |
| `already exists` on retry | Use `--clean --if-exists` or wipe `public` schema |
| SSL error to Supabase | Add `?sslmode=require` to `DATABASE_URL`; restores use §5a.2 pooler form as-is |
| `too many clients` on Vercel | Runtime must be pooler `:6543`, `max:1, prepare:false` |
| Auth callback fails on `vercel.app` | Fix trailing slash + `auth-client` baseURL + `trustedOrigins` |
| Dead after ~7d idle | Supabase paused → Restore + keep-warm (§6) |
