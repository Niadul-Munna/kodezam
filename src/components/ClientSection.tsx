import Image from "next/image";
import { Button } from "@/components/ui/button";
import client from "@/app/client.webp";

export const ClientSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center">
            <Image
              src={client}
              alt="client"
              className="w-full h-auto"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-white mb-4">Our Client</h2>
            <p className="text-lg text-white mb-8">
              We have a wide range of customers from small business to large
              corporation. We are proud to work with some of the biggest names
              in the industry.
            </p>
            <Button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white">
              See All Clients
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
