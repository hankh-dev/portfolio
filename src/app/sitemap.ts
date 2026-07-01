import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getAllPosts } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push(
      { url: `${siteUrl}/${locale}`, lastModified: new Date(), priority: 1 },
      { url: `${siteUrl}/${locale}/blog`, lastModified: new Date(), priority: 0.6 },
    );
    for (const post of getAllPosts(locale)) {
      entries.push({
        url: `${siteUrl}/${locale}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        priority: 0.5,
      });
    }
  }

  return entries;
}
