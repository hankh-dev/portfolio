import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import type { Dictionary } from "@/i18n/dictionaries";

export function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <Section id="about" kicker={dict.kicker} heading={dict.heading}>
      <div className="grid max-w-3xl gap-6 text-lg leading-relaxed text-muted">
        {dict.body.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
