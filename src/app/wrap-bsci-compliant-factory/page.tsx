import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "WRAP & BSCI Compliant Garment Factory",
  description:
    "WRAP and BSCI compliant garment factory for export buyers. Review certifications, audit history, and compliance controls before production decisions.",
  path: "/wrap-bsci-compliant-factory",
  keywords: [
    "wrap bsci compliant garment factory",
    "ethical apparel manufacturer",
    "compliant clothing supplier",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "WRAP & BSCI Compliant Garment Factory",
  path: "/wrap-bsci-compliant-factory",
});

export default function WrapBsciCompliantFactoryPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">WRAP & BSCI Compliant Garment Factory</h1>
          <p className="text-lg text-muted-foreground">
            Compliance is integrated into our production workflow, from labor and
            safety standards to documentation and buyer audit readiness.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4">Compliance Snapshot</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>WRAP and BSCI compliance focus for export production</li>
            <li>Quality and process documentation available for buyer review</li>
            <li>Defined corrective action workflow for non-conformance handling</li>
            <li>Support for third-party inspection coordination</li>
          </ul>

          <h2 className="mb-4 mt-10">Buyer Confidence Process</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Pre-production alignment on compliance requirements</li>
            <li>Inline monitoring with transparent communication</li>
            <li>Final inspection and document handover before shipment</li>
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/inquiry" size="lg">
              Request Compliance-Focused Evaluation
            </CTAButton>
            <Link
              href="/compliance"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent"
            >
              Review Certifications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
