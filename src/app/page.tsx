import StatCard from "@/components/ui/StatCard";
import CertificationBadge from "@/components/ui/CertificationBadge";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import CTAButton from "@/components/ui/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const keyMetrics: StatCardData[] = [
  {
    label: "Production Lines",
    value: "12",
    description: "Fully equipped manufacturing lines",
    icon: <Factory className="h-6 w-6" />,
  },
  {
    label: "Monthly Capacity",
    value: "150K+",
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

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">
            Evaluate Our Manufacturing Capability{" "}
            <span className="text-primary">Before You Inquire</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Professional garment manufacturer for EU, Canadian, and Australian
            markets. Transparent data on capabilities, capacity, compliance, and
            quality control to support your sourcing decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/inquiry" size="lg">
              Request Production Evaluation
            </CTAButton>
            <CTAButton href="/capabilities" variant="outline" size="lg">
              View Manufacturing Capabilities
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="section-container">
        <div className="section-header">
          <h2>Manufacturing At A Glance</h2>
          <p className="mt-4 text-muted-foreground">
            Key metrics to evaluate our production capacity and capabilities
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyMetrics.map((metric, index) => (
            <StatCard key={index} data={metric} />
          ))}
        </div>
      </section>

      {/* Manufacturing Capabilities Summary */}
      <section className="section-container bg-muted/30">
        <div className="section-header">
          <h2>Manufacturing Capabilities</h2>
          <p className="mt-4 text-muted-foreground">
            Specialized production across three core categories
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shirt className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Knit Garments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
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

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Scan className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Woven Garments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
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

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Denim Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
      <section className="section-container">
        <div className="section-header">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2>Compliance & Certifications</h2>
          <p className="mt-4 text-muted-foreground">
            Certified and audited for international markets
          </p>
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
      <section className="section-container bg-muted/30">
        <div className="section-header">
          <h2>Production Process Overview</h2>
          <p className="mt-4 text-muted-foreground">
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
          <h2 className="mb-4">Ready to Evaluate Our Factory?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Submit a production evaluation request with your requirements. We
            respond within 24 hours with capability confirmation, lead times,
            and preliminary costing.
          </p>
          <CTAButton href="/inquiry" size="lg">
            Request Production Evaluation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
