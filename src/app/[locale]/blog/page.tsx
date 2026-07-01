import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getAllPosts } from "@/lib/blog";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ko");
  return { title: dict.blog.navTitle, description: dict.blog.subheading };
}

export default async function BlogListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const l = locale as Locale;
  const dict = await getDictionary(l);
  const posts = getAllPosts(l);
  const fmt = new Intl.DateTimeFormat(l === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Reveal className="mb-12">
        <p className="font-mono text-sm font-medium text-accent">
          {dict.blog.kicker}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {dict.blog.heading}
        </h1>
        <p className="mt-3 text-muted">{dict.blog.subheading}</p>
      </Reveal>

      {posts.length === 0 ? (
        <p className="text-muted">{dict.blog.empty}</p>
      ) : (
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.04}>
              <Link
                href={`/${l}/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="min-w-0">
                  <h2 className="text-lg font-medium transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-1 text-sm text-muted">{post.description}</p>
                  )}
                </div>
                <div className="shrink-0 font-mono text-xs text-muted sm:text-right">
                  {post.date && (
                    <time dateTime={post.date}>
                      {fmt.format(new Date(post.date))}
                    </time>
                  )}
                  <span>
                    {" · "}
                    {post.readingTime} {dict.blog.minRead}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  );
}
