"use client";

import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";
import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, ease: EASE_OUT }}
      className="relative"
    >
      <div
        aria-hidden
        className="absolute -inset-5 rounded-full border border-dashed border-[#1b4332]/15 animate-[spin_24s_linear_infinite]"
      />
      <div
        aria-hidden
        className="absolute -inset-2 rounded-full bg-[#dbf4a7]/45 blur-2xl"
      />
      <div className="relative h-28 w-22 overflow-hidden rounded-full border-[3px] border-white bg-[#dbf4a7] shadow-[0_24px_64px_rgba(10,22,41,0.16)] min-[480px]:h-36 min-[480px]:w-28 sm:h-44 sm:w-32">
        <Image
          src="/me.jpg"
          alt="Dat Do"
          width={200}
          height={200}
          priority
          className="size-full object-cover"
        />
      </div>
      <span
        className={cn(
          typography.badge,
          "absolute -right-1 bottom-2 rounded-full border border-white/80 bg-[#0a1629] px-2.5 py-1 tracking-wide text-[#dbf4a7] shadow-sm",
        )}
      >
        DD
      </span>
    </motion.div>
  );
}

const Hero = () => {
  return (
    <Section className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-x-clip px-1 pb-16 pt-6 sm:min-h-screen sm:px-0 sm:pb-20 sm:pt-0 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[linear-gradient(to_bottom,black_50%,transparent_100%)] sm:bg-size-[6rem_4rem]" />
        <div
          aria-hidden
          className="absolute top-[12%] -left-16 size-72 rounded-full bg-[#dbf4a7]/35 blur-3xl animate-hero-float"
        />
        <div
          aria-hidden
          className="absolute top-[28%] -right-20 size-80 rounded-full bg-[#1b4332]/8 blur-3xl animate-hero-float-delayed"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.22] mix-blend-multiply [bg-image:radial-gradient(circle_at_1px_1px,rgba(10,22,41,0.14)_1px,transparent_0)] [bg-size:3px_3px]"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute top-8 left-6 hidden h-10 w-10 border-t border-l border-[#0a1629]/15 sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-8 right-6 hidden h-10 w-10 border-t border-r border-[#0a1629]/15 sm:block"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
      >
        <div className="h-32 bg-linear-to-b from-transparent via-white/70 to-white sm:h-40 md:h-48" />
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="block h-12 w-full text-white sm:h-16 md:h-20"
        >
          <path
            fill="currentColor"
            d="M0,48 C240,96 480,0 720,48 C960,96 1200,0 1440,48 L1440,96 L0,96 Z"
          />
        </svg>
      </div>

      <Container className="relative z-10 flex w-full min-w-0 flex-col items-center text-center">
        <div className="relative flex w-full max-w-4xl flex-col items-center gap-4 px-1 sm:gap-5 sm:px-0 md:gap-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
            className={cn(typography.eyebrow, "max-w-xs text-balance sm:max-w-none")}
          >
            Frontend Developer · Vietnam
          </motion.p>

          <HeroPortrait />

          <div className="w-full space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: EASE_OUT }}
              className={typography.display}
            >
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                Dat Do
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#dbf4a7]/70 -rotate-1"
                />
              </span>
              <br />
              <span className="bg-linear-to-r from-[#0a1629] via-[#1b4332] to-[#2f5a44] bg-clip-text text-transparent">
                Turning ideas into reality
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT }}
              className={cn("mx-auto w-full max-w-lg px-1 sm:px-0", typography.bodyLg)}
            >
              I design and build refined web experiences with TypeScript, React,
              and Next.js — fast, accessible, and ready to scale.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT }}
          className="w-full max-w-md px-2 sm:max-w-none sm:px-0"
        >
          <Link
            href="#contact"
            className="group relative mt-8 inline-flex w-full max-w-sm items-center justify-center gap-2.5 overflow-hidden rounded-full border border-[#1b4332]/15 bg-[#0a1629] px-5 py-3 shadow-[0_10px_40px_rgba(10,22,41,0.16)] transition-all hover:border-[#dbf4a7]/35 hover:shadow-[0_14px_48px_rgba(10,22,41,0.22)] min-[480px]:mt-10 min-[480px]:w-auto min-[480px]:max-w-none min-[480px]:justify-start min-[480px]:gap-3 min-[480px]:px-7 min-[480px]:py-3.5 sm:mt-12 sm:gap-3.5 sm:px-9 sm:py-4"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_30%,rgba(219,244,167,0.28)_50%,transparent_70%)] animate-hero-btn-shine"
            />

            <span className="relative flex size-2.5 shrink-0 items-center justify-center">
              <span className="absolute size-full animate-ping rounded-full bg-[#dbf4a7]/45" />
              <span className="relative size-2 rounded-full bg-[#dbf4a7]" />
            </span>

            <span
              className={cn(
                typography.button,
                "relative text-[#c8e98a] shimmer shimmer-color-[#f3ffd8] shimmer-spread-16 shimmer-duration-2500",
              )}
            >
              Open for opportunity
            </span>

            <IconArrowUpRight
              className="relative size-4 shrink-0 text-[#dbf4a7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              stroke={2}
              aria-hidden
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 flex flex-col items-center gap-2 text-muted-foreground sm:mt-14 md:mt-16"
        >
          <span className={typography.label}>Scroll to explore</span>
          <IconArrowDown
            className="size-4 animate-bounce"
            stroke={1.75}
            aria-hidden
          />
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
