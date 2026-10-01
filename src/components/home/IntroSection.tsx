"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/constants";

export function IntroSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <div className="relative aspect-[5/3] overflow-hidden rounded-2xl shadow-2xl shadow-promatel-navy/15 ring-1 ring-slate-200">
            <Image
              src="https://promatelsn.com/wp-content/uploads/2021/10/image1-e1574415810532-1200x720-1-500x250.png"
              alt="Infrastructure réseau PROMATEL"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-bold text-promatel-navy md:text-4xl">
            {siteConfig.name} — {siteConfig.tagline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Nous intervenons sur l&apos;ensemble du cycle de vie de vos
            infrastructures : étude, déploiement, maintenance préventive et
            corrective, avec une exigence de qualité adaptée aux environnements
            télécoms exigeants.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
