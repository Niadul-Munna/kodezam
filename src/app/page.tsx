import ServiceSection from "@/components/ServiceSection";
import HeroSection from "../components/HeroSection";
import Service from "../components/Service";
import { ClientSection } from "@/components/ClientSection";

export default function Home() {
  return (
    <div>
      <main className="">
        <nav>
          <HeroSection />
          <Service />
        </nav>
        <ServiceSection />
        <ClientSection />
      </main>
    </div>
  );
}
