"use client";

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
    // Plain <a> for a full-page navigation on locale change. A soft (client)
    // navigation would re-render the [locale] layout — and with it next-themes'
    // injected <script>, which React flags on the client. A hard nav also
    // guarantees the <html lang> attribute is refreshed correctly.
    <div className="flex items-center rounded-md border border-border text-xs font-medium">
      {locales.map((locale, i) => {
        const active = locale === current;
        return (
          <a
            key={locale}
            href={pathForLocale(locale)}
            aria-current={active ? "true" : undefined}
            hrefLang={locale}
            className={[
              "px-2.5 py-1.5 uppercase transition-colors",
              i > 0 ? "border-l border-border" : "",
              active
                ? "bg-foreground/5 text-foreground"
                : "text-muted hover:text-foreground",
            ].join(" ")}
          >
            {locale}
          </a>
        );
      })}
    </div>
  );
}
