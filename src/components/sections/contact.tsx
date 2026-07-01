import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/dictionaries";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <Section
      id="contact"
      kicker={dict.kicker}
      heading={dict.heading}
      subheading={dict.subheading}
    >
      <div className="mx-auto max-w-xl">
        <Reveal>
          <ContactForm dict={dict} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-sm text-muted">
            {dict.or}:{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
