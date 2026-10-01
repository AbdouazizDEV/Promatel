import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import { logoUrl, navLinks, siteConfig, socialLinks } from "@/lib/constants";

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-promatel-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <Link
            href="/"
            className="mb-5 inline-block rounded-xl bg-white px-4 py-3 shadow-md shadow-black/20 ring-1 ring-white/80 transition hover:shadow-lg"
          >
            <span className="relative block h-12 w-48 md:h-14 md:w-52">
              <Image
                src={logoUrl}
                alt="PROMATEL"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 192px, 208px"
              />
            </span>
          </Link>
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
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, network }) => {
              const Icon = socialIconMap[network];
              return (
                <a
                  key={network}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-promatel-accent hover:bg-promatel-accent/20 hover:text-white"
                >
                  <Icon className="size-[18px]" />
                </a>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-white/60">
            {siteConfig.email} · {siteConfig.phone}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        Copyright {year} ©{" "}
        <a
          href={siteConfig.credit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white/70 underline decoration-promatel-accent/60 underline-offset-2 transition-colors hover:text-promatel-accent"
        >
          {siteConfig.credit.name}
        </a>
      </div>
    </footer>
  );
}
