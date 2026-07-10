"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  IconBrandBootstrap,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandWordpress,
  IconCornerRightDown,
} from "@tabler/icons-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { BentoItem } from "../BentoGrid";

const ITEMS = [
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "React", icon: IconBrandReact },
  { name: "WordPress", icon: IconBrandWordpress },
  { name: "Bootstrap", icon: IconBrandBootstrap },
] as const;

type ToolkitProps = {
  children?: React.ReactNode;
};

export function Toolkit({
  children = (
    <>
      Building modern web experiences with
      <IconCornerRightDown className="size-6 shrink-0" aria-hidden />
    </>
  ),
}: ToolkitProps) {
  return (
    <BentoItem className="col-span-2 flex flex-col gap-3 bg-white p-3 min-[480px]:gap-4 min-[480px]:p-4 lg:col-span-2 dark:bg-slate-800/50">
      <div className="flex h-full flex-col justify-center gap-3 min-[480px]:gap-4">
        <p className={cn(typography.cardLead, "flex flex-wrap items-end justify-center gap-2 text-center min-[480px]:justify-start min-[480px]:text-left")}>
          {children}
        </p>

        <Carousel
          plugins={[AutoScroll({
            playOnInit: true,
            speed: 0.8,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          })]}
          opts={{ loop: true, dragFree: true }}
        >
          <CarouselContent>
            {ITEMS.map(({ name, icon: Icon }, index) => (
              <CarouselItem key={name} className="basis-1/2 min-[480px]:basis-1/3">
                <div
                  className={`flex items-center justify-center rounded-lg border p-4 min-[480px]:p-5 md:p-6 ${index % 2 === 0 ? "bg-muted/50" : "border-dashed border-slate-200 dark:border-slate-600"}`}
                >
                  <Icon stroke={1} className="size-5 min-[480px]:size-6" aria-label={name} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </BentoItem>
  );
}
