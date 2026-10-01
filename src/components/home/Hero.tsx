"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-promatel-navy-deep">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-promatel-navy-deep/95 via-promatel-navy/80 to-promatel-blue/50" />
        </motion.div>
      </AnimatePresence>

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(216,60,85,0.35) 0%, transparent 45%),
            radial-gradient(circle at 80% 20%, rgba(51,81,138,0.5) 0%, transparent 40%)
          `,
        }}
      />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex flex-wrap items-end gap-2 font-display text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl lg:text-8xl">
            <span className="text-promatel-blue-light">{siteConfig.pro}</span>
            <span className="text-promatel-red">{siteConfig.matel}</span>
          </div>

          <motion.p
            key={slide.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-lg font-medium text-white/90 md:text-xl"
          >
            {slide.title}
          </motion.p>

          <p className="mb-8 max-w-xl text-base text-white/70 md:text-lg">
            {siteConfig.tagline}. {siteConfig.slogan}.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Nous contacter
              <ChevronRight className="size-4" />
            </Button>
            <Button href="/a-propos" variant="outline">
              À propos de nous
            </Button>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-4 flex gap-2 lg:left-8">
          {heroSlides.map((_, i) => (
            <button
              key={heroSlides[i].image}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-10 bg-promatel-accent" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
