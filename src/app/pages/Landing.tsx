import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { HowItWorks } from "../components/landing/HowItWorks";
import { Features } from "../components/landing/Features";
import { Audience } from "../components/landing/Audience";
import { Pricing } from "../components/landing/Pricing";
import { WhyUrbned } from "../components/landing/WhyUrbned";
import { FAQSection } from "../components/landing/FAQSection";
import { FinalCTA } from "../components/landing/FinalCTA";
import { Footer } from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Audience />
      <Pricing />
      <WhyUrbned />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
