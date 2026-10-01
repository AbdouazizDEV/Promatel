"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-promatel-navy-deep">
      {image ? (
        <>
          <Image src={image} alt="" fill className="object-cover opacity-40" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-promatel-navy-deep/95 to-promatel-blue/60" />
        </>
      ) : (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(216,60,85,0.4), transparent 50%)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-white/80"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
