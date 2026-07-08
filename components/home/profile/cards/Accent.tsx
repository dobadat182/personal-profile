"use client";

import { Globe as GlobeCanvas } from "@/components/ui/globe";
import { BentoItem } from "../BentoGrid";

export function Accent() {
  return (
    <BentoItem className="relative col-span-1 min-h-[120px] overflow-hidden border-slate-200 bg-slate-100/80 bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))] min-[480px]:min-h-[140px] lg:col-span-1 lg:min-h-0 dark:border-slate-700 dark:bg-slate-800/50">
      <GlobeCanvas />
    </BentoItem>
  );
}
