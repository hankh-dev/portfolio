"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary["nav"];
};

export function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const base = `/${locale}`;
  const onBlog = pathname?.startsWith(`${base}/blog`);

  const links = [
    { href: `${base}#about`, label: dict.about },
    { href: `${base}#skills`, label: dict.skills },
    { href: `${base}#projects`, label: dict.projects },
    // { href: `${base}#experience`, label: dict.experience }, // hidden with the Experience section
    { href: `${base}/blog`, label: dict.blog, active: onBlog },
    { href: `${base}#contact`, label: dict.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href={base}
          className="font-mono text-sm font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          hankh<span className="text-accent">.</span>dev
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={[
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  link.active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                ].join(" ")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} />
          <ThemeToggle label={dict.themeToggle} />
          <button
            type="button"
            aria-label={dict.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-border bg-background px-6 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2.5 text-sm text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
