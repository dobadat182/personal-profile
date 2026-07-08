"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { PROJECTS, type Project } from "@/lib/projects";
import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { BentoItem } from "../BentoGrid";

const FEATURED = PROJECTS.filter((project) => project.featured);

function hasProjectLink(href: string) {
  return Boolean(href && href !== "#");
}

type FeaturedSlideProps = {
  project: Project;
  index: number;
  total: number;
};

function FeaturedSlide({ project, index, total }: FeaturedSlideProps) {
  const hasLink = hasProjectLink(project.href);
  const initial = project.name.charAt(0).toUpperCase();

  const card = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white dark:bg-slate-800/50">
      <div
        className="pointer-events-none absolute -top-10 -right-6 size-36 rounded-full bg-zinc-500/25 blur-3xl"
        aria-hidden
      />

      <div className="relative flex shrink-0 items-start justify-between px-4 pt-4">
        <span className={typography.label}>
          Featured
          <br /> {index + 1} of {total}
        </span>

        <span
          className="pointer-events-none absolute top-0 right-2 font-heading text-[4rem] leading-none font-bold text-foreground/6 select-none min-[480px]:right-4 min-[480px]:text-[5.5rem] sm:text-[6.5rem] dark:text-foreground/10"
          aria-hidden
        >
          {initial}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-end px-4 pt-2 pb-3">
        <div className="relative space-y-2.5">
          <h3 className={cn(typography.cardTitle, "line-clamp-2 text-balance")}>
            {project.name}
          </h3>
          <p className={cn(typography.bodySm, "text-muted-foreground line-clamp-3 max-w-10/12")}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={cn(
                  typography.tag,
                  "bg-muted text-muted-foreground inline-flex items-center rounded-full px-2 py-0.5",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`relative flex shrink-0 items-center justify-between border-t px-4 py-2.5 ${hasLink ? "transition-colors group-hover:bg-muted/50" : ""}`}
      >
        <span className={cn(typography.bodySm, "text-muted-foreground font-medium")}>
          {hasLink ? "Visit project" : "Case study"}
        </span>
        {hasLink && <IconArrowRight className="size-4" aria-hidden />}
      </div>
    </article>
  );

  if (!hasLink) return card;

  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      aria-label={`Visit ${project.name}`}
    >
      {card}
    </Link>
  );
}

export function Featured() {
  if (!FEATURED.length) return null;

  return (
    <BentoItem className="relative col-span-1 flex min-h-[300px] flex-col overflow-hidden border-slate-200 bg-slate-100/50 min-[480px]:col-span-2 min-[480px]:min-h-[340px] lg:col-span-2 lg:row-span-2 lg:min-h-0 dark:border-slate-700 dark:bg-slate-900/60">
      <Carousel
        className="h-full"
        plugins={[
          Autoplay({ delay: 3000, stopOnMouseEnter: true }),
          Fade(),
        ]}
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {FEATURED.map((project, index) => (
            <CarouselItem
              className="h-full"
              key={project.name}
            >
              <FeaturedSlide
                project={project}
                index={index}
                total={FEATURED.length}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </BentoItem>
  );
}
