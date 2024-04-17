import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-6 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          height={32}
          width={32}
          alt="Yoom Logo"
          className="max-sm:size-10"
        />
        <p className="font-extrabold text-[26px] text-white max-sm:hidden">
          Yoom
        </p>
      </Link>
      <div className="flex flex-between gap-5">
        {/* Clerk Auth */}

        <UserButton />

        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
