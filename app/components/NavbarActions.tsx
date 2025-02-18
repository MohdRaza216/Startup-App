"use client"; // ✅ Must be a client component

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { handleSignIn, handleSignOut } from "@/app/actions/authActions"; // ✅ Server Actions

interface Session {
  user?: {
    id: string;
    name: string;
    image?: string;
  };
}

const NavbarActions = ({ session }: { session: Session | null }) => {
  return (
    <div className="flex items-center gap-4">
      {session ? (
        <>
          <form action={handleSignOut}>
            <button
              type="submit"
              className="text-[color:var(--text-primary)] hover:text-[color:var(--text-primary-dark)]"
            >
              Sign Out
            </button>
          </form>
          <Link href={`/user/${session.user?.id}`} className="flex items-center gap-2">
            <span className="text-sm">Hello, {session.user?.name}</span>
            <Image
              src={session.user?.image ?? "/logo.png"}
              alt={session.user?.name ?? "User"}
              width={32}
              height={32}
              className="rounded-full"
              priority
            />
          </Link>
        </>
      ) : (
        <form action={handleSignIn}>
          <button
            type="submit"
            className="text-[color:var(--text-primary)] hover:text-[color:var(--text-primary-dark)]"
          >
            Sign In
          </button>
        </form>
      )}
    </div>
  );
};

export default NavbarActions;
