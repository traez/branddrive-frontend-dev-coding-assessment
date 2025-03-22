"use client";
import { authClient } from "@/lib/auth-client";

export function signOutUser() {
  authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/";
      },
    },
  });
} 

     /* window.location.reload(); */