"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Nos services"
          subtitle="Des prestations complètes pour vos infrastructures réseaux et télécoms."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl bg-promatel-navy shadow-xl"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-promatel-navy-deep via-promatel-navy/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/services#${service.id}`}
                  className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors group-hover:bg-promatel-red"
                  aria-label={`En savoir plus — ${service.title}`}
                >
                  <ArrowUpRight className="size-5" />
                </Link>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button href="/services" variant="primary">
            Découvrir nos services
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
