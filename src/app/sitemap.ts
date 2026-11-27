import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";

const pages = [
  {
    path: "",
  },
  {
    path: "/capabilities",
  },
  {
    path: "/capacity",
  },
  {
    path: "/compliance",
  },
  {
    path: "/denim-jeans-private-label",
  },
  {
    path: "/factory",
  },
  {
    path: "/inquiry",
  },
  {
    path: "/knit-garment-manufacturer",
  },
  {
    path: "/low-moq-clothing-manufacturer",
  },
  {
    path: "/quality",
  },
  {
    path: "/usa-canada-apparel-sourcing",
  },
  {
    path: "/woven-apparel-manufacturer-usa",
  },
  {
    path: "/wrap-bsci-compliant-factory",
  },
  {
    path: "/work-with-us",
  },
  {
    path: "/blog",
  },
] as const;

const blogPages = getBlogPosts().map((post) => ({
  path: `/blog/${post.slug}`,
}));


export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [...pages, ...blogPages].map(({ path: pagePath }) => ({
    url: new URL(pagePath || "/", siteUrl).toString(),
    changeFrequency:
      pagePath === "" ? "weekly" : pagePath.startsWith("/blog") ? "weekly" : "monthly",
    priority: pagePath === "" ? 1 : 0.8,
  }));
}
