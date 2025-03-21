import { auth } from "@/lib/auth";
import { signIn, signUp } from "@/lib/serverActions";
import { headers } from "next/headers";
import SignoutButton from "./SignoutButton";

export default async function Enter() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="flex flex-col gap-3 items-center justify-center p-10">
      <div className="flex gap-3">
        <button
          className="bg-neutral-700 text-white p-2 rounded-md"
          onClick={signIn}
        >
          Sign In
        </button>
        <button
          className="bg-neutral-700 text-white p-2 rounded-md"
          onClick={signUp}
        >
          Sign Up
        </button>
        <SignoutButton />
      </div>
      <p>{!session ? "Not authenticated" : session.user.name}</p>
    </main>
  );
}
