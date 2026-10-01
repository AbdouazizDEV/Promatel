"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-promatel-navy/85" />

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-5xl font-black uppercase md:text-7xl">
            <span className="text-promatel-blue-light">{siteConfig.pro}</span>{" "}
            <span className="text-promatel-red">{siteConfig.matel}</span>
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            {siteConfig.slogan}
          </p>
          <Button href="/contact" variant="primary" className="mt-10">
            Demander un devis
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
