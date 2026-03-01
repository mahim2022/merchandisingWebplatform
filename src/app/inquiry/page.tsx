"use client";

import { useState } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Loader2, Mail, Phone, Building2 } from "lucide-react";

// Zod validation schema
const inquirySchema = z.object({
  buyerRole: z.string().min(1, "Please select your role"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  productCategories: z.string().min(1, "Please select at least one category"),
  quantity: z.string().min(1, "Please enter quantity"),
  destinationMarket: z.string().min(1, "Please select destination market"),
  requiredCompliance: z.string().optional(),
  timeline: z.string().min(1, "Please specify your timeline"),
  additionalDetails: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const publicContactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "export@sourceloom.me";
const publicContactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "+880 1234 567 890";
const publicContactPhoneHref = `tel:${publicContactPhone.replace(/[^+\d]/g, "")}`;

export default function InquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form: UseFormReturn<InquiryFormValues> = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      buyerRole: "",
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      productCategories: "",
      quantity: "",
      destinationMarket: "",
      requiredCompliance: "",
      timeline: "",
      additionalDetails: "",
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const error = await response.json();
        alert(`Submission failed: ${error.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "An error occurred while submitting the form. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <Card className="border-primary/20">
            <CardContent className="pt-12 pb-12">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="mb-4">Inquiry Submitted Successfully!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for your interest. We have received your production
                inquiry and will respond within 24 hours with capability
                confirmation and preliminary information.
              </p>
              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">What Happens Next?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground text-left">
                  <li>
                    ✓ Our export team reviews your requirements and checks
                    capability
                  </li>
                  <li>
                    ✓ We confirm MOQ, lead time, and request tech pack if needed
                  </li>
                  <li>
                    ✓ Preliminary costing provided (if sufficient details
                    available)
                  </li>
                  <li>✓ Next steps discussed: sampling, testing, compliance</li>
                </ul>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                size="lg"
              >
                Submit Another Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="section-container gradient-hero">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6">Production Evaluation Inquiry</h1>
          <p className="text-lg text-muted-foreground">
            Submit your requirements and we&apos;ll respond within 24 hours with
            capability confirmation, MOQ, lead time, and next steps.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-container pattern-grid">
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email</h4>
              <a
                href={`mailto:${publicContactEmail}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {publicContactEmail}
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <a
                href={publicContactPhoneHref}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {publicContactPhone}
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Response Time</h4>
              <p className="text-sm text-muted-foreground">Within 24 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* Inquiry Form */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Submit Your Production Inquiry</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              All fields are required unless marked optional. The more details you
              provide, the faster we can respond with accurate information.
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Company & Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Company & Contact Information
                  </h3>

                  <FormField
                    control={form.control}
                    name="buyerRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Role *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Sourcing Manager">
                              Sourcing Manager
                            </SelectItem>
                            <SelectItem value="Product Development Manager">
                              Product Development Manager
                            </SelectItem>
                            <SelectItem value="Buyer">Buyer</SelectItem>
                            <SelectItem value="Merchandiser">
                              Merchandiser
                            </SelectItem>
                            <SelectItem value="Quality Manager">
                              Quality Manager
                            </SelectItem>
                            <SelectItem value="Owner/Director">
                              Owner/Director
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your company name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@company.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 234 567 8900"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Product Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Product Requirements
                  </h3>

                  <FormField
                    control={form.control}
                    name="productCategories"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Category *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select product category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Knit">
                              Knit (T-shirts, Polos, Hoodies)
                            </SelectItem>
                            <SelectItem value="Woven">
                              Woven (Shirts, Pants, Jackets)
                            </SelectItem>
                            <SelectItem value="Denim">
                              Denim (Jeans, Jackets)
                            </SelectItem>
                            <SelectItem value="Mixed">
                              Mixed (Multiple categories)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Select the primary category. Specify details in
                          additional info if multiple.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Quantity (pieces) *</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 5000"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Minimum order quantity: 500-1000 pcs depending on
                          category
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="destinationMarket"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Destination Market *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select destination market" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="EU">European Union</SelectItem>
                            <SelectItem value="Canada">Canada</SelectItem>
                            <SelectItem value="Australia">Australia</SelectItem>
                            <SelectItem value="USA">United States</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Helps us confirm compliance requirements
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Compliance & Timeline */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Compliance & Timeline
                  </h3>

                  <FormField
                    control={form.control}
                    name="requiredCompliance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Required Compliance (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., WRAP, BSCI, Oeko-Tex, GOTS"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter specific certifications or compliance standards
                          required
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Delivery Timeline *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Urgent (30 days)">
                              Urgent (Within 30 days)
                            </SelectItem>
                            <SelectItem value="Standard (45-60 days)">
                              Standard (45-60 days)
                            </SelectItem>
                            <SelectItem value="Flexible (60-90 days)">
                              Flexible (60-90 days)
                            </SelectItem>
                            <SelectItem value="Long-term (90+ days)">
                              Long-term (90+ days)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Additional Information
                  </h3>

                  <FormField
                    control={form.control}
                    name="additionalDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide any additional information: specific product details, fabric preferences, special requirements, tech pack availability, etc."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The more details you provide, the more accurate our
                          response will be
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms. We will only use your information to respond to your
                  inquiry.
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="gradient-accent">
            <CardHeader>
              <CardTitle className="text-center">
                Why Buyers Choose SourceLoom
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <Badge variant="default" className="mb-3">
                    Fast Response
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    24-hour capability confirmation with preliminary information
                  </p>
                </div>
                <div className="text-center">
                  <Badge variant="default" className="mb-3">
                    Transparent Data
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Clear MOQ, lead times, compliance, and quality standards
                  </p>
                </div>
                <div className="text-center">
                  <Badge variant="default" className="mb-3">
                    Certified Facility
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    WRAP Gold, BSCI, Oeko-Tex, ISO 9001 certified factory
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
