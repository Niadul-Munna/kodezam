import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Service = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg mb-8 text-center max-w-2xl">
          We offer a variety of services to cater to your needs. From web
          development to mobile app creation, we have the expertise to help you
          achieve your goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg">
            <Image
              src="/web-development.png"
              alt="Web Development"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-center mb-4">
              Build responsive and engaging websites that captivate your
              audience.
            </p>
            <Button className="bg-green-500 text-white">Learn More</Button>
          </div>
          <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg">
            <Image
              src="/mobile-apps.png"
              alt="Mobile Apps"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Mobile Apps</h3>
            <p className="text-center mb-4">
              Create seamless mobile applications for both iOS and Android
              platforms.
            </p>
            <Button className="bg-green-500 text-white">Learn More</Button>
          </div>
          <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg">
            <Image
              src="/custom-solutions.png"
              alt="Custom Solutions"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-center mb-4">
              Tailor-made software solutions to fit your unique business needs.
            </p>
            <Button className="bg-green-500 text-white">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
