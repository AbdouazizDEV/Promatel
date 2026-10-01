"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <SectionHeading title="Qui sommes-nous ?" />
        <FadeIn delay={0.1}>
          <p className="text-lg leading-relaxed text-slate-600">
            PROMATEL est une société spécialisée dans la production et la
            maintenance d&apos;infrastructures télécoms. Notre équipe
            d&apos;ingénieurs et techniciens met son expertise au service des
            opérateurs et des entreprises qui ont besoin de réseaux fiables,
            évolutifs et conformes aux standards du secteur.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Proximité, réactivité et maîtrise technique guident chaque
            intervention — du câblage à la supervision, de l&apos;installation à
            l&apos;audit.
          </p>
          <Button href="/a-propos" variant="secondary" className="mt-10">
            En savoir plus
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
