"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

function signOutUser() {
  return authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/";
      },
      onError: (error) => {
        throw error; 
      },
    },
  });
}

export default function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOutUser();
    } catch (error) {
      setIsLoading(false); // Reset loading state on error
      toast.error("Failed to sign out. Please try again.");
      console.error("Sign out error:", error);
    }
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
