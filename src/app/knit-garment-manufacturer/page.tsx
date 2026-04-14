import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "B2B Knit Garment Manufacturer",
  description:
    "SourceLoom is a B2B knit garment manufacturer for U.S., Canada, Australia, and EU buyers. Produce t-shirts, polos, hoodies, and sweatshirts with clear MOQ and lead times.",
  path: "/knit-garment-manufacturer",
  keywords: [
    "b2b knit garment manufacturer",
    "bulk t-shirt manufacturer",
    "polo hoodie sweatshirt supplier",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "B2B Knit Garment Manufacturer",
  path: "/knit-garment-manufacturer",
});

export default function KnitGarmentManufacturerPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">B2B Knit Garment Manufacturer</h1>
          <p className="text-lg text-muted-foreground">
            We manufacture knit products for international brands, importers, and
            sourcing teams with structured QC and predictable delivery.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4">What We Produce</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>T-shirts, polos, hoodies, sweatshirts, and knit basics</li>
            <li>Single jersey, pique, fleece, rib, and interlock fabrics</li>
            <li>MOQ guidance based on style and color breakdown</li>
            <li>Sampling support before bulk confirmation</li>
          </ul>

          <h2 className="mb-4 mt-10">Why Buyers Work With Us</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Transparent line capacity and lead-time planning</li>
            <li>Inline and final quality checks aligned with AQL</li>
            <li>Compliance-first production for export markets</li>
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/inquiry" size="lg">
              Request Knit Production Evaluation
            </CTAButton>
            <Link
              href="/capabilities#knit"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent"
            >
              View Knit Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
