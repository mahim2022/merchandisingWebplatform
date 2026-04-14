import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Woven Apparel Manufacturer for USA Buyers",
  description:
    "Woven apparel manufacturer supporting U.S. buyers with shirts, pants, jackets, and workwear production. Structured costing, MOQ planning, and quality control.",
  path: "/woven-apparel-manufacturer-usa",
  keywords: [
    "woven apparel manufacturer usa",
    "woven shirt and pants supplier",
    "workwear manufacturer for brands",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Woven Apparel Manufacturer for USA Buyers",
  path: "/woven-apparel-manufacturer-usa",
});

export default function WovenApparelManufacturerUsaPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">Woven Apparel Manufacturer for USA Buyers</h1>
          <p className="text-lg text-muted-foreground">
            Source woven products with clear production planning, compliance
            readiness, and practical communication from sampling to shipment.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4">Woven Product Scope</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Woven shirts, trousers, jackets, uniforms, and workwear</li>
            <li>Poplin, twill, canvas, oxford, and chambray experience</li>
            <li>MOQ and lead times aligned to style complexity</li>
            <li>Pre-production clarification for trims and packaging details</li>
          </ul>

          <h2 className="mb-4 mt-10">Execution Model</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Development sample and PP sample checkpoints</li>
            <li>Inline quality controls across key operations</li>
            <li>Final inspection before shipment handover</li>
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/inquiry" size="lg">
              Request Woven Production Evaluation
            </CTAButton>
            <Link
              href="/capabilities#woven"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent"
            >
              View Woven Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
