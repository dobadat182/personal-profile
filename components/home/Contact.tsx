import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";
import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import {
  IconArrowUpRight,
  IconMail,
  IconMapPin,
  IconClockHour4,
} from "@tabler/icons-react";
import Link from "next/link";

const DETAILS = [
  {
    icon: IconMail,
    label: "Email",
    value: "badat336@gmail.com",
    href: "mailto:badat336@gmail.com",
  },
  {
    icon: IconMapPin,
    label: "Based in",
    value: "Vietnam · Remote worldwide",
  },
  {
    icon: IconClockHour4,
    label: "Response",
    value: "Within 1–2 business days",
  },
] as const;

const fieldClass =
  "h-11 rounded-2xl border border-slate-200/80 bg-white px-4 text-sm text-[#0a1629] shadow-none placeholder:text-slate-400 focus-visible:border-[#1b4332]/35 focus-visible:ring-[#dbf4a7]/50";

const Contact = () => {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-slate-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-[#dbf4a7]/30 blur-3xl"
      />

      <Container
        eyebrow="Contact"
        heading="Let's build something together"
        description="Tell me about your idea, timeline, and goals — I'll get back with next steps."
      >
        <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <aside className="order-2 space-y-6 lg:sticky lg:top-24 lg:order-1 lg:self-start lg:pt-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1b4332]/10 bg-[#dbf4a7]/40 px-3 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute size-full animate-ping rounded-full bg-[#1b4332]/40" />
                <span className="relative size-2 rounded-full bg-[#1b4332]" />
              </span>
              <span
                className={cn(
                  typography.badge,
                  "tracking-[0.14em] text-[#1b4332]",
                )}
              >
                Open for opportunity
              </span>
            </div>

            <p className={cn(typography.body, "max-w-sm text-[#0a1629]/70")}>
              Whether it&apos;s a product rebuild, a marketing site, or a
              long-term frontend partnership — I&apos;d love to hear what
              you&apos;re working on.
            </p>

            <ul className="space-y-4">
              {DETAILS.map(({ icon: Icon, label, value, ...rest }) => {
                const href = "href" in rest ? rest.href : undefined;
                const content = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#0a1629]">
                      <Icon className="size-4" stroke={1.75} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className={cn(typography.label, "block")}>
                        {label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-[#0a1629]">
                        {value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={label}>
                    {href ? (
                      <Link
                        href={href}
                        className="flex items-center gap-3 rounded-2xl transition-colors hover:opacity-80"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="relative order-1 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(10,22,41,0.06)] sm:rounded-[2rem] sm:p-6 md:p-8 lg:order-2">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-[#dbf4a7]/35 blur-3xl"
            />

            <p
              className={cn(
                typography.bodySm,
                "relative mb-5 rounded-2xl border border-[#1b4332]/10 bg-[#dbf4a7]/25 px-4 py-3 text-[#1b4332]",
              )}
            >
              This is just UI — please contact me through the information in the sidebar.
            </p>

            <form className="relative space-y-5">
              <FieldSet>
                <FieldGroup className="gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel
                        htmlFor="name"
                        className={cn(typography.label, "mb-2")}
                      >
                        Your name
                      </FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Alex Nguyen"
                        className={fieldClass}
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="email"
                        className={cn(typography.label, "mb-2")}
                      >
                        Email
                      </FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        className={fieldClass}
                        required
                      />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel className={cn(typography.label, "mb-2")}>
                      Project type
                    </FieldLabel>
                    <Select name="projectType">
                      <SelectTrigger
                        className={cn(
                          fieldClass,
                          "w-full min-w-0 data-[size=default]:h-11",
                        )}
                      >
                        <SelectValue placeholder="What are you looking for?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="website">
                            Marketing / company website
                          </SelectItem>
                          <SelectItem value="webapp">
                            Web app / product UI
                          </SelectItem>
                          <SelectItem value="redesign">
                            Redesign / rebuild
                          </SelectItem>
                          <SelectItem value="collaboration">
                            Ongoing collaboration
                          </SelectItem>
                          <SelectItem value="other">Something else</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field>
                    <FieldLabel
                      htmlFor="message"
                      className={cn(typography.label, "mb-2")}
                    >
                      Project details
                    </FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Share a bit about the problem, your users, timeline, and any links that help."
                      className={cn(
                        fieldClass,
                        "min-h-32 rounded-2xl py-3 leading-relaxed",
                      )}
                      required
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#0a1629] py-3 pr-2.5 pl-6 text-sm font-semibold text-[#c8e98a] transition-transform hover:scale-[1.02] sm:w-auto cursor-pointer"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_30%,rgba(219,244,167,0.22)_50%,transparent_70%)] animate-hero-btn-shine"
                  />
                  <span className="relative">Send message</span>
                  <span className="relative flex size-8 items-center justify-center rounded-full bg-[#1b4332] text-white transition-colors group-hover:bg-[#163728]">
                    <IconArrowUpRight className="size-4" stroke={2} aria-hidden />
                  </span>
                </button>

                <p
                  className={cn(
                    typography.caption,
                    "text-center text-[#0a1629]/45 sm:text-left",
                  )}
                >
                  No spam — just a thoughtful reply.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
