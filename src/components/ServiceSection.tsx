import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import serviceImage from "@/app/service.png";

const ServiceSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>
      <p className="text-lg mb-8 text-center max-w-2xl">
        We offer a wide range of services to meet your needs. Whether
        you&apos;re looking for web development, mobile apps, or custom software
        solutions, we have the expertise to help you succeed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg">
          <Image
            src={serviceImage}
            alt="Web Development"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p className="text-center mb-4">
            Create stunning websites that captivate your audience and drive
            results.
          </p>
          <Button className="bg-blue-500 text-white">Learn More</Button>
        </div>
        <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg">
          <Image
            src={serviceImage}
            alt="Mobile Apps"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Mobile Apps</h3>
          <p className="text-center mb-4">
            Build powerful mobile applications for iOS and Android platforms.
          </p>
          <Button className="bg-blue-500 text-white">Learn More</Button>
        </div>
        <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg">
          <Image
            src={serviceImage}
            alt="Custom Solutions"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Custom Solutions</h3>
          <p className="text-center mb-4">
            Tailored software solutions to fit your unique business needs.
          </p>
          <Button className="bg-blue-500 text-white">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
