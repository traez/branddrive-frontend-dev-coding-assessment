import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function RegistrationButton() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      {!session && (
        <Link
          href="/registration"
          className="text-base font-semibold border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-yellow-300 transition duration-300"
        >
          Registration
        </Link>
      )}
    </>
  );
}
