import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactSection } from "@/components/home/ContactSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { ServicesGrid } from "@/components/home/ServicesGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <AboutPreview />
      <ServicesGrid />
      <PartnersMarquee />
      <CtaBanner />
      <ContactSection />
    </>
  );
}
