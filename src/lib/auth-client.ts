import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  /* baseURL: "http://localhost:3000", */
  baseURL: process.env.BETTER_AUTH_URL!,
});
