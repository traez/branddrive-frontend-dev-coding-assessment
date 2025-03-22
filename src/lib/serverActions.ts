"use server";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "trae@test.com",
      password: "password123",
    },
  });
  redirect("/dashboard"); 
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "trae@test.com",
      password: "password123",
      name: "Trae Zeeofor",
    },
  });
    redirect("/signin"); 
};
