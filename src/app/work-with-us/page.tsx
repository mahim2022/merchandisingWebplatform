import { Metadata } from "next";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import CTAButton from "@/components/ui/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { FileText, MessageSquare, Clock, DollarSign } from "lucide-react";
import { ProcessStep } from "@/types";

export const metadata: Metadata = buildPageMetadata({
  title: "How to Work With Us",
  description:
    "Step-by-step sourcing process, requirements from buyers, communication workflow, payment terms, and how to start production with SourceLoom.",
  path: "/work-with-us",
  keywords: [
    "apparel sourcing process",
    "how to place garment order",
    "B2B clothing production workflow",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "How to Work With Us",
  path: "/work-with-us",
});

export default function WorkWithUsPage() {
  const sourcingProcess: ProcessStep[] = [
    {
      title: "Initial Inquiry",
      description:
        "Submit inquiry form with product details, quantity, timeline, and compliance requirements. We evaluate feasibility and respond within 24 hours.",
      duration: "Day 1",
    },
    {
      title: "Capability Confirmation",
      description:
        "We confirm manufacturing capability, MOQ, lead time, and request tech pack or reference samples for detailed review.",
      duration: "Day 2-3",
    },
    {
      title: "Sample Development",
      description:
        "Based on tech pack, we produce development samples with inline QC. Samples shipped via DHL/FedEx for your approval.",
      duration: "Day 4-10",
    },
    {
      title: "Sample Approval & Costing",
      description:
        "After sample approval, complete costing provided including FOB/CIF/CFR terms. Negotiation on pricing and payment terms.",
      duration: "Day 11-14",
    },
    {
      title: "Order Confirmation",
      description:
        "Purchase order issued by buyer. We provide production timeline, fabric/trim requirements. 30-40% deposit payment required.",
      duration: "Day 15-17",
    },
    {
      title: "Pre-Production Meeting",
      description:
        "Finalize all production details: measurements, trims, packing, labeling, shipping marks. Pre-production samples approved.",
      duration: "Day 18-21",
    },
    {
      title: "Bulk Production",
      description:
        "Manufacturing with inline QC at critical operations. Weekly production updates via email/WhatsApp with photos.",
      duration: "Day 22-50",
    },
    {
      title: "Final Inspection",
      description:
        "AQL 2.5/4.0 inspection by internal QC or third-party agency. Inspection report shared with buyer. Any defects reworked immediately.",
      duration: "Day 51-53",
    },
    {
      title: "Shipment",
      description:
        "Final packing per buyer instructions. Export documentation prepared. Shipment via nominated forwarder or our agent. Balance payment upon BL copy.",
      duration: "Day 54-58",
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">How to Work With Us</h1>
          <p className="text-lg text-muted-foreground">
            Clear, structured process from inquiry to shipment. Understand
            requirements, timelines, and how we support your sourcing success.
          </p>
        </div>
      </section>

      {/* Sourcing Process Timeline */}
      <section className="section-container">
        <h2 className="mb-8 text-center">Complete Sourcing Process</h2>
        <div className="max-w-5xl mx-auto">
          <ProcessTimeline steps={sourcingProcess} />
        </div>
      </section>

      {/* Requirements from Buyers */}
      <section className="section-container gradient-accent">
        <h2 className="mb-8 text-center">What We Need From You</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Technical Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For accurate sampling and costing:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Complete tech pack (PDF or Illustrator file)</li>
                <li>
                  • Measurement spec sheet with tolerance (Excel preferred)
                </li>
                <li>• Fabric specifications: type, weight, composition, color</li>
                <li>• Trim and accessory details with reference photos</li>
                <li>• Construction details: stitch types, seam allowances</li>
                <li>
                  • Reference samples (if available) via courier to our factory
                </li>
                <li>• Artwork files for prints/embroidery (vector format)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Order Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For production planning and costing:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Quantity breakdown by style, color, size</li>
                <li>• Target delivery date and shipment destination</li>
                <li>• Incoterms preference (FOB, CIF, CFR, EXW)</li>
                <li>
                  • Required compliance/certifications (WRAP, BSCI, Oeko-Tex,
                  etc.)
                </li>
                <li>• Labeling and packing requirements</li>
                <li>
                  • Quality standards and AQL level (if different from 2.5/4.0)
                </li>
                <li>• Inspection agency details (if third-party audit required)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Communication Workflow */}
      <section className="section-container pattern-grid">
        <h2 className="mb-8 text-center">Communication & Updates</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold">Response Time</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Initial inquiry: Within 24 hours</li>
                  <li>• Email queries: Same day (working hours)</li>
                  <li>• Urgent issues: Within 2 hours</li>
                  <li>• Weekly production updates</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold">Communication Channels</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Email (primary)</li>
                  <li>• WhatsApp (production updates)</li>
                  <li>• Video call (for complex discussions)</li>
                  <li>• Shared cloud folder for files</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold">Documentation</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Production timeline calendar</li>
                  <li>• Weekly progress reports with photos</li>
                  <li>• QC inspection reports</li>
                  <li>• Shipment documentation (BL, CI, PL)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Payment Terms */}
      <section className="section-container pattern-dots">
        <h2 className="mb-8 text-center">Payment Terms & Policy</h2>
        <Card>
          <CardHeader>
            <DollarSign className="h-10 w-10 text-primary mb-4" />
            <CardTitle>Standard Payment Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">New Buyers</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border border-border rounded-lg">
                    <p className="font-semibold text-primary mb-2">
                      30% Advance
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Upon order confirmation via TT (Telegraphic Transfer) or LC
                      (Letter of Credit)
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <p className="font-semibold text-primary mb-2">
                      70% Balance
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Before shipment or against BL copy via TT. LC at sight also
                      accepted.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Established Buyers</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  After 3+ successful shipments, flexible terms negotiable:
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border border-border rounded-lg">
                    <p className="font-semibold text-primary mb-2">
                      Option 1: 30-70
                    </p>
                    <p className="text-sm text-muted-foreground">
                      30% advance, 70% balance at sight of BL copy
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <p className="font-semibold text-primary mb-2">
                      Option 2: 40-60
                    </p>
                    <p className="text-sm text-muted-foreground">
                      40% advance, 60% balance at sight of BL copy
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <p className="font-semibold text-primary mb-2">
                      Option 3: LC
                    </p>
                    <p className="text-sm text-muted-foreground">
                      100% LC at sight or usance LC (30-60 days negotiable)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Sample Payment</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    • Development samples: $30-50 per style (refundable on order)
                  </li>
                  <li>
                    • Pre-production samples: $50-80 per style (100% refunded on
                    bulk order)
                  </li>
                  <li>• Courier charges: Actual cost (DHL/FedEx account)</li>
                  <li>• Payment via PayPal, Western Union, or TT</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Additional Services */}
      <section className="section-container gradient-subtle">
        <h2 className="mb-8 text-center">Additional Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Fabric Sourcing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We source fabric from certified mills in Bangladesh, India, China,
                or Pakistan based on your specifications. Fabric approval swatches
                sent before bulk procurement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trim & Accessories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete trim sourcing: labels, hang tags, buttons, zippers,
                elastic, ribbons. Approval samples provided. Buyer-nominated trims
                also accepted.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Testing & Certification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fabric testing (shrinkage, color fastness, GSM), product testing
                (Oeko-Tex, REACH), and compliance documentation as per buyer
                requirements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Private Label & Branding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Custom woven/printed labels, hang tags, swing tickets, poly bag
                printing, and carton branding per your specifications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pattern Making & Grading</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                In-house pattern making from sketches or basic measurements. Grading
                for size ranges XS-3XL with fit sample approval.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Logistics Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Coordination with freight forwarders, customs clearance, shipment
                tracking, and documentation support for smooth delivery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center rounded-lg border border-border bg-card p-12 shadow-sm">
          <h2 className="mb-4">Ready to Start Working Together?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Submit your production inquiry with all required details. We&apos;ll
            guide you through the entire process from sampling to shipment.
          </p>
          <CTAButton href="/inquiry" size="lg">
            Submit Production Inquiry
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
