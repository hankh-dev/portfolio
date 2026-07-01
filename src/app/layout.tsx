import "./globals.css";

/**
 * Root layout is intentionally minimal: the real <html>/<body> live in
 * `app/[locale]/layout.tsx` so the `lang` attribute can be set per-locale.
 * This is the supported pattern for locale-segment routing in the App Router.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
