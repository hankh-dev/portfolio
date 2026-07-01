import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  kicker?: string;
  heading?: string;
  subheading?: string;
  children: ReactNode;
};

/** Consistent section shell: anchor target, heading block, and width. */
export function Section({ id, kicker, heading, subheading, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        {(kicker || heading) && (
          <Reveal className="mb-12">
            {kicker && (
              <p className="font-mono text-sm font-medium text-accent">{kicker}</p>
            )}
            {heading && (
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-3 max-w-2xl text-muted">{subheading}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
