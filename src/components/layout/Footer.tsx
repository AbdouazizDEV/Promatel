import Image from "next/image";
import Link from "next/link";
import { logoUrl, navLinks, siteConfig } from "@/lib/constants";

const social = [
  { href: "#", label: "Facebook", letter: "f" },
  { href: "#", label: "Instagram", letter: "in" },
  { href: "#", label: "Twitter", letter: "x" },
  { href: "#", label: "LinkedIn", letter: "li" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-promatel-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="relative mb-4 h-14 w-48">
            <Image
              src={logoUrl}
              alt="PROMATEL"
              fill
              className="object-contain object-left brightness-0 invert"
              sizes="192px"
            />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/75">
            {siteConfig.slogan}. {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-promatel-accent">
            Navigation
          </h3>
          <ul className="space-y-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-promatel-accent">
            Suivez-nous
          </h3>
          <div className="flex gap-3">
            {social.map(({ href, label, letter }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-bold uppercase transition-colors hover:border-promatel-accent hover:bg-promatel-accent/20"
              >
                {letter}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/60">
            {siteConfig.email} · {siteConfig.phone}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        Copyright {year} © {siteConfig.copyright}
      </div>
    </footer>
  );
}
