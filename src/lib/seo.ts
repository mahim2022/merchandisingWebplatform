import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://sourceloom.me";

export function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return new URL(FALLBACK_SITE_URL);
  }

  const normalizedUrl = /^https?:\/\//i.test(configuredUrl)
    ? configuredUrl
    : `https://${configuredUrl}`;

  try {
    const parsedUrl = new URL(normalizedUrl);
    const isLocalhost =
      parsedUrl.hostname === "localhost" || parsedUrl.hostname === "127.0.0.1";

    if (process.env.NODE_ENV === "production" && isLocalhost) {
      return new URL(FALLBACK_SITE_URL);
    }

    return parsedUrl;
  } catch {
    return new URL(FALLBACK_SITE_URL);
  }
}

export function getSiteName(): string {
  return process.env.NEXT_PUBLIC_COMPANY_NAME?.trim() || "SourceLoom";
}

export function getContactEmail(): string {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";
}

export function getContactPhone(): string {
  return process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "";
}

export function getLogoUrl(): string {
  return process.env.NEXT_PUBLIC_LOGO_URL?.trim() || "";
}

export function getPrimaryMarkets(): string[] {
  return ["United States", "Canada", "Australia", "European Union"];
}

export function getGoogleSiteVerification(): string {
  return process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || "";
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

type BuildBreadcrumbSchemaInput = {
  title: string;
  path: string;
};

type BuildFaqSchemaInput = {
  questions: Array<{
    question: string;
    answer: string;
  }>;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: BuildPageMetadataInput): Metadata {
  const siteName = getSiteName();

  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteName} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image"],
    },
  };
}

export function buildBreadcrumbSchema({ title, path }: BuildBreadcrumbSchemaInput) {
  const siteUrl = getSiteUrl();
  const homeUrl = new URL("/", siteUrl).toString();
  const pageUrl = new URL(path || "/", siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement:
      path === "/"
        ? [
            {
              "@type": "ListItem",
              position: 1,
              name: title,
              item: homeUrl,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: pageUrl,
            },
          ],
  };
}

    export function buildFaqSchema({ questions }: BuildFaqSchemaInput) {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((entry) => ({
          "@type": "Question",
          name: entry.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: entry.answer,
          },
        })),
      };
    }

export function buildOrganizationSchema() {
  const siteUrl = getSiteUrl();
  const siteName = getSiteName();
  const email = getContactEmail();
  const phone = getContactPhone();
  const logoUrl = getLogoUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl.toString(),
    email,
    telephone: phone,
    ...(logoUrl && { logo: logoUrl }),
    sameAs: [
      "https://www.linkedin.com/company/sourceloom",
      "https://www.facebook.com/sourceloom",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Dhaka",
    },
    description: "B2B apparel manufacturing and sourcing platform for international brands",
    knowsAbout: [
      "Knit Garment Manufacturing",
      "Woven Apparel Production",
      "Denim Manufacturing",
      "BSCI Compliance",
      "Quality Assurance",
    ],
  };
}

export function buildLocalBusinessSchema() {
  const siteUrl = getSiteUrl();
  const siteName = getSiteName();
  const email = getContactEmail();
  const phone = getContactPhone();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    image: getLogoUrl(),
    description: "BSCI-compliant apparel manufacturing factory for B2B buyers",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Factory Location",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka",
      postalCode: "",
      addressCountry: "BD",
    },
    contact: {
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "Customer Service",
      email,
    },
    url: siteUrl.toString(),
    priceRange: "Custom Quotes Available",
    areaServed: ["US", "CA", "AU", "GB", "DE", "FR"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
      description: "Standard business hours (Bangladesh Time)",
    },
  };
}
