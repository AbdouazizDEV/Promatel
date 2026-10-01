"use client";

import { FadeIn } from "@/components/motion/FadeIn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-promatel-accent">
        PROMATEL
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-promatel-navy md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          {subtitle}
        </p>
      ) : null}
      <div
        className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-promatel-red to-promatel-accent ${align === "center" ? "mx-auto" : ""}`}
      />
    </FadeIn>
  );
}
