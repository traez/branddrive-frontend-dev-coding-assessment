"use server";
import { auth } from "@/lib/auth";
import { SignUpFormDataType } from "@/components/SignUp";
import { SignInFormDataType } from "@/components/SignIn";

export const signIn = async (data: SignInFormDataType) => {
  try {
    await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });
    return { success: true };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Sign in failed" };
  }
};

export const signUp = async (data: SignUpFormDataType) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    });
    return { success: true };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Sign up failed" };
  }
};
