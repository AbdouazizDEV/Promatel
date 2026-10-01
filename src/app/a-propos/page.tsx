import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez ${siteConfig.name}, expert en infrastructures télécoms.`,
};

const values = [
  {
    title: "Excellence technique",
    text: "Des interventions conformes aux standards du secteur et aux exigences de vos SLA.",
  },
  {
    title: "Réactivité",
    text: "Une organisation agile pour limiter les temps d'arrêt et sécuriser vos opérations.",
  },
  {
    title: "Partenariat",
    text: "Un accompagnement de bout en bout, de l'étude à la maintenance long terme.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="À propos de nous"
        subtitle={siteConfig.tagline}
        image="https://promatelsn.com/wp-content/uploads/2021/10/15581-network-cables-1920x1200-computer-wallpaper-1920x500-1.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://promatelsn.com/wp-content/uploads/2021/10/laboratoire_telecom-1.jpg"
                alt="Équipe et infrastructure telecom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold text-promatel-navy">
              {siteConfig.name}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Implantés au Sénégal, nous travaillons aux côtés d&apos;opérateurs
              et d&apos;entreprises pour concevoir, déployer et maintenir des
              réseaux performants. Notre nom reflète notre métier :{" "}
              <strong className="text-promatel-red">PRO</strong>
              duction et{" "}
              <strong className="text-promatel-blue">MATEL</strong> — la
              maintenance au cœur de la fiabilité.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-promatel-navy">
            Nos engagements
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <article className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-100">
                  <h3 className="text-xl font-bold text-promatel-red">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-slate-600">{v.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
