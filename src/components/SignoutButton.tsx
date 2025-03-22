"use client";
import { useState } from "react";
import { signOutUser } from "@/lib/signOutUser";

export default function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = () => {
    setIsLoading(true);
    signOutUser();
    // Note: We don't need to set isLoading back to false because
    // the page will reload after successful sign out
  };

  return (
    <div
      onClick={handleSignOut}
      className="text-base font-semibold border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-yellow-300 transition duration-300 cursor-pointer relative"
      style={{ minWidth: "80px", textAlign: "center" }}
    >
      {isLoading ? (
        <>
          <span className="opacity-0">SignOut</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 border-2 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </>
      ) : (
        "SignOut"
      )}
    </div>
  );
}
