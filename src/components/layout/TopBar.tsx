import { Clock, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-promatel-navy-deep text-sm text-white/90 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <ul className="flex flex-wrap items-center gap-6">
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="size-4 text-promatel-accent" aria-hidden />
              {siteConfig.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-4 text-promatel-accent" aria-hidden />
            {siteConfig.hours}
          </li>
          <li>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="size-4 text-promatel-accent" aria-hidden />
              {siteConfig.phone}
            </a>
          </li>
        </ul>
        <p className="text-white/60">{siteConfig.address}</p>
      </div>
    </div>
  );
}
