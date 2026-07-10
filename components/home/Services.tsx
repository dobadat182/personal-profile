"use client";

import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { ServiceStep } from "@/lib/services";
import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState<ServiceStep[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("loading");

  useEffect(() => {
    const controller = new AbortController();
    const fetchServices = async () => {
      setStatus("loading");
      try {
        const response = await fetch("/api/services", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setServices(data);
        setStatus("idle");
      } catch (err) {
        if ((err as Error).name !== "AbortError") setStatus("error");
      }
    };
    fetchServices();
    return () => controller.abort();
  }, []);

  if (status === "error") {
    return (
      <Section>
        <Container>
          <p className={cn(typography.bodySm, "text-muted-foreground text-center")}>
            Unable to load services. Please try again later.
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="process" className="py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-50 py-10 sm:rounded-3xl px-4 sm:py-12 md:py-16 lg:py-20">
          <Container
            eyebrow="Process"
            heading="How I work with clients"
            description="My process for building successful projects."
            className="max-w-none px-0 sm:px-0"
          >
            {status === "loading" ? (
              <p className={cn(typography.bodySm, "text-muted-foreground text-center")}>Loading…</p>
            ) : (
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                {services.map((step) => (
                  <article
                    key={step.subtitle}
                    className="bg-card flex flex-col items-center gap-4 rounded-2xl border border-slate-200 p-4 text-center sm:gap-5 sm:p-5 md:flex-row md:items-center md:text-left"
                  >
                    <span
                      className={cn(
                        typography.statNumber,
                        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white min-[480px]:h-14 min-[480px]:w-14 md:h-16 md:w-16",
                      )}
                      aria-hidden
                    >
                      {step.title}
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className={typography.cardTitle}>{step.subtitle}</h3>
                      <p className={cn(typography.bodySm, "text-muted-foreground mt-1.5")}>
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Services;
