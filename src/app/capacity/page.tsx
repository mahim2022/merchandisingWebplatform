import { Metadata } from "next";
import StatCard from "@/components/ui/StatCard";
import CapabilityTable from "@/components/ui/CapabilityTable";
import CTAButton from "@/components/ui/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Users, Gauge, Calendar } from "lucide-react";
import { StatCardData } from "@/types";

export const metadata: Metadata = {
  title: "Production Capacity & Lead Times",
  description:
    "Detailed production capacity information including number of lines, monthly output by category, peak vs off-peak capacity, and typical lead times for sampling and bulk production.",
};

export default function CapacityPage() {
  const facilityStats: StatCardData[] = [
    {
      label: "Production Lines",
      value: "12",
      description: "Active manufacturing lines",
      icon: <Factory className="h-6 w-6" />,
    },
    {
      label: "Total Workforce",
      value: "850+",
      description: "Skilled operators & staff",
      icon: <Users className="h-6 w-6" />,
    },
    {
      label: "Machines Per Line",
      value: "45-60",
      description: "Depending on product category",
      icon: <Gauge className="h-6 w-6" />,
    },
    {
      label: "Operating Days",
      value: "26",
      description: "Days per month",
      icon: <Calendar className="h-6 w-6" />,
    },
  ];

  const monthlyCapacity = [
    ["T-Shirts & Basics", "45,000 - 50,000", "55,000", "40,000"],
    ["Polos & Pique Garments", "30,000 - 35,000", "40,000", "28,000"],
    ["Hoodies & Sweatshirts", "15,000 - 18,000", "22,000", "12,000"],
    ["Woven Shirts", "20,000 - 25,000", "30,000", "18,000"],
    ["Woven Pants", "18,000 - 22,000", "28,000", "15,000"],
    ["Denim Jeans", "12,000 - 15,000", "18,000", "10,000"],
  ];

  const leadTimesBySampling = [
    ["Development Sample", "5-7 days", "After tech pack & fabric details received"],
    [
      "Pre-Production Sample",
      "7-10 days",
      "With production fabric & trims",
    ],
    ["Size Set Sample", "10-12 days", "Complete size range (XS-3XL)"],
    ["Photo Sample", "3-5 days", "For marketing/catalog only"],
  ];

  const leadTimesByQuantity = [
    ["500 - 2,000 pcs", "30-35 days", "Small orders, single style"],
    ["2,000 - 5,000 pcs", "35-40 days", "Medium orders, 2-3 styles"],
    ["5,000 - 10,000 pcs", "40-45 days", "Large orders, multiple styles"],
    ["10,000+ pcs", "45-60 days", "Bulk orders, negotiable timeline"],
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">Production Capacity & Lead Times</h1>
          <p className="text-lg text-muted-foreground">
            Evaluate our manufacturing capacity, workforce, equipment, and typical
            production timelines to support your sourcing planning.
          </p>
        </div>
      </section>

      {/* Facility Statistics */}
      <section className="section-container">
        <h2 className="mb-8 text-center">Facility Overview</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilityStats.map((stat, index) => (
            <StatCard key={index} data={stat} />
          ))}
        </div>
      </section>

      {/* Monthly Output Capacity */}
      <section className="section-container gradient-accent">
        <h2 className="mb-8 text-center">Monthly Production Capacity</h2>
        <Card>
          <CardHeader>
            <CardTitle>Output by Product Category</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Capacity estimates based on standard complexity and current line
              allocation
            </p>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={[
                "Product Category",
                "Normal Capacity",
                "Peak Capacity",
                "Off-Peak Capacity",
              ]}
              rows={monthlyCapacity}
              caption="All figures in units per month. Peak capacity: October-December. Off-peak: June-August."
            />
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Peak Season (Oct-Dec)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                High demand period with increased capacity utilization.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All 12 lines operational</li>
                <li>• Overtime shifts available</li>
                <li>• Priority booking recommended</li>
                <li>• Lead times may extend by 5-7 days</li>
                <li>• Early orders receive preference</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Off-Peak Season (Jun-Aug)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Lower demand period with flexible capacity and faster turnaround.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 8-10 lines active</li>
                <li>• Faster sampling turnaround</li>
                <li>• Negotiable pricing for bulk orders</li>
                <li>• Ideal for new product development</li>
                <li>• Better capacity availability</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sampling Lead Times */}
      <section className="section-container pattern-grid">
        <h2 className="mb-8 text-center">Sampling Lead Times</h2>
        <Card>
          <CardHeader>
            <CardTitle>Sample Development Timeline</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Lead times from receipt of complete tech pack and material
              specifications
            </p>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={["Sample Type", "Lead Time", "Requirements"]}
              rows={leadTimesBySampling}
            />
          </CardContent>
        </Card>
      </section>

      {/* Bulk Production Lead Times */}
      <section className="section-container pattern-dots">
        <h2 className="mb-8 text-center">Bulk Production Lead Times</h2>
        <Card>
          <CardHeader>
            <CardTitle>Production Timeline by Order Quantity</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Lead times from order confirmation and deposit receipt (excludes
              fabric procurement if buyer-supplied)
            </p>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={["Order Quantity", "Lead Time", "Notes"]}
              rows={leadTimesByQuantity}
            />
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Lead Time Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Material Procurement (7-10 days)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Fabric, trims, and accessories sourcing from approved
                    suppliers. Can be reduced if buyer provides materials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Cutting & Preparation (2-3 days)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Fabric inspection, spreading, marker making, cutting, and
                    bundling for production lines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sewing & Assembly (15-25 days)</h4>
                  <p className="text-sm text-muted-foreground">
                    Main production with inline quality checks at critical
                    operations. Duration depends on style complexity and quantity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Finishing & Inspection (3-5 days)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Washing (if required), pressing, final inspection, tagging,
                    and packing per buyer requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  5
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Shipment Preparation (2-3 days)</h4>
                  <p className="text-sm text-muted-foreground">
                    Carton packing, documentation, customs clearance, and
                    coordination with freight forwarder.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Current Capacity Status */}
      <section className="section-container">
        <h2 className="mb-8 text-center">Current Capacity Booking Status</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground mb-2">
                As of {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="font-semibold">Capacity Available</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
              We currently have production capacity available for March-April 2026
              delivery. For urgent orders or peak season bookings (Oct-Dec), please
              submit your inquiry early to secure line allocation.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center rounded-lg border border-border bg-card p-12 shadow-sm">
          <h2 className="mb-4">Check Capacity for Your Timeline</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Submit your order details and required delivery timeline. We&apos;ll
            confirm capacity availability and provide a detailed production
            schedule.
          </p>
          <CTAButton href="/inquiry" size="lg">
            Request Production Evaluation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
