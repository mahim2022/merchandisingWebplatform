import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Woven Apparel Sourcing for US Brands | SourceLoom",
  description:
    "Explore Bangladesh woven apparel sourcing for US brands, from an OEM buyer brief and sample review to order-specific production planning.",
  path: "/woven-apparel-manufacturer-usa",
  keywords: [
    "woven apparel manufacturer usa",
    "woven shirt and pants supplier",
    "workwear manufacturer for brands",
    "USA woven garment supplier",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Woven Apparel Sourcing for US Brands",
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
          <h1 className="mb-6">Woven Apparel Sourcing for US Brands</h1>
          <p className="text-lg text-muted-foreground">
            SourceLoom helps U.S. buyers develop and source woven garments through manufacturing relationships in Bangladesh.
            Product fit, quantities and delivery terms are assessed for each order.
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

          <h2 className="mb-4 mt-10">What to Include in an OEM Woven Apparel Brief</h2>
          <p className="text-muted-foreground">
            Share a tech pack if available, or start with sketches and a reference sample. Include the garment type,
            fabric composition and weight, measurements and size range, trims, labels and packaging. Add estimated
            quantities by style and colour, destination and target delivery date so the production route can be assessed.
          </p>
          <p className="mt-4 text-muted-foreground">
            Discuss fabric and construction options, sample approvals, inspection requirements and the proposed production
            schedule before placing an order. Minimum quantities, costs and timing depend on the agreed specification and factory.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link href="/usa-canada-apparel-sourcing" className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground hover:bg-accent">
              Explore USA and Canada sourcing support
            </Link>
            <Link href="/capacity" className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground hover:bg-accent">
              Review production capacity and lead times
            </Link>
            <Link href="/quality" className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground hover:bg-accent">
              Review quality control and AQL standards
            </Link>
            <Link href="/compliance" className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground hover:bg-accent">
              Review compliance and certifications
            </Link>
          </div>

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
