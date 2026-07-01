import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { experience } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Experience({
  dict,
  locale,
}: {
  dict: Dictionary["experience"];
  locale: Locale;
}) {
  return (
    <Section
      id="experience"
      kicker={dict.kicker}
      heading={dict.heading}
      subheading={dict.subheading}
    >
      <ol className="relative border-l border-border">
        {experience.map((item, i) => (
          <Reveal
            as="li"
            key={`${item.company}-${item.start}`}
            delay={i * 0.05}
            className="relative ml-6 pb-10 last:pb-0"
          >
            <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-base font-semibold">
                {item.role[locale]}
                <span className="text-muted"> · {item.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">
                {item.start} – {item.end === "present" ? dict.present : item.end}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description[locale]}
            </p>
            {item.tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-foreground/5 px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
