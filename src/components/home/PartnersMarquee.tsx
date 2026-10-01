"use client";

import Image from "next/image";
import { partners } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PartnersMarquee() {
  const track = [...partners, ...partners, ...partners];

  return (
    <section className="overflow-hidden border-y border-slate-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading title="Ils nous ont fait confiance" />
      </div>

      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee gap-12 py-4">
          {track.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-4 grayscale transition-all hover:grayscale-0"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
