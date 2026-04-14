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
  title: "Submit Production Inquiry",
  description:
    "Send your apparel production requirements and receive capability confirmation, MOQ guidance, and indicative lead times within 24 hours.",
  path: "/inquiry",
  keywords: [
    "apparel production inquiry",
    "garment manufacturing quote",
    "B2B sourcing request form",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Submit Production Inquiry",
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
  name: "Submit Production Inquiry",
  url: `${siteOrigin}/inquiry`,
  description:
    "Submit your apparel production inquiry and receive capability confirmation, MOQ guidance, and lead-time estimates.",
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
