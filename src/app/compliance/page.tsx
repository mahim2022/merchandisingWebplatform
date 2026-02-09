import { Metadata } from "next";
import CapabilityTable from "@/components/ui/CapabilityTable";
import CTAButton from "@/components/ui/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Download, Calendar, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance & Certifications",
  description:
    "Complete list of factory certifications, audit bodies, expiry dates, and compliance documentation for EU, Canadian, and Australian markets.",
};

export default function CompliancePage() {
  const certifications = [
    [
      "WRAP (Worldwide Responsible Accredited Production)",
      "Certification",
      "September 2024",
      "September 2027",
      "Gold Level",
    ],
    [
      "BSCI (Business Social Compliance Initiative)",
      "Audit",
      "June 2025",
      "June 2027",
      "Good Rating",
    ],
    [
      "Oeko-Tex Standard 100",
      "Certification",
      "March 2025",
      "March 2026",
      "Product Class I",
    ],
    [
      "ISO 9001:2015 (Quality Management)",
      "Certification",
      "January 2024",
      "January 2027",
      "Full Scope",
    ],
    [
      "SEDEX (Supplier Ethical Data Exchange)",
      "Member",
      "Active",
      "Ongoing",
      "SMETA 4-Pillar",
    ],
    [
      "GOTS (Global Organic Textile Standard)",
      "In Progress",
      "Est. Q3 2026",
      "-",
      "Application Stage",
    ],
  ];

  const auditHistory = [
    ["2025", "BSCI", "Good", "0 major NC"],
    ["2024", "WRAP", "Gold", "0 NC"],
    ["2024", "Oeko-Tex", "Pass", "All tests passed"],
    ["2024", "ISO 9001", "Passed", "2 minor NC (resolved)"],
    ["2023", "SEDEX SMETA", "Pass", "1 major NC (resolved)"],
  ];

  const complianceAreas = [
    {
      title: "Labor & Human Rights",
      items: [
        "No child labor (minimum age 18)",
        "No forced or bonded labor",
        "Freedom of association respected",
        "No discrimination policy",
        "Grievance mechanism in place",
        "Worker welfare committee active",
      ],
    },
    {
      title: "Working Conditions",
      items: [
        "Maximum 60 hours/week (including OT)",
        "Legal minimum wage + benefits",
        "Paid leave & holidays per law",
        "Safe working environment",
        "Regular health & safety training",
        "Medical facilities on-site",
      ],
    },
    {
      title: "Environmental Compliance",
      items: [
        "Wastewater treatment plant operational",
        "Hazardous chemical management system",
        "Waste segregation & recycling program",
        "Energy efficiency measures",
        "Environmental permits up to date",
        "Annual environmental audit",
      ],
    },
    {
      title: "Product Safety",
      items: [
        "Restricted substance list (RSL) compliance",
        "Chemical testing per Oeko-Tex",
        "Metal detector & needle detection",
        "Azo-free dyes only",
        "Formaldehyde within limits",
        "pH level testing",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="mb-6">Compliance & Certifications</h1>
          <p className="text-lg text-muted-foreground">
            Certified and audited manufacturing facility meeting international
            standards for social compliance, environmental responsibility, and
            product safety.
          </p>
        </div>
      </section>

      {/* Certifications Overview */}
      <section className="section-container">
        <h2 className="mb-8 text-center">Current Certifications & Audits</h2>
        <Card>
          <CardHeader>
            <CardTitle>Active Certifications</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              All certifications and audit reports available for buyer verification
            </p>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={[
                "Certification/Standard",
                "Type",
                "Issue/Audit Date",
                "Expiry/Next Audit",
                "Status/Level",
              ]}
              rows={certifications}
            />
          </CardContent>
        </Card>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Badge variant="default" className="px-4 py-2">
            <FileCheck className="h-4 w-4 mr-2" />
            WRAP Gold Certified
          </Badge>
          <Badge variant="default" className="px-4 py-2">
            <ShieldCheck className="h-4 w-4 mr-2" />
            BSCI Good Rating
          </Badge>
          <Badge variant="default" className="px-4 py-2">
            <FileCheck className="h-4 w-4 mr-2" />
            Oeko-Tex Class I
          </Badge>
          <Badge variant="default" className="px-4 py-2">
            <ShieldCheck className="h-4 w-4 mr-2" />
            ISO 9001:2015
          </Badge>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="section-container bg-muted/30">
        <h2 className="mb-8 text-center">Compliance Framework</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {complianceAreas.map((area, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 shrink-0">
                        ✓
                      </Badge>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Audit History */}
      <section className="section-container">
        <h2 className="mb-8 text-center">Audit History</h2>
        <Card>
          <CardHeader>
            <CardTitle>Recent Audits & Results</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Transparent audit history with non-conformance (NC) tracking
            </p>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={["Year", "Audit Type", "Result", "Non-Conformances"]}
              rows={auditHistory}
            />
            <p className="mt-4 text-sm text-muted-foreground">
              NC = Non-Conformance. All major and critical NCs resolved within 30
              days. Corrective action plans documented and verified.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Market-Specific Compliance */}
      <section className="section-container bg-muted/30">
        <h2 className="mb-8 text-center">Market-Specific Compliance</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>European Union</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Compliance with EU regulations and market requirements:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• REACH compliance (chemical substances)</li>
                <li>• General Product Safety Directive</li>
                <li>• Textile labeling regulations</li>
                <li>• CE marking where applicable</li>
                <li>• WEEE Directive compliance</li>
                <li>• Oeko-Tex Standard 100</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Canada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Canadian textile and product safety compliance:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Textile Labelling Act compliance</li>
                <li>• Consumer Product Safety Act</li>
                <li>• Care labeling requirements (English/French)</li>
                <li>• Flammability standards</li>
                <li>• Hazardous Products Act</li>
                <li>• Lead content restrictions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Australia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Australian Competition and Consumer Commission requirements:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Australian Consumer Law compliance</li>
                <li>• Product safety standards</li>
                <li>• Mandatory care labeling</li>
                <li>• Fiber content disclosure</li>
                <li>• Country of origin labeling</li>
                <li>• Prohibited chemical substances</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certificate Downloads */}
      <section className="section-container">
        <h2 className="mb-8 text-center">Certificate Downloads</h2>
        <Card>
          <CardHeader>
            <CardTitle>
              <Download className="h-5 w-5 inline mr-2" />
              Downloadable Certificates
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Full certification documents available upon buyer request
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-sm">
                      WRAP Gold Certificate
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Valid until September 2027
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">Available on Request</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-sm">BSCI Audit Report</h4>
                    <p className="text-xs text-muted-foreground">
                      June 2025 - Good Rating
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">Available on Request</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-sm">
                      Oeko-Tex Certificate
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Class I - Product Safety
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">Available on Request</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-sm">
                      ISO 9001:2015 Certificate
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Quality Management System
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">Available on Request</Badge>
              </div>

              <p className="text-sm text-muted-foreground text-center pt-4">
                All certificates require signed NDA and are provided during the
                inquiry evaluation process.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center rounded-lg border border-border bg-card p-12 shadow-sm">
          <h2 className="mb-4">Compliance Documentation Available</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Request full compliance documentation, audit reports, and certificates
            with your production inquiry. We provide complete transparency for your
            due diligence.
          </p>
          <CTAButton href="/inquiry" size="lg">
            Request Production Evaluation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
