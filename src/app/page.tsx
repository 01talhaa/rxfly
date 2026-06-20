import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Modes from "@/components/Modes";
import WhyFree from "@/components/WhyFree";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Hero />
      <Features />
      <WhyFree />
      <Modes />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
