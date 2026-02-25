import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              <span className="text-primary">Source</span>Loom
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Professional apparel manufacturer specializing in knit, woven, and
              denim apparel for EU, Canadian, and Australian markets. Committed
              to quality, compliance, and transparent sourcing partnerships.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">WRAP Certified</Badge>
              <Badge variant="secondary">BSCI Compliant</Badge>
              <Badge variant="secondary">Oeko-Tex</Badge>
              <Badge variant="secondary">ISO 9001</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/capabilities"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Manufacturing Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/capacity"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Production Capacity
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Quality Control
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Compliance & Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Contact
            </h4>
            <address className="text-sm text-muted-foreground not-italic space-y-2">
              <p>Export Department</p>
              <p>Dhaka, Bangladesh</p>
              <p className="mt-4">
                <a
                  href="mailto:export@sourceloom.me"
                  className="hover:text-primary transition-colors"
                >
                  export@sourceloom.me
                </a>
              </p>
              <p>
                <a
                  href="tel:+8801234567890"
                  className="hover:text-primary transition-colors"
                >
                  +880 1234 567 890
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SourceLoom. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/inquiry"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Request Evaluation
            </Link>
            <span className="text-muted-foreground">
              Response Time: Within 24 hours
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
