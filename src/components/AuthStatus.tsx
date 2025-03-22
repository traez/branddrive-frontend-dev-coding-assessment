// Create a new component called AuthStatus.jsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function AuthStatus() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <span className="ml-2 self-end text-sm font-medium">
      ({!session ? "Unauthenticated" : session.user.name})
    </span>
  );
}
