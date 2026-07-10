"use client";

import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/85 shadow-[0_8px_30px_rgba(10,22,41,0.06)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="group relative z-50 flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-[#0a1629] text-[10px] font-bold tracking-wide text-[#dbf4a7] sm:size-9 sm:text-[11px]">
            DD
          </span>
          <span className="font-heading text-base font-bold tracking-tight text-[#0a1629] sm:text-lg">
            Dat Do
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-[#0a1629]/70 transition-colors hover:bg-slate-100 hover:text-[#0a1629]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-[#0a1629] py-2 pr-2 pl-4 text-sm font-semibold text-[#c8e98a] transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_30%,rgba(219,244,167,0.22)_50%,transparent_70%)] animate-hero-btn-shine"
            />
            <span className="relative flex size-1.5">
              <span className="absolute size-full animate-ping rounded-full bg-[#dbf4a7]/50" />
              <span className="relative size-1.5 rounded-full bg-[#dbf4a7]" />
            </span>
            <span className="relative">Let&apos;s talk</span>
            <span className="relative flex size-7 items-center justify-center rounded-full bg-[#1b4332] text-white">
              <IconArrowUpRight className="size-3.5" stroke={2} aria-hidden />
            </span>
          </Link>

          <button
            type="button"
            className="relative z-50 inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0a1629] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <IconX className="size-5" stroke={1.75} />
            ) : (
              <IconMenu2 className="size-5" stroke={1.75} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-14 bottom-0 z-40 bg-white/95 backdrop-blur-xl transition-[opacity,visibility] duration-300 md:hidden",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 sm:px-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3.5 font-heading text-2xl font-semibold tracking-tight text-[#0a1629] transition-colors hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#0a1629] px-6 py-3.5 text-sm font-semibold text-[#c8e98a]"
          >
            <span className={typography.badge}>Open</span>
            Let&apos;s talk
            <IconArrowUpRight className="size-4" stroke={2} aria-hidden />
          </Link>
        </nav>
      </div>
    </header>
  );
}
