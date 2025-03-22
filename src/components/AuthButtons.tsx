import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";

export default async function AuthButtons() {
     const session = await auth.api.getSession({
       headers: await headers(),
     });

  return (
    <>
      {!session ? (
        <Link
          href="/signin"
          className="text-base font-semibold border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-yellow-300 transition duration-300"
        >
          SignIn
        </Link>
      ) : (
        <SignOutButton />
      )}
    </>
  );
}
