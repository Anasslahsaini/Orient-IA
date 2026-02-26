import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/sections/hero";
import { Phases } from "@/sections/phases";
import { Comparison } from "@/sections/comparison";
import { WhyUs } from "@/sections/why-us";
import { FAQ } from "@/sections/faq";
import { CTA } from "@/sections/cta";
import { Footer } from "@/components/layout/footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Phases />
        <Comparison />
        <WhyUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
