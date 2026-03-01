import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

const pages = [
  "",
  "/capabilities",
  "/capacity",
  "/compliance",
  "/denim-jeans-private-label",
  "/factory",
  "/inquiry",
  "/knit-garment-manufacturer",
  "/low-moq-clothing-manufacturer",
  "/quality",
  "/usa-canada-apparel-sourcing",
  "/woven-apparel-manufacturer-usa",
  "/wrap-bsci-compliant-factory",
  "/work-with-us",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return pages.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
