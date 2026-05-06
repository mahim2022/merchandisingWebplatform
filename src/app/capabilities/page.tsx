import { Metadata } from "next";
import CapabilityTable from "@/components/ui/CapabilityTable";
import CTAButton from "@/components/ui/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata } from "@/lib/seo";
import { Shirt, Scan, Users } from "lucide-react";

export const metadata: Metadata = buildPageMetadata({
  title: "Manufacturing Capabilities",
  description:
    "Knit, woven & denim manufacturing capabilities | 50 production lines | Stitching, embroidery, finishing | MOQ 500–1000 units | Free sampling. Evaluate before inquiry.",
  path: "/capabilities",
  keywords: [
    "garment manufacturing capabilities",
    "knit woven denim production",
    "MOQ and sampling policy",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema({
  title: "Manufacturing Capabilities",
  path: "/capabilities",
});

const faqSchema = buildFaqSchema({
  questions: [
    {
      question: "Which apparel categories do you manufacture?",
      answer:
        "We produce knit, woven, and denim garments, including T-shirts, polos, hoodies, shirts, pants, jackets, and private label denim.",
    },
    {
      question: "Do you handle low MOQ orders?",
      answer:
        "Yes. MOQ is category dependent, and we publish practical starting quantities for each fabric and product type so buyers can plan launches responsibly.",
    },
    {
      question: "What fabrics and constructions do you work with?",
      answer:
        "Our capabilities include single jersey, pique, fleece, rib, interlock, poplin, twill, canvas, oxford, chambray, and denim constructions.",
    },
    {
      question: "Do you support sampling before bulk confirmation?",
      answer:
        "Yes. We support development, pre-production, size set, and photo samples so buyers can verify fit and construction before bulk order approval.",
    },
  ],
});

export default function CapabilitiesPage() {
  const knitFabrics = [
    ["Single Jersey", "140-220 GSM", "T-shirts, basics", "500 pcs"],
    ["Pique", "180-240 GSM", "Polos, sportswear", "500 pcs"],
    ["Fleece", "220-320 GSM", "Hoodies, sweatshirts", "600 pcs"],
    ["Rib", "180-280 GSM", "Cuffs, collars, bodycon", "500 pcs"],
    ["Interlock", "160-240 GSM", "Premium basics, underwear", "500 pcs"],
  ];

  const wovenFabrics = [
    ["Poplin", "100-140 GSM", "Dress shirts, blouses", "800 pcs"],
    ["Twill", "140-220 GSM", "Chinos, workwear, jackets", "800 pcs"],
    ["Canvas", "180-280 GSM", "Heavy-duty workwear, bags", "1000 pcs"],
    ["Oxford", "120-180 GSM", "Business shirts, casual wear", "800 pcs"],
    ["Chambray", "110-150 GSM", "Casual shirts, dresses", "800 pcs"],
  ];

  const denimSpecs = [
    ["Rigid Denim", "8-14 oz", "Classic jeans, jackets", "1000 pcs"],
    ["Stretch Denim", "8-12 oz", "Skinny jeans, modern fit", "1000 pcs"],
    ["Slub Denim", "9-13 oz", "Vintage look, textured", "1200 pcs"],
    ["Colored Denim", "8-12 oz", "Non-indigo fashion denim", "1000 pcs"],
  ];

  const stitchCapabilities = [
    "Lockstitch (301)",
    "Overlock (504, 514)",
    "Flatlock (406)",
    "Cover Stitch (406)",
    "Chain Stitch (401)",
    "Bartack",
    "Buttonhole",
    "Button Attaching",
    "Blind Stitch",
    "Zigzag",
    "Safety Stitch",
    "Decorative Stitching",
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
          <h1 className="mb-6">Manufacturing Capabilities</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive garment production capabilities across knit, woven, and
            denim categories. Evaluate fabric experience, technical specifications,
            and minimum order quantities.
          </p>
        </div>
      </section>

      {/* Knit Capabilities */}
      <section id="knit" className="section-container pattern-grid">
        <div className="flex items-center gap-4 mb-8">
          <Shirt className="h-10 w-10 text-primary" />
          <div>
            <h2 className="mb-2">Knit Garment Manufacturing</h2>
            <p className="text-muted-foreground">
              T-shirts, polos, hoodies, sweatshirts, and performance wear
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Knit Fabric Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={["Fabric Type", "GSM Range", "Common Applications", "MOQ"]}
              rows={knitFabrics}
            />
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Knit Construction Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Single Jersey (circular knit)</li>
                <li>• Double Jersey (interlock, rib)</li>
                <li>• Pique (honeycomb, waffle)</li>
                <li>• French Terry & Fleece</li>
                <li>• Jacquard & Stripe patterns</li>
                <li>• Tubular & Open-width knit</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Knit Finishing Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Brushing & Peaching</li>
                <li>• Enzyme wash & Stone wash</li>
                <li>• Silicon wash & Softener</li>
                <li>• Reactive & Pigment printing</li>
                <li>• Embroidery (flat & 3D)</li>
                <li>• Heat transfer & Appliqué</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Woven Capabilities */}
      <section id="woven" className="section-container gradient-accent">
        <div className="flex items-center gap-4 mb-8">
          <Scan className="h-10 w-10 text-primary" />
          <div>
            <h2 className="mb-2">Woven Garment Manufacturing</h2>
            <p className="text-muted-foreground">
              Shirts, pants, jackets, workwear, and structured garments
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Woven Fabric Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={["Fabric Type", "GSM Range", "Common Applications", "MOQ"]}
              rows={wovenFabrics}
            />
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Woven Construction Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Plain weave (Poplin, Voile)</li>
                <li>• Twill weave (2/1, 3/1)</li>
                <li>• Satin weave</li>
                <li>• Canvas & Duck</li>
                <li>• Oxford & Dobby</li>
                <li>• Herringbone & Houndstooth</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Woven Finishing Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Garment dyeing & Pigment dyeing</li>
                <li>• Stone wash & Enzyme wash</li>
                <li>• Wrinkle-free & Easy care finish</li>
                <li>• Water repellent coating</li>
                <li>• Screen printing & Digital printing</li>
                <li>• Embroidery & Contrast stitching</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Denim Capabilities */}
      <section id="denim" className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <Users className="h-10 w-10 text-primary" />
          <div>
            <h2 className="mb-2">Denim Manufacturing</h2>
            <p className="text-muted-foreground">
              Jeans, jackets, shirts, skirts with advanced wash capabilities
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Denim Fabric Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <CapabilityTable
              headers={["Denim Type", "Weight (Oz)", "Common Applications", "MOQ"]}
              rows={denimSpecs}
            />
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Denim Wash Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Stone wash (light, medium, heavy)</li>
                <li>• Enzyme wash & Bio wash</li>
                <li>• Acid wash & Bleach wash</li>
                <li>• Sand blasting & Whisker</li>
                <li>• Hand scraping & Destroy</li>
                <li>• Tinting & Overdye</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Denim Fit Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Skinny & Super Skinny fit</li>
                <li>• Slim & Tapered fit</li>
                <li>• Straight & Regular fit</li>
                <li>• Relaxed & Loose fit</li>
                <li>• Bootcut & Flare</li>
                <li>• High-rise, Mid-rise, Low-rise</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stitch & Machine Capabilities */}
      <section className="section-container pattern-dots">
        <h2 className="mb-8 text-center">Stitch & Machine Capabilities</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {stitchCapabilities.map((stitch, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Badge variant="outline" className="shrink-0">
                    ✓
                  </Badge>
                  {stitch}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sampling Policy */}
      <section className="section-container gradient-subtle">
        <h2 className="mb-8 text-center">Sampling Policy</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Development Samples</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Initial samples for design approval and fit confirmation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Timeline: 5-7 working days</li>
                <li>Cost: $30-50 per style</li>
                <li>Revisions: 2 rounds included</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pre-Production Samples</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Final samples with production fabric and trim before bulk order.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Timeline: 7-10 working days</li>
                <li>Cost: $50-80 per style</li>
                <li>Refund: 100% on order placement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Size Set Samples</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Complete size range for grading approval (XS-3XL).
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Timeline: 10-12 working days</li>
                <li>Cost: Based on size range</li>
                <li>Requirement: Tech pack mandatory</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center rounded-lg border border-border bg-card p-12 shadow-sm">
          <h2 className="mb-4">Ready to Discuss Your Requirements?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Submit your product specifications and we&apos;ll confirm capability,
            MOQ, and lead time within 24 hours.
          </p>
          <CTAButton href="/inquiry" size="lg">
            Request Production Evaluation
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
