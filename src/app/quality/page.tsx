import { Metadata } from "next";
import CapabilityTable from "@/components/ui/CapabilityTable";
import CTAButton from "@/components/ui/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata } from "@/lib/seo";
import { ShieldCheck, Search, Eye, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Quality Control Process",
  description:
    "Comprehensive quality control procedures including raw material inspection, inline QC, final inspection, AQL standards, and defect handling protocol.",
  path: "/quality",
  keywords: [
    "garment quality control",
    "AQL 2.5 inspection",
    "apparel defect handling protocol",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Quality Control Process",
  path: "/quality",
});

const faqSchema = buildFaqSchema({
  questions: [
    {
      question: "How do you inspect raw materials?",
      answer:
        "Raw materials are checked using a 4-point fabric inspection system, along with color, GSM, shrinkage, dimensional stability, and color fastness tests.",
    },
    {
      question: "What quality checkpoints are used during production?",
      answer:
        "We use inline QC checkpoints for pattern, cutting, sewing, measurements, and finishing so defects are caught early.",
    },
    {
      question: "What AQL standards do you follow?",
      answer:
        "Our final inspection follows AQL 2.5 for major defects and AQL 4.0 for minor defects, with critical defects held at zero tolerance.",
    },
    {
      question: "Do you allow third-party inspections?",
      answer:
        "Yes. Third-party audits and inspections are welcome, and defect handling follows a rework protocol before shipment.",
    },
  ],
});

export default function QualityPage() {
  const rawMaterialChecks = [
    ["Fabric Inspection", "4-point system on inspection table", "100% of rolls"],
    ["Color Matching", "Under D65 light source", "Every lot"],
    ["GSM/Weight Check", "Electronic GSM cutter", "Random sampling"],
    ["Shrinkage Test", "AATCC/ISO standards", "Per lot"],
    ["Dimensional Stability", "After washing simulation", "Per style"],
    ["Color Fastness", "Wash, rub, light, perspiration", "Per lot"],
  ];

  const inlineQCPoints = [
    ["Pattern & Marking", "Marker efficiency, grain line", "Before cutting"],
    ["Cutting Accuracy", "Panel measurements", "Random 10%"],
    ["First Garment Approval", "Complete assembly check", "Every style"],
    ["Sewing Operations", "Stitch quality, seam strength", "Every 1 hour"],
    ["Measurements", "Spec sheet compliance", "Every 50 pcs"],
    ["Finishing", "Pressing, trimming, stain check", "100%"],
  ];

  const aqlLevels = [
    ["Critical Defects", "0", "Safety issues, unwearable"],
    ["Major Defects", "2.5", "Significant quality issues"],
    ["Minor Defects", "4.0", "Cosmetic/aesthetic issues"],
  ];

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
      {/* Hero Section */}
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="mb-6">Quality Control Process</h1>
          <p className="text-lg text-muted-foreground">
            Multi-stage quality assurance from raw material inspection to final
            audit. Transparent QC protocols aligned with international AQL
            standards.
          </p>
        </div>
      </section>

      {/* QC Stages Overview */}
      <section className="section-container">
        <h2 className="mb-8 text-center">Quality Control Stages</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <Search className="h-10 w-10 text-primary mx-auto mb-4" />
              <CardTitle>Raw Material Inspection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fabric, trims, and accessories inspected before cutting. 4-point
                system for fabric defects. Color, GSM, and shrinkage testing.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Eye className="h-10 w-10 text-primary mx-auto mb-4" />
              <CardTitle>Inline Quality Checks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                QC checkpoints during production. Measurements, stitch quality,
                construction verification. Immediate corrective action.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <ClipboardCheck className="h-10 w-10 text-primary mx-auto mb-4" />
              <CardTitle>Final Inspection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                AQL 2.5/4.0 inspection of finished garments. Detailed defect
                reporting. Third-party audit coordination.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Raw Material Inspection */}
      <section className="section-container gradient-accent">
        <h2 className="mb-8">Raw Material Inspection</h2>
        <Card>
          <CardHeader>
            <CardTitle>Pre-Production Material Checks</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              All materials inspected and tested before cutting authorization
            </p>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={["Inspection Type", "Method", "Frequency"]}
              rows={rawMaterialChecks}
            />
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>4-Point Fabric Inspection System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Defect Scoring:
                </h4>
                <ul className="space-y-1 ml-4">
                  <li>• 0-3 inches defect = 1 point</li>
                  <li>• 3-6 inches defect = 2 points</li>
                  <li>• 6-9 inches defect = 3 points</li>
                  <li>• Over 9 inches defect = 4 points</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Acceptance Criteria:
                </h4>
                <p>
                  Total points should not exceed 40 per 100 square yards of
                  fabric. Rolls exceeding this limit are rejected or negotiated
                  for downgrade.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Inline QC */}
      <section className="section-container pattern-grid">
        <h2 className="mb-8">Inline Quality Checks</h2>
        <Card>
          <CardHeader>
            <CardTitle>Production Stage Checkpoints</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Quality verification at critical operations during manufacturing
            </p>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={["Checkpoint", "Verification", "Timing"]}
              rows={inlineQCPoints}
            />
          </CardContent>
        </Card>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Measurement Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Garment measurements checked against buyer spec sheet at multiple
                stages:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Badge variant="outline" className="mr-2">
                    Stage 1
                  </Badge>
                  Cut panels before sewing
                </li>
                <li>
                  <Badge variant="outline" className="mr-2">
                    Stage 2
                  </Badge>
                  First garment approval
                </li>
                <li>
                  <Badge variant="outline" className="mr-2">
                    Stage 3
                  </Badge>
                  Every 50 pieces during production
                </li>
                <li>
                  <Badge variant="outline" className="mr-2">
                    Stage 4
                  </Badge>
                  After washing/finishing
                </li>
                <li>
                  <Badge variant="outline" className="mr-2">
                    Final
                  </Badge>
                  Pre-shipment inspection
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Corrective Action Protocol</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Immediate response to quality issues:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Production line halt if critical defect found</li>
                <li>• Root cause analysis by supervisor</li>
                <li>• Operator retraining if skill-related</li>
                <li>• Machine adjustment if mechanical issue</li>
                <li>• Rework of affected pieces</li>
                <li>• Increased check frequency for next 2 hours</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Inspection & AQL */}
      <section className="section-container pattern-dots">
        <h2 className="mb-8">Final Inspection & AQL Standards</h2>
        <Card>
          <CardHeader>
            <CardTitle>AQL Inspection Levels</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Standard acceptance quality limits applied to finished garments
            </p>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={["Defect Category", "AQL Level", "Description"]}
              rows={aqlLevels}
            />
          </CardContent>
        </Card>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Critical Defects (AQL 0)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Zero acceptance for defects that render garment unsafe or
                unusable:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Needle or metal contamination</li>
                <li>• Broken or unsafe fasteners</li>
                <li>• Chemical stains or odor</li>
                <li>• Holes or tears</li>
                <li>• Wrong size or style shipped</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Major Defects (AQL 2.5)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Significant quality issues affecting functionality or aesthetics:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Measurement deviation beyond tolerance (±5%)</li>
                <li>• Seam puckering or open seams</li>
                <li>• Visible color shading between panels</li>
                <li>• Skip stitches or irregular stitching</li>
                <li>• Missing or defective trims</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Minor Defects (AQL 4.0)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Cosmetic issues that do not affect garment functionality:
            </p>
            <div className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• Loose threads</li>
                <li>• Minor stitch irregularity</li>
                <li>• Slight puckering (non-critical areas)</li>
                <li>• Small fabric slubs or neps</li>
              </ul>
              <ul className="space-y-1">
                <li>• Minor shade variation (within tolerance)</li>
                <li>• Slight label misalignment</li>
                <li>• Light pencil marks (removable)</li>
                <li>• Minor packaging issues</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Defect Handling & Rework */}
      <section className="section-container gradient-subtle">
        <h2 className="mb-8">Defect Handling & Rework Policy</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Rework Protocol</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Systematic approach to handle detected defects:
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Stage 1: Segregation
                  </h4>
                  <p>
                    Defective garments immediately separated and tagged with
                    defect description.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Stage 2: Assessment
                  </h4>
                  <p>
                    QC supervisor evaluates if rework is possible or garment must
                    be rejected.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Stage 3: Rework
                  </h4>
                  <p>
                    Skilled operators perform corrections. Re-inspection mandatory
                    after rework.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Stage 4: Documentation
                  </h4>
                  <p>
                    All defects and rework logged for trend analysis and process
                    improvement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Buyer Notification Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Transparent communication on quality issues:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Badge className="mr-2">Immediate</Badge>
                  Critical defects found in bulk production
                </li>
                <li>
                  <Badge className="mr-2">Within 24h</Badge>
                  Major defects exceeding AQL limits
                </li>
                <li>
                  <Badge className="mr-2">Weekly</Badge>
                  Quality report with defect rates and trends
                </li>
                <li>
                  <Badge className="mr-2">Pre-shipment</Badge>
                  Full inspection report with photos
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Buyers may appoint third-party inspection agencies at any stage.
                We provide full cooperation and documentation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center rounded-lg border border-border bg-card p-12 shadow-sm">
          <h2 className="mb-4">Quality Assurance You Can Trust</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our multi-stage QC process ensures consistent quality aligned with
            international standards. Request a detailed quality manual with your
            inquiry.
          </p>
          <CTAButton href="/inquiry" size="lg">
            Request Production Evaluation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
