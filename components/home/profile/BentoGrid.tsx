import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type BentoItemProps = ComponentProps<"div">;

export function BentoItem({ className, children, ...props }: BentoItemProps) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-2xl border border-slate-200 sm:rounded-3xl dark:border-slate-700",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoGrid({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 rounded-2xl bg-slate-50 p-3 min-[480px]:grid-cols-2 min-[480px]:gap-4 min-[480px]:p-4 sm:auto-rows-[minmax(180px,auto)] md:auto-rows-[minmax(200px,auto)] md:rounded-[2rem] md:p-5 lg:grid-cols-4 lg:rounded-[2.5rem] lg:p-6 dark:bg-slate-900/30",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
