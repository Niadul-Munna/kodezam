import HeroSection from "../components/HeroSection";
import Service from "../components/Service";

export default function Home() {
  return (
    <div>
      <main className="">
        <nav>
          <HeroSection />
          <Service />
        </nav>
      </main>
    </div>
  );
}
