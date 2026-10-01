"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

function buildWhatsAppUrl(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const message = encodeURIComponent(
    "Bonjour PROMATEL, je souhaite obtenir des informations.",
  );
  return `https://wa.me/${digits}?text=${message}`;
}

export function WhatsAppFloat() {
  const href = buildWhatsAppUrl(siteConfig.whatsapp);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
      transition={{
        opacity: { delay: 0.8, duration: 0.4 },
        scale: { delay: 0.8, type: "spring", stiffness: 260, damping: 18 },
        y: {
          delay: 1.2,
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="whatsapp-float fixed bottom-6 right-6 z-[100] md:bottom-8 md:right-8"
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter PROMATEL sur WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative block"
      >
        <span
          className="pointer-events-none absolute -inset-2 rounded-full bg-[#25D366]/30 blur-md"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping"
          aria-hidden
        />
        <span className="relative flex size-[3.75rem] items-center justify-center rounded-full bg-white shadow-[0_8px_32px_rgba(37,211,102,0.45)] ring-4 ring-white/90 md:size-[4.25rem]">
          <Image
            src="/whatsapp-circle-icon-free-png.webp"
            alt=""
            width={68}
            height={68}
            className="size-[3.25rem] object-contain md:size-[3.75rem]"
            priority
          />
        </span>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-promatel-navy px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
          WhatsApp
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-promatel-navy" />
        </span>
      </motion.a>
    </motion.div>
  );
}
