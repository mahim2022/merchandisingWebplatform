import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Private Label Denim Jeans Manufacturer",
  description:
    "Private label denim jeans manufacturer for brands and importers. Produce jeans and denim garments with wash guidance, quality checkpoints, and export-focused planning.",
  path: "/denim-jeans-private-label",
  keywords: [
    "private label denim jeans manufacturer",
    "denim garment supplier",
    "jeans production for clothing brands",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Private Label Denim Jeans Manufacturer",
  path: "/denim-jeans-private-label",
});

const faqSchema = buildFaqSchema({
  questions: [
    {
      question: "What denim products do you make?",
      answer:
        "We produce jeans, denim shirts, jackets, and skirts for private label programs.",
    },
    {
      question: "Do you support wash development?",
      answer:
        "Yes. We support rigid, stretch, and slub denim development along with wash and finishing specifications.",
    },
    {
      question: "How is quality controlled for denim orders?",
      answer:
        "We use measurement and workmanship controls in-line, then perform a final audit before packing and shipment release.",
    },
    {
      question: "Can I plan MOQ by wash and colorway?",
      answer:
        "Yes. MOQ planning is handled per style, wash, and colorway so denim launches can be structured accurately.",
    },
  ],
});

export default function DenimJeansPrivateLabelPage() {
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
          <h1 className="mb-6">Private Label Denim Jeans Manufacturer</h1>
          <p className="text-lg text-muted-foreground">
            Build denim lines for your brand with structured support across
            sampling, fit development, wash planning, and bulk execution.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4">Denim Capabilities</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Jeans, denim shirts, jackets, and skirts</li>
            <li>Rigid, stretch, and slub denim development</li>
            <li>Support for washes and finishing specifications</li>
            <li>MOQ planning per style, wash, and colorway</li>
          </ul>

          <h2 className="mb-4 mt-10">Production Control</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Measurement and workmanship controls in-line</li>
            <li>Final audit before packing and shipment release</li>
            <li>Buyer-ready documentation and reporting</li>
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/inquiry" size="lg">
              Request Denim Production Evaluation
            </CTAButton>
            <Link
              href="/capabilities#denim"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent"
            >
              View Denim Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
