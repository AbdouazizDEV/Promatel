import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-promatel-red text-white shadow-lg shadow-promatel-red/25 hover:bg-promatel-red-dark hover:shadow-promatel-red/35",
  secondary:
    "bg-promatel-blue text-white shadow-lg shadow-promatel-blue/25 hover:bg-promatel-navy",
  outline:
    "border-2 border-promatel-blue/30 bg-white/80 text-promatel-navy backdrop-blur hover:border-promatel-red hover:text-promatel-red",
  ghost: "text-promatel-navy hover:bg-promatel-blue/10",
} as const;

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 active:scale-[0.98]";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
