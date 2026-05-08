import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import StatCard from "@/components/ui/StatCard";
import CertificationBadge from "@/components/ui/CertificationBadge";
import CTAButton from "@/components/ui/CTAButton";
import ImageCarousel from "@/components/ui/ImageCarousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata, buildOrganizationSchema, buildLocalBusinessSchema } from "@/lib/seo";
import Image from "next/image";
import {
  Factory,
  Users,
  Clock,
  Package,
  ShieldCheck,
  Shirt,
  Scan,
  TrendingUp,
} from "lucide-react";
import { StatCardData, ProcessStep } from "@/types";

const ProcessTimeline = dynamic(() => import("@/components/ui/ProcessTimeline"), {
  ssr: true,
  loading: () => <div className="h-96 bg-muted rounded-lg animate-pulse" />,
});

export const metadata: Metadata = buildPageMetadata({
  title: "B2B Apparel Manufacturing & Sourcing Platform",
  description:
    "BSCI-compliant apparel manufacturer | 50 production lines | 1M+ monthly capacity | Low MOQ (500–1000 units) | Knit, woven, denim | Request free evaluation.",
  path: "/",
  keywords: [
    "apparel sourcing platform",
    "B2B apparel manufacturer",
    "garment factory Bangladesh",
    "knit woven denim manufacturer",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "B2B Apparel Manufacturing & Sourcing Platform",
  path: "/",
});

const organizationSchema = buildOrganizationSchema();

const localBusinessSchema = buildLocalBusinessSchema();

const faqSchema = buildFaqSchema({
  questions: [
    {
      question: "What products do you manufacture?",
      answer:
        "We manufacture knit, woven, and denim apparel for B2B buyers, including T-shirts, polos, hoodies, shirts, pants, jackets, and jeans.",
    },
    {
      question: "What is your typical MOQ?",
      answer:
        "MOQ usually starts around 500 to 1000 units per style or color, depending on the product category and construction complexity.",
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We aim to respond within 24 hours with capability confirmation, MOQ guidance, and next-step information.",
    },
    {
      question: "Can buyers review capabilities before sending an inquiry?",
      answer:
        "Yes. The site is designed so buyers can review capabilities, compliance, capacity, lead times, and quality controls before contacting us.",
    },
  ],
});

const keyMetrics: StatCardData[] = [
  {
    label: "Production Lines",
    value: "50",
    description: "Fully equipped manufacturing lines",
    icon: <Factory className="h-6 w-6" />,
  },
  {
    label: "Monthly Capacity",
    value: "1M+",
    description: "Garments per month",
    icon: <Package className="h-6 w-6" />,
  },
  {
    label: "MOQ",
    value: "500-1000",
    description: "Units per style/color",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    label: "Bulk Lead Time",
    value: "30-45",
    description: "Days from order confirmation",
    icon: <Clock className="h-6 w-6" />,
  },
];

const productionProcess: ProcessStep[] = [
  {
    title: "Inquiry & Evaluation",
    description:
      "Submit your requirements. We evaluate feasibility and respond within 24 hours with capability confirmation.",
    duration: "1 Day",
  },
  {
    title: "Sampling",
    description:
      "Receive tech pack and fabric details. We produce samples with inline QC and ship for your approval.",
    duration: "5-7 Days",
  },
  {
    title: "Costing & Order Confirmation",
    description:
      "Approved sample triggers final costing. Order confirmed with 30% deposit and production timeline.",
    duration: "2-3 Days",
  },
  {
    title: "Bulk Production",
    description:
      "Raw material procurement, cutting, sewing with inline QC at every stage. Real-time production updates.",
    duration: "25-35 Days",
  },
  {
    title: "Final Inspection & QC",
    description:
      "AQL 2.5 inspection with detailed reports. Defects handled per rework protocol. Third-party audits welcome.",
    duration: "2-3 Days",
  },
  {
    title: "Shipment",
    description:
      "Final packing per buyer requirements. Documentation prepared. Shipment tracking provided.",
    duration: "3-5 Days",
  },
];

const heroSlides = [
  {
    src: "/images/home/hero-factory-floor-optimized.jpg",
    alt: "Garment production line inside factory floor",
  },
  {
    src: "/images/home/capability-knit.jpg",
    alt: "Knit garment production and fabric handling",
  },
  {
    src: "/images/home/capability-woven.jpg",
    alt: "Woven garment manufacturing in factory",
  },
  {
    src: "/images/home/capability-denim.jpg",
    alt: "Denim garment production and finishing",
  },
  {
    src: "/images/home/factory1.jpeg",
    alt: "Factory floor 1",
  },
  {
    src: "/images/home/factory2.jpeg",
    alt: "Factory floor 2",
  },

];

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-pop">
            Evaluate Our Manufacturing Capability{" "}
            <span className="text-primary">Before You Inquire</span>
          </h1>
          <p className="text-xl font-medium text-muted-foreground mb-8 leading-relaxed text-pop">
            Professional apparel manufacturer for EU, Canadian, and Australian
            markets. Transparent data on capabilities, capacity, compliance,
            and quality control to support your sourcing decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/inquiry" size="lg">
              Request Production Evaluation
            </CTAButton>
            <CTAButton href="/capabilities" variant="outline" size="lg">
              View Manufacturing Capabilities
            </CTAButton>
          </div>
          <p className="text-base text-muted-foreground mt-6">
            We are{" "}
            <Link href="/compliance" className="font-semibold text-primary hover:underline">
              BSCI-compliant
            </Link>
            {" "} and internationally certified for North American, EU, and Australian markets.
          </p>
        </div>
        {/* Server-rendered LCP hero image for faster LCP */}
        <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-lg border border-border shadow-lg">
          <Image
            src={heroSlides[0].src}
            alt={heroSlides[0].alt}
            width={864}
            height={576}
            sizes="(max-width: 768px) 100vw, 864px"
            className="h-auto w-full object-cover"
            priority
            quality={75}
          />
        </div>

        <ImageCarousel
          slides={heroSlides.slice(1)}
          width={864}
          height={576}
          sizes="(max-width: 768px) 100vw, 864px"
          autoPlayIntervalMs={2500}
          priorityFirst={false}
        />
      </section>

      {/* Key Metrics Section */}
      <section className="section-container pattern-dots">
        <div className="section-header">
          <h2 className="text-pop">Manufacturing At A Glance</h2>
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            Key metrics to evaluate our production{" "}
            <Link href="/capacity" className="font-semibold text-primary hover:underline">
              capacity
            </Link>
            {" "} and capabilities
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyMetrics.map((metric, index) => (
            <StatCard key={index} data={metric} />
          ))}
        </div>
      </section>

      {/* Manufacturing Capabilities Summary */}
      <section className="section-container gradient-subtle">
        <div className="section-header">
          <h2 className="text-pop">Manufacturing Capabilities</h2>
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            Specialized production across three core categories. Learn about our{" "}
            <Link href="/capacity" className="font-semibold text-primary hover:underline">
              production capacity
            </Link>
            {" "} and{" "}
            <Link href="/compliance" className="font-semibold text-primary hover:underline">
              compliance credentials
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow card-shimmer">
            <div className="overflow-hidden rounded-t-lg">
              <Image
                src="/images/home/capability-knit.jpg"
                alt="Knit garment production and fabric handling"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-48 w-full object-cover"
              />
            </div>
            <CardHeader>
              <Shirt className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-2xl font-bold tracking-tight">Knit Garments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-base font-medium text-muted-foreground">
                <li>• T-shirts, polos, hoodies, sweatshirts</li>
                <li>• Single jersey, pique, fleece, rib</li>
                <li>• GSM 140-320</li>
                <li>• MOQ: 500 pcs/style/color</li>
              </ul>
              <CTAButton
                href="/capabilities#knit"
                variant="outline"
                size="sm"
                className="mt-6 w-full"
              >
                View Knit Capabilities
              </CTAButton>
            </CardContent>
            </Card>

          <Card className="hover:shadow-lg transition-shadow card-shimmer">
            <div className="overflow-hidden rounded-t-lg">
              <Image
                src="/images/home/capability-woven.jpg"
                alt="Woven garment manufacturing in factory"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-48 w-full object-cover"
              />
            </div>
            <CardHeader>
              <Scan className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-2xl font-bold tracking-tight">Woven Garments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-base font-medium text-muted-foreground">
                <li>• Shirts, pants, jackets, workwear</li>
                <li>• Twill, poplin, canvas, oxford</li>
                <li>• GSM 100-280</li>
                <li>• MOQ: 800 pcs/style/color</li>
              </ul>
              <CTAButton
                href="/capabilities#woven"
                variant="outline"
                size="sm"
                className="mt-6 w-full"
              >
                View Woven Capabilities
              </CTAButton>
            </CardContent>
            </Card>

          <Card className="hover:shadow-lg transition-shadow card-shimmer">
            <div className="overflow-hidden rounded-t-lg">
              <Image
                src="/images/home/capability-denim.jpg"
                alt="Denim garment production and finishing"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-48 w-full object-cover"
              />
            </div>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-2xl font-bold tracking-tight">Denim Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-base font-medium text-muted-foreground">
                <li>• Jeans, jackets, shirts, skirts</li>
                <li>• Ring spun, slub, stretch denim</li>
                <li>• Oz 8-14</li>
                <li>• MOQ: 1000 pcs/style/wash</li>
              </ul>
              <CTAButton
                href="/capabilities#denim"
                variant="outline"
                size="sm"
                className="mt-6 w-full"
              >
                View Denim Capabilities
              </CTAButton>
            </CardContent>
            </Card>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="section-container gradient-accent">
        <div className="section-header">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-pop">Compliance & Certifications</h2>
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            Certified and audited for international markets
          </p>
        </div>
        <div className="mx-auto mb-8 max-w-4xl overflow-hidden rounded-lg border border-border shadow-xl">
            <Image
              src="/images/home/compliance-audit.png"
              alt="Factory compliance audit and quality documentation review"
              width={1600}
              height={1000}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 896px"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <CertificationBadge name="WRAP Certified" />
            <CertificationBadge name="BSCI Compliant" />
            <CertificationBadge name="Oeko-Tex Standard 100" />
            <CertificationBadge name="ISO 9001:2015" />
            <CertificationBadge name="SEDEX Member" />
            <CertificationBadge name="GOTS (In Progress)" />
        </div>
        <div className="text-center mt-8">
          <CTAButton href="/compliance" variant="outline">
            View All Certifications & Audit Reports
          </CTAButton>
        </div>
      </section>

      {/* Production Process Timeline */}
      <section className="section-container pattern-grid">
        <div className="section-header">
          <h2 className="text-pop text-5xl font-extrabold">Production Process Overview</h2>
          <p className="mt-4 text-xl font-semibold text-muted-foreground">
            Transparent workflow from inquiry to shipment
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <ProcessTimeline steps={productionProcess} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center rounded-lg border border-border bg-card p-12 shadow-sm">
          <div className="mb-8 overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/home/cta-shipment.jpg"
              alt="Packed garments prepared for export shipment"
              width={1600}
              height={1000}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 85vw, 768px"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          <h2 className="mb-4 text-pop">Ready to Evaluate Our Factory?</h2>
          <p className="text-xl font-medium text-muted-foreground mb-8">
            Submit a production evaluation request with your requirements.
            We respond within 24 hours with capability confirmation, lead
            times, and preliminary costing. View our{" "}
            <Link href="/compliance" className="font-semibold text-primary hover:underline">
              compliance certifications
            </Link>
            {" "} and{" "}
            <Link href="/quality" className="font-semibold text-primary hover:underline">
              quality standards
            </Link>
            .
          </p>
          <CTAButton href="/inquiry" size="lg">
            Request Production Evaluation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
