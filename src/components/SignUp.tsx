"use client";
import { useTransition } from "react";
import { signUp } from "@/lib/serverActions"; // Ensure correct path

const SignUp = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        onClick={() => startTransition(signUp)}
        className="cursor-pointer mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 flex justify-center items-center mx-auto"
        disabled={isPending}
      >
        {isPending ? "Signing Up..." : "Sign Up"}
      </button>
    </>
  );
};

export default SignUp;
