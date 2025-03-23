import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";

export default async function AuthButtons() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return <>{!session ? <SignInButton /> : <SignOutButton />}</>;
}
