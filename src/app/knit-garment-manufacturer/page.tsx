import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Knit Garment Manufacturer for T-Shirts, Hoodies & Basics",
  description:
    "Find a knit garment manufacturer for T-shirts, polos, hoodies, and sweatshirts with transparent MOQ guidance, quality control, and lead-time planning.",
  path: "/knit-garment-manufacturer",
  keywords: [
    "knit garment manufacturer",
    "t shirt manufacturer",
    "hoodie sweatshirt supplier",
    "low MOQ knit apparel manufacturer",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Knit Garment Manufacturer for T-Shirts, Hoodies & Basics",
  path: "/knit-garment-manufacturer",
});

const faqSchema = buildFaqSchema({
  questions: [
    {
      question: "What knit products do you manufacture?",
      answer:
        "We manufacture T-shirts, polos, hoodies, sweatshirts, and other knit basics for export buyers.",
    },
    {
      question: "Which knit fabrics do you work with?",
      answer:
        "We work with single jersey, pique, fleece, rib, and interlock fabrics depending on the style and end use.",
    },
    {
      question: "Do you provide MOQ guidance?",
      answer:
        "Yes. We provide MOQ guidance based on style, color breakdown, and production complexity during early evaluation.",
    },
    {
      question: "Can I review knit capabilities before sending an inquiry?",
      answer:
        "Yes. The page and related capability section are designed so buyers can review knit capacity, fabrics, and delivery expectations before inquiry.",
    },
  ],
});

export default function KnitGarmentManufacturerPage() {
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
          <h1 className="mb-6">Knit Garment Manufacturer for T-Shirts, Hoodies & Basics</h1>
          <p className="text-lg text-muted-foreground">
            We produce knit apparel for international brands, importers, and sourcing teams with clear MOQ guidance,
            quality control, and reliable production planning from sampling to shipment.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4">What We Produce</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>T-shirts, polos, hoodies, sweatshirts, and knit basics</li>
            <li>Single jersey, pique, fleece, rib, and interlock fabrics</li>
            <li>MOQ guidance based on style, color breakdown, and production complexity</li>
            <li>Sampling support before bulk confirmation</li>
          </ul>

          <h2 className="mb-4 mt-10">Why Buyers Work With Us</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Transparent line capacity and lead-time planning</li>
            <li>Inline and final quality checks aligned with AQL</li>
            <li>Compliance-first production for export markets</li>
          </ul>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link href="/capacity" className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground hover:bg-accent">
              Review production capacity and lead times
            </Link>
            <Link href="/quality" className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground hover:bg-accent">
              Review quality control and inspection standards
            </Link>
            <Link href="/compliance" className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground hover:bg-accent">
              Review certifications and compliance status
            </Link>
            <Link href="/low-moq-clothing-manufacturer" className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground hover:bg-accent">
              Learn about low MOQ production options
            </Link>
          </div>

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
