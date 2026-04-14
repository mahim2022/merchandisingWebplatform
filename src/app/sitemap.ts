import type { MetadataRoute } from "next";
import { statSync } from "fs";
import path from "path";
import { getSiteUrl } from "@/lib/seo";

const pages = [
  {
    path: "",
    source: "src/app/page.tsx",
  },
  {
    path: "/capabilities",
    source: "src/app/capabilities/page.tsx",
  },
  {
    path: "/capacity",
    source: "src/app/capacity/page.tsx",
  },
  {
    path: "/compliance",
    source: "src/app/compliance/page.tsx",
  },
  {
    path: "/denim-jeans-private-label",
    source: "src/app/denim-jeans-private-label/page.tsx",
  },
  {
    path: "/factory",
    source: "src/app/factory/page.tsx",
  },
  {
    path: "/inquiry",
    source: "src/app/inquiry/page.tsx",
  },
  {
    path: "/knit-garment-manufacturer",
    source: "src/app/knit-garment-manufacturer/page.tsx",
  },
  {
    path: "/low-moq-clothing-manufacturer",
    source: "src/app/low-moq-clothing-manufacturer/page.tsx",
  },
  {
    path: "/quality",
    source: "src/app/quality/page.tsx",
  },
  {
    path: "/usa-canada-apparel-sourcing",
    source: "src/app/usa-canada-apparel-sourcing/page.tsx",
  },
  {
    path: "/woven-apparel-manufacturer-usa",
    source: "src/app/woven-apparel-manufacturer-usa/page.tsx",
  },
  {
    path: "/wrap-bsci-compliant-factory",
    source: "src/app/wrap-bsci-compliant-factory/page.tsx",
  },
  {
    path: "/work-with-us",
    source: "src/app/work-with-us/page.tsx",
  },
] as const;

function getLastModified(source: string): Date {
  try {
    return statSync(path.join(process.cwd(), source)).mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return pages.map(({ path: pagePath, source }) => ({
    url: new URL(pagePath || "/", siteUrl).toString(),
    lastModified: getLastModified(source),
    changeFrequency: pagePath === "" ? "weekly" : "monthly",
    priority: pagePath === "" ? 1 : 0.8,
  }));
}
