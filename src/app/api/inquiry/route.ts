import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema for API route
const inquirySchema = z.object({
  buyerRole: z.string().min(1),
  companyName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  productCategories: z.string().min(1),
  quantity: z.string().min(1),
  destinationMarket: z.string().min(1),
  requiredCompliance: z.string().optional(),
  timeline: z.string().min(1),
  additionalDetails: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request data
    const validatedData = inquirySchema.parse(body);

    // TODO: Implement your preferred submission method
    // Option 1: Send email via email service (Resend, SendGrid, Nodemailer)
    // Option 2: Save to database (Prisma, MongoDB, etc.)
    // Option 3: Send to external CRM/webhook

    // Example: Log to console (replace with actual implementation)
    console.log("===== NEW INQUIRY RECEIVED =====");
    console.log("Company:", validatedData.companyName);
    console.log("Contact:", validatedData.contactName);
    console.log("Email:", validatedData.email);
    console.log("Phone:", validatedData.phone);
    console.log("Role:", validatedData.buyerRole);
    console.log("Product Category:", validatedData.productCategories);
    console.log("Quantity:", validatedData.quantity);
    console.log("Destination:", validatedData.destinationMarket);
    console.log("Compliance:", validatedData.requiredCompliance || "Not specified");
    console.log("Timeline:", validatedData.timeline);
    console.log("Additional Details:", validatedData.additionalDetails || "None");
    console.log("Timestamp:", new Date().toISOString());
    console.log("================================");

    // PLACEHOLDER: Email sending example (commented out)
    /*
    // Example with Resend (requires: npm install resend)
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'inquiries@sourceloom.me',
      to: 'export@sourceloom.me',
      subject: `New Production Inquiry - ${validatedData.companyName}`,
      html: `
        <h2>New Production Inquiry Received</h2>
        <p><strong>Company:</strong> ${validatedData.companyName}</p>
        <p><strong>Contact:</strong> ${validatedData.contactName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Role:</strong> ${validatedData.buyerRole}</p>
        <hr>
        <p><strong>Product Category:</strong> ${validatedData.productCategories}</p>
        <p><strong>Quantity:</strong> ${validatedData.quantity} pieces</p>
        <p><strong>Destination Market:</strong> ${validatedData.destinationMarket}</p>
        <p><strong>Required Compliance:</strong> ${validatedData.requiredCompliance || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${validatedData.timeline}</p>
        <hr>
        <p><strong>Additional Details:</strong></p>
        <p>${validatedData.additionalDetails || 'None provided'}</p>
        <hr>
        <p><small>Submitted: ${new Date().toISOString()}</small></p>
      `,
    });
    */

    // PLACEHOLDER: Database saving example (commented out)
    /*
    // Example with Prisma (requires Prisma setup)
    import { PrismaClient } from '@prisma/client';
    const prisma = new PrismaClient();
    
    await prisma.inquiry.create({
      data: {
        buyerRole: validatedData.buyerRole,
        companyName: validatedData.companyName,
        contactName: validatedData.contactName,
        email: validatedData.email,
        phone: validatedData.phone,
        productCategories: validatedData.productCategories,
        quantity: validatedData.quantity,
        destinationMarket: validatedData.destinationMarket,
        requiredCompliance: validatedData.requiredCompliance || null,
        timeline: validatedData.timeline,
        additionalDetails: validatedData.additionalDetails || null,
        submittedAt: new Date(),
      },
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully. We will respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry submission error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
