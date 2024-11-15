import Image from "next/image";
import React from "react";
import hero from "@/app/web-development.png";
import { Button } from "@/components/ui/button";
// import banner from "@/app/banner.jpg";
const HeroSection = () => {
  return (
    <div className=" h-screen grid grid-cols-2   ">
      <div className="place-content-center px-16">
        <h1 className="text-5xl font-bold">
          We are <span className="">Kodezam</span>
        </h1>
        <p className="mt-5">
          Kodezam is a software development company. We are the best option who
          care for you from outside of t
        </p>
        <div className="space-x-5 mt-5">
          <Button className="w-36 h-12">Get Hire</Button>
          <Button className="w-36 h-12">Contact US</Button>
        </div>
      </div>
      <div className=" w-full h-screen place-items-end">
        <Image src={hero} alt="side" className=""></Image>
      </div>
    </div>
  );
};

export default HeroSection;
