import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { skillGroups } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Skills({
  dict,
  locale,
}: {
  dict: Dictionary["skills"];
  locale: Locale;
}) {
  return (
    <Section
      id="skills"
      kicker={dict.kicker}
      heading={dict.heading}
      subheading={dict.subheading}
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.category.en}
            delay={(i % 3) * 0.05}
            className="bg-background p-6"
          >
            <h3 className="font-mono text-sm font-medium text-accent">
              {group.category[locale]}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border px-2.5 py-1 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
