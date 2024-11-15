import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/app/logo.png";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  return (
    <header className=" flex items-center justify-between font-semibold w-full h-16 ">
      <div className="grid grid-cols-2 space-x-0 place-items-center relative">
        <Link href="/">
          <Image src={logo} alt="siteLogo" className="h-24 w-24 "></Image>
          <span className="font-bold uppercase text-3xl absolute top-8 left-10 translate-x-7 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text ">
            odezam
          </span>
        </Link>
      </div>
      <div className="space-x-14">
        <Link href="/service">Service</Link>
        <Link href="/course">Course</Link>
        <Link href="/team">Team</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className="space-x-4">
        <Link href="/login">Login</Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
