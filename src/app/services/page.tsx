import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { services, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: "Réseaux, installations, travaux et expertises télécoms par PROMATEL.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Nos services"
        subtitle="Une offre complète pour vos infrastructures réseaux et télécoms."
        image="https://promatelsn.com/wp-content/uploads/2021/10/Connexion-reseau-1024x680.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-4 lg:px-8">
          {services.map((service, i) => (
            <FadeIn key={service.id}>
              <article
                id={service.id}
                className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-promatel-accent">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 text-3xl font-bold text-promatel-navy">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <p className="mt-4 text-slate-600">
                    {siteConfig.name} mobilise des équipes qualifiées et du
                    matériel adapté pour garantir la qualité et la pérennité de
                    vos installations.
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mx-auto mt-20 max-w-7xl px-4 text-center lg:px-8">
          <Button href="/contact">Parler à un expert</Button>
        </FadeIn>
      </section>
    </>
  );
}
