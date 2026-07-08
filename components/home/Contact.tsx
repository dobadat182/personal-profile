import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { type as typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

const Contact = () => {
  return (
    <Section>
      <Container className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12">
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          <p className={typography.eyebrow}>Contact</p>
          <h2 className={typography.sectionTitle}>
            Let&apos;s build something together
          </h2>
          <p className={cn(typography.bodyLg, "max-w-xl")}>
            Tell me about your idea, timeline, and goals. I&apos;ll review your
            message and get back to you with next steps and a realistic plan.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-slate-200 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-5 dark:border-slate-700 dark:bg-slate-900/40">
          <form className="space-y-4">
            <FieldSet>
              <FieldGroup>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="username">Your Name</FieldLabel>
                    <Input id="username" type="text" placeholder="John Doe" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel>Department</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">
                          Customer Support
                        </SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>Project details</FieldLabel>
                  <Textarea
                    rows={4}
                    placeholder="Share a bit about the problem, your users, and any deadlines."
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send message
              </Button>
              <p className={cn(typography.caption, "text-muted-foreground")}>
                I usually respond within 1–2 business days.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
