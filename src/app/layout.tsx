import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import {
  getContactEmail,
  getContactPhone,
  getGoogleSiteVerification,
  getLogoUrl,
  getPrimaryMarkets,
  getSiteName,
  getSiteUrl,
} from "@/lib/seo";

import Header from "@/components/layout/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const siteName = getSiteName();
const siteUrl = getSiteUrl();
const siteOrigin = siteUrl.toString().replace(/\/$/, "");
const contactEmail = getContactEmail();
const contactPhone = getContactPhone();
const googleSiteVerification = getGoogleSiteVerification();
const logoUrl = getLogoUrl();
const primaryMarkets = getPrimaryMarkets();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteOrigin,
  ...(logoUrl ? { logo: logoUrl } : {}),
  ...(contactEmail ? { email: contactEmail } : {}),
  ...(contactPhone ? { telephone: contactPhone } : {}),
  areaServed: primaryMarkets,
  knowsAbout: ["Knit Garments", "Woven Garments", "Denim Manufacturing"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteOrigin,
  inLanguage: "en",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "B2B Apparel Manufacturing",
  provider: {
    "@type": "Organization",
    name: siteName,
    url: siteOrigin,
  },
  areaServed: primaryMarkets,
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Fashion brands, importers, and apparel buyers",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Manufacturing Categories",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Knit Garment Manufacturing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Woven Garment Manufacturing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Denim Product Manufacturing" } },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteName} - B2B Apparel Manufacturing & Sourcing Platform`,
    template: `%s | ${siteName}`,
  },
  description:
    "Professional B2B apparel manufacturer for U.S., Canada, Australia, and EU markets. Evaluate capabilities, compliance, capacity, lead times, and quality control. WRAP certified and BSCI compliant facility.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "apparel sourcing platform",
    "garment manufacturer",
    "clothing manufacturer",
    "B2B apparel sourcing",
    "overseas apparel production",
    "knit garments",
    "woven garments",
    "denim manufacturing",
    "WRAP certified factory",
    "BSCI compliance",
    "garment quality control",
    "US apparel sourcing",
    "Canadian garment supplier",
    "Australian clothing manufacturer",
  ],
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    url: "/",
    title: "Professional Apparel Manufacturing & Sourcing Platform",
    description:
      "Evaluate manufacturing capability, compliance, and capacity for your apparel sourcing needs. WRAP certified B2B apparel manufacturer.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteName} - B2B Apparel Manufacturing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Apparel Manufacturing & Sourcing Platform",
    description:
      "Evaluate manufacturing capability, compliance, and capacity for your apparel sourcing needs. WRAP certified B2B apparel manufacturer.",
    images: ["/twitter-image"],
  },
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
