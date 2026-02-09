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
    default: "Apex Garments Ltd. - B2B Garment Manufacturing & Apparel Sourcing",
    template: "%s | Apex Garments Ltd.",
  },
  description:
    "Professional garment manufacturer for EU, Canadian, and Australian markets. Evaluate our manufacturing capability, compliance, capacity, lead times, and quality control. WRAP certified, BSCI compliant facility.",
  keywords: [
    "garment factory",
    "apparel manufacturing",
    "clothing manufacturer",
    "B2B garment sourcing",
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
    siteName: "Apex Garments Ltd.",
    title: "Professional Garment Manufacturing & Apparel Sourcing",
    description:
      "Evaluate manufacturing capability, compliance, and capacity for your apparel sourcing needs. WRAP certified B2B garment factory.",
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
