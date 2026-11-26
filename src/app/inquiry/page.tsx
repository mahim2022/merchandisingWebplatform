import { Mail, MapPin, Phone } from "lucide-react";
import { getContactPhone } from "@/lib/seo";

export default function InquiryPage() {
  const phone = getContactPhone();

  return (
    <main>
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">Contact SourceLoom</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team to discuss your apparel production requirements.
          </p>
        </div>
      </section>
      <section className="section-container pattern-grid">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-center">
            <Mail className="mx-auto mb-3 h-8 w-8 text-primary" />
            <h2 className="mb-2 text-lg font-semibold">Email</h2>
            <a className="break-all text-muted-foreground hover:text-primary" href="mailto:contact@sourceloom.me">contact@sourceloom.me</a>
          </div>
          {phone && (
            <div className="rounded-lg border bg-card p-6 text-center">
              <Phone className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h2 className="mb-2 text-lg font-semibold">Phone</h2>
              <a className="text-muted-foreground hover:text-primary" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
            </div>
          )}
          <div className="rounded-lg border bg-card p-6 text-center">
            <MapPin className="mx-auto mb-3 h-8 w-8 text-primary" />
            <h2 className="mb-2 text-lg font-semibold">Location</h2>
            <p className="text-muted-foreground">Dhaka, Bangladesh</p>
          </div>
        </div>
      </section>
    </main>
  );
}
