"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroNetworkBg } from "@/components/home/HeroNetworkBg";
import { heroSlides, siteConfig } from "@/lib/constants";

const stats = [
  { value: "15+", label: "Années d'expertise" },
  { value: "200+", label: "Interventions" },
  { value: "24/7", label: "Support réseau" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      7000,
    );
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-promatel-navy-deep"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) / 50);
        mouseY.set((e.clientY - rect.top - rect.height / 2) / 50);
      }}
    >
      {/* Diaporama plein écran */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.background}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.background}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-promatel-navy-deep/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-promatel-navy-deep/95 via-promatel-navy-deep/70 to-promatel-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-promatel-navy-deep via-transparent to-promatel-navy-deep/30" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <HeroNetworkBg />
        <div className="hero-noise absolute inset-0 opacity-[0.28]" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 py-28 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:py-24">
        <div className="relative lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-promatel-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-promatel-accent" />
            </span>
            Infrastructure télécoms
          </motion.div>

          <div className="relative mb-6 select-none">
            <div className="flex flex-wrap items-stretch gap-0 font-display font-black uppercase leading-[0.85] tracking-tighter">
              <motion.span
                className="text-[clamp(3.5rem,12vw,7.5rem)] text-transparent"
                style={{
                  WebkitTextStroke: "2px rgba(255,255,255,0.85)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
              >
                {siteConfig.pro}
              </motion.span>

              <motion.div
                className="mx-1 flex flex-col items-center justify-center md:mx-3"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                <div className="hero-signal-bar h-16 w-1 rounded-full bg-gradient-to-b from-promatel-accent via-white/50 to-promatel-blue-light md:h-24" />
              </motion.div>

              <motion.span
                className="relative text-[clamp(3.5rem,12vw,7.5rem)] text-promatel-red"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                {siteConfig.matel}
                <span
                  className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-promatel-red via-promatel-accent to-transparent"
                  aria-hidden
                />
              </motion.span>
            </div>

            <p className="mt-4 max-w-lg text-sm font-medium uppercase tracking-[0.35em] text-promatel-blue-light md:text-base">
              {siteConfig.name}
            </p>
          </div>

          <div className="relative mb-6 min-h-[4.5rem] overflow-hidden border-l-2 border-promatel-accent pl-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.45 }}
              >
                <p className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                  {slide.title}
                </p>
                <p className="mt-2 max-w-xl text-base text-white/65 md:text-lg">
                  {siteConfig.slogan}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-promatel-red px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-promatel-red/30 transition hover:bg-promatel-red-dark hover:shadow-promatel-red/45"
            >
              Nous contacter
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              Nos services
            </Link>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 md:max-w-lg">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <p className="font-display text-2xl font-bold text-white md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50 md:text-xs">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Produits flottants — sans cadre */}
        <div className="relative flex min-h-[320px] items-center justify-center lg:col-span-5 lg:min-h-[560px]">
          <motion.div
            style={{ x: springX, y: springY }}
            className="relative flex h-[min(55vh,520px)] w-full max-w-lg items-center justify-center lg:max-w-none lg:h-[min(65vh,580px)]"
          >
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-promatel-accent/15 blur-[80px]"
              animate={{ opacity: [0.35, 0.55, 0.35], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.product}
                initial={{ opacity: 0, y: 28, scale: 0.92, filter: "blur(6px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{ opacity: 0, y: -20, scale: 0.96, filter: "blur(4px)" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={slide.product}
                    alt={slide.productAlt}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
                    sizes="(max-width: 1024px) 85vw, 42vw"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -right-1 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
              {heroSlides.map((s, i) => (
                <button
                  key={s.background}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`group flex items-center gap-2 transition-all ${
                    i === index ? "opacity-100" : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <span
                    className={`h-8 w-0.5 rounded-full transition-all ${
                      i === index
                        ? "bg-promatel-accent"
                        : "bg-white/40 group-hover:bg-white/70"
                    }`}
                  />
                  <span className="text-[10px] font-bold tabular-nums text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 lg:hidden">
        {heroSlides.map((s, i) => (
          <button
            key={s.background}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all ${
              i === index ? "w-8 bg-promatel-accent" : "w-4 bg-white/35"
            }`}
          />
        ))}
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition hover:text-white"
        aria-label="Défiler vers les services"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Explorer</span>
        <ArrowDown className="size-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
