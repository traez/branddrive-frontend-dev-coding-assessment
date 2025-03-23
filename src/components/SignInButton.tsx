import Link from "next/link";

export default function SignInButton() {
  return (
    <Link
      href="/signin"
      className="text-base font-semibold border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-yellow-300 transition duration-300"
    >
      SignIn
    </Link>
  );
}
