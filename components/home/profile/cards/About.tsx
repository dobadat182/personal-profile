import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { BentoItem } from "../BentoGrid";

const HIGHLIGHTS = [
  { label: "Role", value: "Frontend Developer" },
  { label: "Stack", value: "React · Next.js · TS" },
  { label: "Location", value: "Vietnam" },
] as const;

const FOCUS = [
  "UI Engineering",
  "Performance",
  "Responsive UX",
  "CMS Integration",
] as const;

const DEFAULT_BIO =
  "I turn product ideas into polished web experiences — from fast interfaces to maintainable architecture that scales with your team.";

type AboutProps = {
  children?: React.ReactNode;
};

export function About({ children }: AboutProps) {
  return (
    <BentoItem className="col-span-2 flex min-h-[280px] flex-col justify-between gap-4 bg-white p-3 min-[480px]:p-4 lg:col-span-1 lg:row-span-2 lg:min-h-0 dark:bg-slate-800/50">
      {children ?? (
        <>
          <div className="relative flex flex-col gap-4">
            <div className="flex flex-col gap-2 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-3">
              <span className={typography.label}>About</span>

              <span
                className={cn(
                  typography.badge,
                  "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#dbf4a7]/50 px-2.5 py-1 text-[#1b4332]",
                )}
              >
                <span className="size-1.5 rounded-full bg-[#1b4332]" />
                Available for work
              </span>
            </div>

            <p className={typography.cardLead}>
              Building for clarity, speed, and craft.
            </p>

            <p className={typography.bodySm}>{DEFAULT_BIO}</p>
          </div>

          <div className="relative mt-6 flex flex-col gap-5 lg:mt-8">
            <dl className="grid gap-3">
              {HIGHLIGHTS.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-3 border-b border-slate-100 pb-3 last:border-0 dark:border-slate-700/60"
                >
                  <dt className={typography.label}>{label}</dt>
                  <dd className={cn("text-right", typography.stat)}>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-1.5">
              {FOCUS.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    typography.tag,
                    "bg-muted text-muted-foreground inline-flex rounded-full px-2.5 py-1",
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </BentoItem>
  );
}
