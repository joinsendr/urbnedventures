import { ModernHeader } from "../components/ModernHeader";
import { ModernHero } from "../components/ModernHero";
import { ServicesShowcase } from "../components/ServicesShowcase";
import { TechnologySection } from "../components/TechnologySection";
import { DarkFeature } from "../components/DarkFeature";
import { TechSpecs } from "../components/TechSpecs";
import { Pricing } from "../components/Pricing";
import { CompanyRegistrationForm } from "../components/CompanyRegistrationForm";
import { FAQ } from "../components/FAQ";
import { ContactForm } from "../components/ContactForm";
import { FinalCTA } from "../components/FinalCTA";
import { ModernFooter } from "../components/ModernFooter";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      <ModernHero />
      <ServicesShowcase />
      <TechnologySection />
      <DarkFeature />
      <TechSpecs />
      <Pricing />
      <CompanyRegistrationForm />
      <FAQ />
      <ContactForm />
      <FinalCTA />
      <ModernFooter />
    </div>
  );
}
