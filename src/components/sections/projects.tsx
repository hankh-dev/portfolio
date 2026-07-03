import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { projects } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Projects({
  dict,
  locale,
}: {
  dict: Dictionary["projects"];
  locale: Locale;
}) {
  return (
    <Section
      id="projects"
      kicker={dict.kicker}
      heading={dict.heading}
      subheading={dict.subheading}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.slug}
            delay={(i % 2) * 0.05}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/25"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="font-mono text-xs text-muted">{project.year}</span>
            </div>
            <div className="mt-3 flex-1">
              <p className="text-sm leading-relaxed text-muted">
                {project.description[locale]}
              </p>
              {project.highlights && (
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {project.highlights[locale].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-foreground/5 px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {project.links && project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
                  >
                    {link.label[locale]}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
