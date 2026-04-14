import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Apparel Manufacturing Partner for USA & Canada",
  description:
    "Apparel manufacturing partner for USA and Canada brands seeking compliant production, practical lead-time planning, and clear communication from inquiry to shipment.",
  path: "/usa-canada-apparel-sourcing",
  keywords: [
    "apparel manufacturer for usa and canada",
    "usa canada clothing sourcing",
    "export garment manufacturing partner",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Apparel Manufacturing Partner for USA & Canada",
  path: "/usa-canada-apparel-sourcing",
});

export default function UsaCanadaApparelSourcingPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">Apparel Manufacturing Partner for USA & Canada</h1>
          <p className="text-lg text-muted-foreground">
            We support North American buyers with a clear sourcing process,
            compliance-first production, and realistic delivery commitments.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4">Why North American Buyers Choose SourceLoom</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Transparent capability and capacity communication</li>
            <li>Structured QA from raw material to final inspection</li>
            <li>Compliance-aligned production for retail standards</li>
            <li>Buyer-focused support for sampling, costing, and shipment</li>
          </ul>

          <h2 className="mb-4 mt-10">Common Buyer Paths</h2>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <Link href="/knit-garment-manufacturer" className="rounded-md border border-border p-4 hover:bg-accent">
              Knit Garment Manufacturing
            </Link>
            <Link href="/woven-apparel-manufacturer-usa" className="rounded-md border border-border p-4 hover:bg-accent">
              Woven Apparel Manufacturing
            </Link>
            <Link href="/denim-jeans-private-label" className="rounded-md border border-border p-4 hover:bg-accent">
              Private Label Denim Production
            </Link>
            <Link href="/wrap-bsci-compliant-factory" className="rounded-md border border-border p-4 hover:bg-accent">
              Compliance & Certifications
            </Link>
          </div>

          <div className="mt-10">
            <CTAButton href="/inquiry" size="lg">
              Start USA/Canada Sourcing Evaluation
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
