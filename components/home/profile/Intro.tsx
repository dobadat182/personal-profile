import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type IntroProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Intro({ children, className }: IntroProps) {
  return (
    <div className={cn("mb-6 px-1 text-center sm:mb-8 sm:px-0 md:mb-10", className)}>
      {children ?? (
        <h2 className={typography.intro}>
          Passionate developer crafting performant, user-friendly web
          experiences with modern Typescript UI/UX and scalable architecture.
        </h2>
      )}
    </div>
  );
}
