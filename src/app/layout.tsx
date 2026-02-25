import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SourceLoom - B2B Apparel Manufacturing & Sourcing Platform",
    template: "%s | SourceLoom",
  },
  description:
    "Professional apparel manufacturer for EU, Canadian, and Australian markets. Evaluate our manufacturing capability, compliance, capacity, lead times, and quality control. WRAP certified, BSCI compliant facility.",
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
    "EU apparel sourcing",
    "Canadian garment supplier",
    "Australian clothing manufacturer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SourceLoom",
    title: "Professional Apparel Manufacturing & Sourcing Platform",
    description:
      "Evaluate manufacturing capability, compliance, and capacity for your apparel sourcing needs. WRAP certified B2B apparel manufacturer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
