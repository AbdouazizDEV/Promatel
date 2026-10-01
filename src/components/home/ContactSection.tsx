"use client";

import { useState, type FormEvent } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading title="Nous contacter" />

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
              {sent ? (
                <p className="text-lg font-medium text-promatel-blue">
                  Merci ! Votre message a été enregistré. Nous vous recontacterons
                  rapidement.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1 block text-sm font-medium text-slate-700"
                      >
                        Prénom *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-promatel-blue focus:ring-2 focus:ring-promatel-blue/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1 block text-sm font-medium text-slate-700"
                      >
                        Nom *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-promatel-blue focus:ring-2 focus:ring-promatel-blue/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-slate-700"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-promatel-blue focus:ring-2 focus:ring-promatel-blue/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-slate-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-promatel-blue focus:ring-2 focus:ring-promatel-blue/20"
                    />
                  </div>
                  <Button type="submit" variant="primary">
                    Envoyer
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-promatel-accent">
                  Coordonnées
                </h3>
                <p className="mt-2 text-slate-600">{siteConfig.address}</p>
                <p className="text-slate-600">{siteConfig.phone}</p>
                <p className="text-slate-600">{siteConfig.email}</p>
                <p className="text-slate-600">{siteConfig.hours}</p>
              </div>
              <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <iframe
                  title="Localisation PROMATEL"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0!2d-17.467!3d14.716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzU4LjAiTiAxN8KwMjgnMDAuMCJX!5e0!3m2!1sfr!2ssn!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
