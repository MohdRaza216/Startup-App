import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="py-2 px-8 shadow-sm bg-[color:var(--bg-primary)] font-work-sans">
      <nav className="flex justify-between items-center font-bold">
        <Link
          className="text-[color:var(--text-primary)]  text-xl"
          href={"/"}
        >
          <Image src="/logo.png" alt="logo" width={144} height={30} priority />
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link
              href={"/"}
              className="text-[color:var(--text-primary)] hover:text-[color:var(--text-primary-dark)]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-[color:var(--text-primary)] hover:text-[color:var(--text-primary-dark)]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-[color:var(--text-primary)] hover:text-[color:var(--text-primary-dark)]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
