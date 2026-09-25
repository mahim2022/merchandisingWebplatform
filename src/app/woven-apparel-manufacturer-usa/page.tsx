import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Woven Apparel Manufacturer USA | Shirts, Pants & Workwear",
  description:
    "Source woven shirts, trousers, jackets, and workwear from a manufacturer supporting USA buyers with MOQ planning, quality control, and export-ready production.",
  path: "/woven-apparel-manufacturer-usa",
  keywords: [
    "woven apparel manufacturer usa",
    "woven shirt and pants supplier",
    "workwear manufacturer for brands",
    "USA woven garment supplier",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Woven Apparel Manufacturer USA | Shirts, Pants & Workwear",
  path: "/woven-apparel-manufacturer-usa",
});

const faqSchema = buildFaqSchema({
  questions: [
    {
      question: "What woven products do you manufacture?",
      answer:
        "We manufacture woven shirts, trousers, jackets, uniforms, and workwear for U.S. buyers.",
    },
    {
      question: "Which woven fabrics do you handle?",
      answer:
        "We work with poplin, twill, canvas, oxford, and chambray depending on product requirements.",
    },
    {
      question: "How do you manage woven production quality?",
      answer:
        "We use development and PP sample checkpoints, inline controls across operations, and a final inspection before shipment.",
    },
    {
      question: "Can I check woven capacity before ordering?",
      answer:
        "Yes. The page and linked capability section provide the context buyers need to evaluate fit, complexity, and lead times.",
    },
  ],
});

export default function WovenApparelManufacturerUsaPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">Woven Apparel Manufacturer USA | Shirts, Pants & Workwear</h1>
          <p className="text-lg text-muted-foreground">
            Source woven garments for U.S. buyers with practical MOQ planning, clear lead times, and production controls
            that support quality and consistency from sample approval to shipment.
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
