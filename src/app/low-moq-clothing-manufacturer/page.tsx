import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Low MOQ Clothing Manufacturer",
  description:
    "Low MOQ clothing manufacturer for brands that need practical launch quantities with scalable production planning, quality checks, and transparent timelines.",
  path: "/low-moq-clothing-manufacturer",
  keywords: [
    "low moq clothing manufacturer",
    "small batch apparel production",
    "scalable garment manufacturing",
  ],
});

export default function LowMoqClothingManufacturerPage() {
  return (
    <div>
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">Low MOQ Clothing Manufacturer</h1>
          <p className="text-lg text-muted-foreground">
            Launch with manageable quantities and scale confidently as demand
            grows, with clear production checkpoints and communication.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4">Who This Fits</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Emerging brands and capsule collection launches</li>
            <li>Buyers testing new categories before scale-up</li>
            <li>Teams requiring phased ordering and inventory control</li>
          </ul>

          <h2 className="mb-4 mt-10">How We Support Low MOQ Orders</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>Style-level MOQ guidance during early costing</li>
            <li>Sampling-first approach to reduce rework risk</li>
            <li>Capacity planning for repeat and scale-up orders</li>
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/inquiry" size="lg">
              Request Low MOQ Evaluation
            </CTAButton>
            <Link
              href="/capacity"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-accent"
            >
              Review Capacity & Lead Times
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
