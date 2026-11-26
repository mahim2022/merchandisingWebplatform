import type { Metadata } from "next";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import {
  getContactEmail,
  getContactPhone,
  getPrimaryMarkets,
  getSiteName,
  getSiteUrl,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact SourceLoom",
  description:
    "Contact SourceLoom about apparel production requirements by email or phone.",
  path: "/inquiry",
  keywords: [
    "apparel production inquiry",
    "garment manufacturing quote",
    "apparel sourcing contact",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Contact SourceLoom",
  path: "/inquiry",
});

const siteName = getSiteName();
const siteOrigin = getSiteUrl().toString().replace(/\/$/, "");
const contactEmail = getContactEmail();
const contactPhone = getContactPhone();
const primaryMarkets = getPrimaryMarkets();

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact SourceLoom",
  url: `${siteOrigin}/inquiry`,
  description:
    "Contact SourceLoom about apparel production requirements.",
  mainEntity: {
    "@type": "Organization",
    name: siteName,
    ...(contactEmail ? { email: contactEmail } : {}),
    ...(contactPhone ? { telephone: contactPhone } : {}),
    areaServed: primaryMarkets,
  },
};

export default function InquiryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}

