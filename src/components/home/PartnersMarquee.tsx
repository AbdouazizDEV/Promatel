"use client";

import Image from "next/image";
import { partners } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

function PartnerLogo({
  name,
  logo,
  priority,
  decorative,
}: {
  name: string;
  logo: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  return (
    <figure
      className="group/logo flex h-[80px] w-[160px] shrink-0 items-center justify-center px-3 md:h-[96px] md:w-[200px]"
      title={name}
      aria-hidden={decorative}
    >
      <Image
        src={logo}
        alt={decorative ? "" : name}
        width={180}
        height={88}
        priority={priority}
        className="max-h-full w-auto max-w-full object-contain transition duration-300 group-hover/logo:scale-[1.08] drop-shadow-sm"
        sizes="200px"
      />
    </figure>
  );
}

export function PartnersMarquee() {
  const track = [...partners, ...partners];

  return (
    <section className="overflow-hidden border-y border-slate-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading title="Ils nous ont fait confiance" />
      </div>

      <div className="partners-marquee relative mt-8 md:mt-10">
        <div className="partners-marquee__track flex items-center gap-10 md:gap-16">
          {track.map((partner, i) => (
            <PartnerLogo
              key={`${partner.name}-${i}`}
              name={partner.name}
              logo={partner.logo}
              priority={i < partners.length}
              decorative={i >= partners.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
