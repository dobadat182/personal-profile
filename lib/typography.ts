/**
 * Typography scale — mobile-first, Cabinet Grotesk (font-heading) for titles,
 * Satoshi (font-sans) for body and UI.
 */
export const type = {
  display:
    "font-heading text-[1.75rem] leading-[1.1] font-bold tracking-[-0.03em] text-balance text-foreground min-[480px]:text-[2rem] sm:text-5xl sm:leading-[1.08] sm:tracking-[-0.04em] md:text-[3.35rem] md:leading-[1.06] lg:text-6xl",

  sectionTitle:
    "font-heading text-2xl leading-[1.1] font-bold tracking-[-0.03em] text-balance text-foreground sm:text-3xl sm:leading-[1.08] md:text-4xl lg:text-5xl",

  intro:
    "font-heading text-xl leading-[1.14] font-semibold tracking-[-0.02em] text-balance text-foreground min-[480px]:text-2xl sm:text-3xl sm:leading-[1.12] md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",

  cardTitle:
    "font-heading text-base leading-snug font-semibold tracking-tight text-foreground sm:text-lg md:text-xl",

  cardLead:
    "font-heading text-lg leading-snug font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl",

  bodyLg:
    "text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg",

  body: "text-sm leading-relaxed sm:text-base",

  bodySm: "text-xs leading-relaxed sm:text-sm",

  eyebrow:
    "text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase min-[480px]:text-[11px] min-[480px]:tracking-[0.22em]",

  label:
    "text-[9px] font-medium tracking-[0.16em] text-muted-foreground uppercase min-[480px]:text-[10px] min-[480px]:tracking-[0.2em]",

  badge:
    "text-[9px] font-semibold tracking-[0.14em] uppercase min-[480px]:text-[10px] min-[480px]:tracking-[0.16em]",

  tag: "text-[11px] font-medium sm:text-xs",

  caption:
    "text-[11px] leading-relaxed text-muted-foreground sm:text-xs md:text-sm",

  stat: "text-xs font-medium text-foreground sm:text-sm",

  statNumber:
    "font-heading text-xl font-medium tabular-nums text-foreground sm:text-2xl md:text-3xl",

  button: "text-sm font-semibold sm:text-base",
} as const;
