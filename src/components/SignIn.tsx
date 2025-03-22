"use client";
import { useTransition } from "react";
import { signIn } from "@/lib/serverActions"; // Ensure correct path

const SignIn = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        onClick={() => startTransition(signIn)}
        className="cursor-pointer mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex justify-center items-center mx-auto"
        disabled={isPending}
      >
        {isPending ? "Signing In..." : "Sign In"}
      </button>
    </>
  );
};

export default SignIn;
