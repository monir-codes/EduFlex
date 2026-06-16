import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Spotlight from "@/components/Spotlight";
import StatsBanner from "@/components/StatsBanner";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
return (
    <main className="w-full bg-background min-h-screen">
      <Hero />
      <Features />
      <Spotlight />
      <Testimonials />
      <StatsBanner />
      <Footer />
    </main>
  );
}
