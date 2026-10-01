import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${siteConfig.name} pour vos projets télécoms.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Une question, un projet ? Écrivez-nous ou appelez-nous."
        image="https://promatelsn.com/wp-content/uploads/2021/10/contact-us-1.png"
      />
      <ContactSection />
    </>
  );
}
