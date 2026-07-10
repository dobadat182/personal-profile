import * as React from "react";
import { cn } from "@/lib/utils";
import { type as typography } from "@/lib/typography";

interface SectionHeadingProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  className?: string;
}

function SectionHeading({
  eyebrow,
  heading,
  description,
  className,
}: SectionHeadingProps) {
  if (!eyebrow && !heading && !description) return null;

  return (
    <header
      className={cn(
        "relative mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-14 lg:mb-16",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 left-1/2 size-28 -translate-x-1/2 rounded-full bg-[#dbf4a7]/25 blur-3xl"
      />

      {eyebrow ? (
        <div className="relative mb-4 flex items-center justify-center gap-2 sm:mb-5 sm:gap-3">
          <span className="h-px w-6 bg-linear-to-r from-transparent to-[#dbf4a7] sm:w-10" />
          <span
            className={cn(
              typography.badge,
              "rounded-full border border-[#1b4332]/10 bg-[#dbf4a7]/35 px-3 py-1 text-[#1b4332]",
            )}
          >
            {eyebrow}
          </span>
          <span className="h-px w-6 bg-linear-to-l from-transparent to-[#dbf4a7] sm:w-10" />
        </div>
      ) : null}

      {heading ? (
        <h2 className={cn("relative", typography.sectionTitle)}>{heading}</h2>
      ) : null}

      {description ? (
        <p className={cn("relative mt-2 md:mt-3", typography.bodyLg)}>
          {description}
        </p>
      ) : null}
    </header>
  );
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  headingClassName?: string;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      children,
      eyebrow,
      heading,
      description,
      headingClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-7xl container px-4 sm:px-6 lg:px-8",
          className,
        )}
        {...props}
      >
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          description={description}
          className={headingClassName}
        />
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export default Container;
export { SectionHeading };
