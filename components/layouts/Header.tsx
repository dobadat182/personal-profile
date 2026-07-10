"use client";

import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const overlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.28,
      ease: EASE,
      when: "afterChildren" as const,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.32,
      ease: EASE,
      when: "beforeChildren" as const,
    },
  },
};

const listVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.045,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
    transition: {
      duration: 0.22,
      ease: EASE,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 28,
      mass: 0.7,
    },
  },
};

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
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
          open
            ? "border-b border-slate-200 bg-white"
            : scrolled
              ? "border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(10,22,41,0.06)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link
            href="#top"
            className="flex items-center gap-2.5"
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
              className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0a1629] transition-colors hover:bg-slate-50 md:hidden"
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
      </header>

      <AnimatePresence mode="sync">
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            role="dialog"
            aria-modal="true"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[4rem_4rem]"
            />
            <div
              aria-hidden
              className="absolute top-[20%] -right-20 size-64 rounded-full bg-[#dbf4a7]/40 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute bottom-[10%] -left-16 size-52 rounded-full bg-[#1b4332]/10 blur-3xl"
            />

            <motion.div
              variants={listVariants}
              className="relative flex h-full flex-col px-4 pt-18 pb-8 sm:px-6"
            >
              <motion.div
                variants={listVariants}
                className="flex flex-1 flex-col justify-center gap-1"
              >
                {NAV.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-3 py-3.5 font-heading text-[1.75rem] leading-none font-semibold tracking-tight text-[#0a1629] transition-colors hover:bg-white/80 active:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#0a1629] px-6 py-3.5 text-sm font-semibold text-[#c8e98a]"
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
                  <IconArrowUpRight
                    className="relative size-4"
                    stroke={2}
                    aria-hidden
                  />
                </Link>
                <p
                  className={cn(
                    typography.caption,
                    "text-center text-[#0a1629]/45",
                  )}
                >
                  Frontend Developer · Vietnam
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
