import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({
  dict,
  locale,
}: {
  dict: Dictionary["hero"];
  locale: Locale;
}) {
  return (
    <section className="relative">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-center px-6 py-20">
        <Reveal>
          <p className="font-mono text-sm font-medium text-accent">
            {dict.greeting}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
            {dict.name}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2 text-2xl font-medium text-muted sm:text-3xl">
            {dict.role}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {dict.tagline}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`/${locale}#projects`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              {dict.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              {dict.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href={`/${locale}#about`}
        aria-label={dict.scroll}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-foreground sm:block"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
