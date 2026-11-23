import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bangladesh Apparel Sourcing for US & Canadian Brands",
  description:
    "Develop private-label apparel in Bangladesh for US and Canadian brands. Discuss product specifications, sampling, factory documentation, quantities and delivery.",
  path: "/usa-canada-apparel-sourcing",
  keywords: [
    "apparel manufacturer for usa and canada",
    "usa canada clothing sourcing",
    "export garment manufacturing partner",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Apparel Manufacturing for USA & Canada Buyers",
  path: "/usa-canada-apparel-sourcing",
});

const questions = [
  { question: "What information should I include in an apparel sourcing inquiry?", answer: "Share your product type, sketches or tech pack, fabric and trim preferences, size range, estimated quantity, destination and target delivery date. We can discuss the next steps and confirm feasibility for your requirements." },
  { question: "Can SourceLoom help develop a private-label garment?", answer: "Yes. We can discuss development from your concept or specifications, including fabric, trims, labels and sampling. Production arrangements depend on the product and order." },
  { question: "What are the minimum order quantity and lead time?", answer: "These depend on the style, materials, production process and factory availability. Share your target quantity and date so the team can assess the specific order." },
  { question: "What documentation should US and Canadian buyers request?", answer: "Discuss applicable factory audit documents, material and origin records, testing, product labels and shipment documents for your order. Your importer or customs adviser should confirm the requirements for your product and destination." },
];

const faqSchema = buildFaqSchema({ questions });

export default function UsaCanadaApparelSourcingPage() {
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
          <h1 className="mb-6">Bangladesh Apparel Sourcing for US & Canadian Brands</h1>
          <p className="text-lg text-muted-foreground">
            Develop private-label apparel with support from concept and sampling
            through production planning. Share your specifications and destination
            so we can assess the right production arrangement for your order.
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

          <h2 className="mb-4 mt-10">Plan your apparel order</h2>
          <p className="mb-4 leading-7 text-muted-foreground">
            Whether you are developing a new collection or replenishing an existing
            style, begin with a tech pack or clear reference images. Include the
            fabric composition and weight, measurements, size breakdown, labels,
            packaging, target quantity and delivery destination. We can discuss
            available options, sampling and a schedule for your particular product.
          </p>
          <p className="leading-7 text-muted-foreground">
            US and Canadian requirements differ by product. Agree on the required
            testing, fibre content and care labels, origin records, factory documents
            and shipping terms before placing an order. Your importer or customs
            adviser can confirm the rules and duties that apply to your shipment.
          </p>

          <h2 className="mb-4 mt-10">Questions from US and Canadian buyers</h2>
          <div className="space-y-5">
            {questions.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold">{item.question}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>

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
