import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

const SOCIALS = [
  {
    href: "mailto:badat336@gmail.com",
    label: "Email",
    icon: IconMail,
  },
  {
    href: "https://github.com/dobadat182",
    label: "GitHub",
    icon: IconBrandGithub,
  },
  {
    href: "https://linkedin.com/in/badat182",
    label: "LinkedIn",
    icon: IconBrandLinkedin,
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0a1629] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[4rem_4rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-[#dbf4a7]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 sm:pt-16 md:pt-20 lg:px-8">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-12">
          <div className="max-w-md space-y-4">
            <Link href="#top" className="inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#dbf4a7] text-[11px] font-bold tracking-wide text-[#0a1629]">
                DD
              </span>
              <span className="font-heading text-xl font-bold tracking-tight">
                Dat Do
              </span>
            </Link>
            <p className={cn(typography.bodySm, "text-white/60")}>
              Frontend developer crafting performant, refined web experiences
              with React, Next.js, and TypeScript.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#dbf4a7] py-2.5 pr-2.5 pl-5 text-sm font-semibold text-[#0a1629] transition-transform hover:scale-[1.02]"
            >
              Open for opportunity
              <span className="flex size-8 items-center justify-center rounded-full bg-[#0a1629] text-[#dbf4a7]">
                <IconArrowUpRight className="size-4" stroke={2} aria-hidden />
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-8 sm:gap-x-14">
            <div className="space-y-3">
              <p className={cn(typography.label, "text-white/40")}>Navigate</p>
              <ul className="space-y-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-white/75 transition-colors hover:text-[#dbf4a7]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className={cn(typography.label, "text-white/40")}>Connect</p>
              <ul className="space-y-2">
                {SOCIALS.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-[#dbf4a7]"
                    >
                      <Icon className="size-4" stroke={1.75} aria-hidden />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 sm:flex-row sm:items-center">
          <p className={cn(typography.caption, "text-white/40")}>
            © {year} Dat Do. Crafted with care.
          </p>
          <p className={cn(typography.caption, "text-white/40")}>
            Based in Vietnam · Available worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
