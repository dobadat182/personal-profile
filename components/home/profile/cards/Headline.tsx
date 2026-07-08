import { SparklesText } from "@/components/ui/sparkles-text";
import { type as typography } from "@/lib/typography";
import { BentoItem } from "../BentoGrid";

export function Headline() {
  return (
    <BentoItem className="order-last flex min-h-[120px] items-center justify-center bg-white p-3 text-center min-[480px]:min-h-[140px] lg:order-0 lg:col-span-1 dark:bg-slate-800/50">
      <SparklesText className={typography.cardLead} sparklesCount={6}>Frontend</SparklesText>
    </BentoItem>
  );
}
