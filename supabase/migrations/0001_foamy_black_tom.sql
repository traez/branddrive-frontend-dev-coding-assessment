ALTER TABLE "account" RENAME TO "c3account";--> statement-breakpoint
ALTER TABLE "session" RENAME TO "c3session";--> statement-breakpoint
ALTER TABLE "user" RENAME TO "c3user";--> statement-breakpoint
ALTER TABLE "verification" RENAME TO "c3verification";--> statement-breakpoint
ALTER TABLE "c3session" DROP CONSTRAINT "session_token_unique";--> statement-breakpoint
ALTER TABLE "c3user" DROP CONSTRAINT "user_email_unique";--> statement-breakpoint
ALTER TABLE "c3account" DROP CONSTRAINT "account_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "c3session" DROP CONSTRAINT "session_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "c3account" ADD CONSTRAINT "c3account_user_id_c3user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."c3user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "c3session" ADD CONSTRAINT "c3session_user_id_c3user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."c3user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "c3session" ADD CONSTRAINT "c3session_token_unique" UNIQUE("token");--> statement-breakpoint
ALTER TABLE "c3user" ADD CONSTRAINT "c3user_email_unique" UNIQUE("email");