"use server";

import { signIn, signOut } from "@/auth";

export const handleSignIn = async () => {
  "use server";
  await signIn("github");
};

export const handleSignOut = async () => {
  "use server";
  await signOut({ redirectTo: "/" });
};
