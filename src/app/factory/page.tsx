import { Metadata } from "next";
import StatCard from "@/components/ui/StatCard";
import CTAButton from "@/components/ui/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Zap, Droplets, Factory, Leaf } from "lucide-react";
import { StatCardData } from "@/types";

export const metadata: Metadata = {
  title: "Factory Overview",
  description:
    "Company background, facility information, infrastructure, workforce, and sustainability practices. Transparent factory overview for B2B sourcing partners.",
};

export default function FactoryPage() {
  const facilityStats: StatCardData[] = [
    {
      label: "Established",
      value: "2008",
      description: "17+ years in garment manufacturing",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      label: "Total Workforce",
      value: "850+",
      description: "Skilled operators & support staff",
      icon: <Users className="h-6 w-6" />,
    },
    {
      label: "Factory Area",
      value: "85,000",
      description: "Sq ft manufacturing facility",
      icon: <Factory className="h-6 w-6" />,
    },
    {
      label: "Annual Capacity",
      value: "1.8M+",
      description: "Garments per year",
      icon: <Leaf className="h-6 w-6" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">Factory Overview</h1>
          <p className="text-lg text-muted-foreground">
            Established garment manufacturer with modern infrastructure,
            experienced workforce, and commitment to quality, compliance, and
            sustainable practices.
          </p>
        </div>
      </section>

      {/* Facility Stats */}
      <section className="section-container">
        <h2 className="mb-8 text-center">Facility at a Glance</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilityStats.map((stat, index) => (
            <StatCard key={index} data={stat} />
          ))}
        </div>
      </section>

      {/* Company Background */}
      <section className="section-container gradient-accent">
        <h2 className="mb-8 text-center">Company Background</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6 text-muted-foreground">
              <p>
                <strong className="text-foreground font-semibold">
                  SourceLoom
                </strong>{" "}
                was established in 2008 with a focus on producing quality knit,
                woven, and denim garments for international markets. Over 17+ years,
                we have built long-term partnerships with buyers across Europe,
                Canada, and Australia.
              </p>
              <p>
                Our facility is located in the Dhaka industrial zone, Bangladesh, a
                strategic location with access to raw material suppliers, skilled
                labor, and efficient logistics infrastructure for export.
              </p>
              <p>
                We operate as a privately-owned manufacturing facility with stable
                ownership and reinvestment in technology, training, and compliance.
                Our management team brings 20+ years of combined experience in
                apparel manufacturing and export.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Management Team */}
      <section className="section-container pattern-grid">
        <h2 className="mb-8 text-center">Management Team</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Managing Director</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Overall business strategy, compliance, and international buyer
                relationships. 25+ years in garment export.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Production Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Daily production operations, capacity planning, quality oversight,
                and line efficiency management.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Buyer communication, order coordination, sampling, costing, and
                shipment documentation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quality Assurance Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Quality control protocols, inspection, testing, compliance with AQL
                standards, and audit coordination.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Social compliance, environmental regulations, worker safety, and
                certification maintenance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Merchandising Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tech pack development, costing, material sourcing, production
                follow-up, and buyer coordination.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-container pattern-dots">
        <h2 className="mb-8 text-center">Infrastructure & Facilities</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Power & Utilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Grid electricity with backup generators</li>
                <li>• Uninterrupted power supply (UPS) systems</li>
                <li>• Dedicated transformers for stable voltage</li>
                <li>• LED lighting for energy efficiency</li>
                <li>• Central compressed air system</li>
                <li>• Backup diesel generators (450 KVA)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Droplets className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Water & Waste Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Municipal water supply with filtration</li>
                <li>• Effluent Treatment Plant (ETP) operational</li>
                <li>• Water recycling for non-production use</li>
                <li>• Segregated waste management system</li>
                <li>• Hazardous waste disposal contracts</li>
                <li>• Rainwater harvesting infrastructure</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building2 className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Fire Safety & Building Code</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fire license from Bangladesh Fire Service</li>
                <li>• Sprinkler system throughout facility</li>
                <li>• Emergency exits and evacuation plan</li>
                <li>• Fire drills conducted quarterly</li>
                <li>• Structural certification (RCC building)</li>
                <li>• Emergency lighting and signage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Worker Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• On-site medical room with nurse</li>
                <li>• Subsidized cafeteria for meals</li>
                <li>• Separate washrooms (male/female)</li>
                <li>• Prayer room and daycare facilities</li>
                <li>• Training room for skill development</li>
                <li>• Recreation area for breaks</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="section-container gradient-subtle">
        <h2 className="mb-8 text-center">Sustainability Practices</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-4 text-foreground">
                  Environmental Initiatives
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Effluent treatment plant (ETP) with regular monitoring</li>
                  <li>• Chemical inventory management system (CIMS)</li>
                  <li>• Waste segregation: fabric, plastic, metal, hazardous</li>
                  <li>• Partnership with licensed waste recyclers</li>
                  <li>• Energy-efficient LED lighting in production areas</li>
                  <li>• Water conservation through recycling</li>
                  <li>• Minimizing fabric waste through CAD marker efficiency</li>
                  <li>• Target: 15% energy reduction by 2027</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-foreground">
                  Social Responsibility
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Living wage above legal minimum</li>
                  <li>• Health insurance for permanent workers</li>
                  <li>• Annual health check-ups provided</li>
                  <li>• Skill training and career progression programs</li>
                  <li>• Gender equality: 62% female workforce</li>
                  <li>• Worker welfare committee with elected representatives</li>
                  <li>• Educational support for workers&apos; children</li>
                  <li>• Maternity leave and benefits per law</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Values Statement */}
      <section className="section-container gradient-accent">
        <h2 className="mb-8 text-center">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4 text-primary font-bold text-3xl">Quality</div>
              <p className="text-sm text-muted-foreground">
                Multi-stage quality control from raw material to shipment. AQL
                standards and continuous improvement culture.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4 text-primary font-bold text-3xl">
                Transparency
              </div>
              <p className="text-sm text-muted-foreground">
                Open communication on capacity, lead times, and compliance. Full
                factory access for buyer audits.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4 text-primary font-bold text-3xl">
                Reliability
              </div>
              <p className="text-sm text-muted-foreground">
                On-time delivery commitment. Proactive communication on challenges.
                Long-term partnership approach.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center rounded-lg border border-border bg-card p-12 shadow-sm">
          <h2 className="mb-4">Visit Our Factory</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We welcome factory visits from potential buyers and third-party audit
            teams. Schedule a visit or request a virtual factory tour video with
            your inquiry.
          </p>
          <CTAButton href="/inquiry" size="lg">
            Request Production Evaluation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
