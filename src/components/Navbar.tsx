import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/app/logo.png";
import { ModeToggle } from "@/components/ModeToggle";

interface NavbarProps {
  title: string;
  href: string;
}

const nav: NavbarProps[] = [
  {
    title: "Service",
    href: "/service",
  },
  {
    title: "Course",
    href: "/course",
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  return (
    <header className=" flex items-center justify-between font-semibold w-full h-16  ">
      <div className="grid grid-cols-2 space-x-0 place-items-center relative">
        <Link href="/">
          <Image src={logo} alt="siteLogo" className="h-24 w-24 "></Image>
          <span className="font-bold uppercase text-3xl absolute top-8 left-10 translate-x-7 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text ">
            odezam
          </span>
        </Link>
      </div>
      <div className="space-x-14">
        {nav.map((item, index) => (
          <Link className="hover:text-blue-600" key={index} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="space-x-4">
        <Link href="/login">Login</Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
