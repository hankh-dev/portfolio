"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

/** Switches locale while preserving the current path. */
export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || `/${current}`;

  function pathForLocale(locale: Locale) {
    const segments = pathname.split("/");
    // segments[0] is "" (leading slash); segments[1] is the locale.
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div className="flex items-center rounded-md border border-border text-xs font-medium">
      {locales.map((locale, i) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={pathForLocale(locale)}
            aria-current={active ? "true" : undefined}
            className={[
              "px-2.5 py-1.5 uppercase transition-colors",
              i > 0 ? "border-l border-border" : "",
              active
                ? "bg-foreground/5 text-foreground"
                : "text-muted hover:text-foreground",
            ].join(" ")}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
