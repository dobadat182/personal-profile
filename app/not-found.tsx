import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70dvh] w-full flex-1 flex-col items-center justify-center overflow-hidden px-4 py-24 sm:min-h-[75dvh] sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[4rem_4rem] sm:bg-size-[6rem_4rem]"
      />
      <div
        aria-hidden
        className="absolute top-[18%] -left-16 size-64 rounded-full bg-[#dbf4a7]/35 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-[20%] -right-20 size-72 rounded-full bg-[#1b4332]/8 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <span
          className={cn(
            typography.badge,
            "mb-5 rounded-full border border-[#1b4332]/10 bg-[#dbf4a7]/35 px-3 py-1 text-[#1b4332]",
          )}
        >
          Error 404
        </span>

        <p
          aria-hidden
          className="font-heading text-[6.5rem] leading-none font-bold tracking-[-0.06em] text-[#0a1629]/8 select-none sm:text-[8rem] md:text-[9.5rem]"
        >
          404
        </p>

        <h1
          className={cn(
            typography.sectionTitle,
            "mt-2 text-[#0a1629]",
          )}
        >
          Page not found
        </h1>

        <p className={cn(typography.bodyLg, "mt-4 max-w-md")}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back home.
        </p>

        <Link
          href="/"
          className="group relative mt-8 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#0a1629] py-3 pr-3 pl-5 text-sm font-semibold text-[#c8e98a] transition-transform hover:scale-[1.02] sm:mt-10 sm:py-3.5 sm:pr-3.5 sm:pl-6"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_30%,rgba(219,244,167,0.22)_50%,transparent_70%)] animate-hero-btn-shine"
          />
          <span className="relative flex size-8 items-center justify-center rounded-full bg-[#1b4332] text-white transition-colors group-hover:bg-[#163728] sm:size-9">
            <IconArrowLeft className="size-4" stroke={2} aria-hidden />
          </span>
          <span className="relative">Back to home</span>
        </Link>
      </div>
    </main>
  );
}
