# B2B Garment Factory Website

A professional, data-driven website for overseas apparel sourcing managers to evaluate manufacturing capability, compliance, capacity, lead times, and quality control **before** contacting the factory.

**This is NOT an ecommerce site.** It is a buyer decision-support website for B2B garment sourcing.

## 🎯 Project Overview

**Target Users:** EU, Canadian, and Australian apparel sourcing managers and buying teams

**Primary Goal:** Enable buyers to evaluate manufacturing capability, compliance, capacity, lead times, and quality control before inquiring.

**Key Differentiator:** Transparency-first approach with data-driven content, no fashion imagery, corporate minimal design.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (built on Radix UI)
- **Form Handling:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
merchandising/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout with Header/Footer
│   │   ├── page.tsx              # Homepage
│   │   ├── capabilities/         # Manufacturing capabilities page
│   │   ├── capacity/             # Production capacity & lead times
│   │   ├── quality/              # Quality control process
│   │   ├── compliance/           # Certifications & compliance
│   │   ├── factory/              # Factory overview
│   │   ├── work-with-us/         # How to work with us
│   │   ├── inquiry/              # Production inquiry form
│   │   └── api/
│   │       └── inquiry/          # API route for form submission
│   │           └── route.ts
│   ├── components/
│   │   ├── layout/               # Header, Footer
│   │   └── ui/                   # Reusable UI components
│   │       ├── StatCard.tsx
│   │       ├── CertificationBadge.tsx
│   │       ├── ProcessTimeline.tsx
│   │       ├── CapabilityTable.tsx
│   │       ├── CTAButton.tsx
│   │       └── [shadcn components]
│   └── types/
│       └── index.ts              # TypeScript type definitions
├── public/                       # Static assets
├── .env.local                    # Environment variables (not committed)
├── .env.example                  # Environment template
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 📄 Website Pages

### 1. **Homepage** (`/`)
- Clear value proposition for B2B buyers
- Manufacturing capability summary (knit, woven, denim)
- Key metrics: lines, capacity, MOQ, lead time
- Compliance badges (WRAP, BSCI, Oeko-Tex, ISO 9001)
- Production process timeline
- CTA: "Request Production Evaluation"

### 2. **Manufacturing Capabilities** (`/capabilities`)
- Categories by construction: knit, woven, denim
- Fabric experience tables with GSM ranges
- Stitch & machine capabilities
- MOQ by category
- Sampling policy with timelines and costs

### 3. **Production Capacity & Lead Times** (`/capacity`)
- Number of lines and machines
- Monthly output by product category
- Peak vs off-peak capacity
- Sampling lead times (5-12 days)
- Bulk production lead times (30-60 days)
- Lead time breakdown by order quantity

### 4. **Quality Control Process** (`/quality`)
- Raw material inspection (4-point fabric system)
- Inline QC checkpoints
- Final inspection (AQL 2.5/4.0 standards)
- Defect handling and rework protocol
- Buyer notification policy

### 5. **Compliance & Certifications** (`/compliance`)
- Active certifications: WRAP Gold, BSCI, Oeko-Tex, ISO 9001
- Audit history with non-conformance tracking
- Labor & human rights compliance
- Environmental compliance
- Market-specific requirements (EU, Canada, Australia)
- Certificate download placeholders

### 6. **Factory Overview** (`/factory`)
- Company background (established 2008)
- Management team structure
- Facility statistics: 850+ workforce, 85,000 sq ft
- Infrastructure: power, water, fire safety, worker facilities
- Sustainability practices
- Core values: Quality, Transparency, Reliability

### 7. **How to Work With Us** (`/work-with-us`)
- Step-by-step sourcing process (9 stages)
- Requirements from buyers: tech packs, order info
- Communication workflow and response times
- Payment terms: 30-70 for new buyers, flexible for established
- Additional services: fabric sourcing, testing, logistics

### 8. **Production Evaluation Form** (`/inquiry`)
- Comprehensive form with validation
- Fields: buyer role, company, contact, product category, quantity, destination, compliance, timeline
- Form submission to API route
- Success confirmation with next steps
- Response time commitment: 24 hours

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd "c:\Users\Sharika Mushfiq\Documents\merchandising"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example file
   copy .env.example .env.local
   
   # Edit .env.local with your actual values
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

## 📧 Inquiry Form Setup

The inquiry form currently logs submissions to the console. To make it functional, implement one of these options:

### Option 1: Email Service (Recommended for MVP)

**Using Resend:**
```bash
npm install resend
```

Uncomment the email sending code in `/src/app/api/inquiry/route.ts` and add to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**Using SendGrid:**
```bash
npm install @sendgrid/mail
```

### Option 2: Database Storage

**Using Prisma + PostgreSQL:**
```bash
npm install prisma @prisma/client
npx prisma init
```

Create your schema, uncomment database code in API route, and add:
```
DATABASE_URL="postgresql://..."
```

**Using MongoDB:**
```bash
npm install mongodb
```

### Option 3: Webhook/CRM Integration

Send form data to external webhook, Zapier, Make.com, or CRM system.

## 🎨 Design Principles

- **Corporate Minimal:** Clean, professional, no distractions
- **Data-Driven:** Numbers, tables, timelines over imagery
- **Trust-Focused:** Transparency in capability, compliance, capacity
- **No Fashion Ecommerce UI:** This is not a catalog or shopping site
- **B2B Professional:** Suitable for sourcing managers and buying teams

## 🎨 Customization

### Change Company Name & Contact Info

Edit `.env.local`:
```
NEXT_PUBLIC_COMPANY_NAME="Your Factory Name"
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_CONTACT_PHONE="+123456789"
```

Update in:
- `src/components/layout/Header.tsx` (logo/brand)
- `src/components/layout/Footer.tsx` (contact details)

### Update Capabilities Data

Edit the data arrays in each page:
- `/src/app/capabilities/page.tsx` - fabric tables, MOQ
- `/src/app/capacity/page.tsx` - capacity numbers, lead times
- `/src/app/compliance/page.tsx` - certifications, audit history

### Change Color Scheme

Tailwind CSS uses CSS variables. Edit `/src/app/globals.css`:
```css
:root {
  --primary: oklch(...);  /* Main brand color */
  --secondary: oklch(...);
  /* etc. */
}
```

Or use Tailwind classes like `bg-blue-600` instead of `bg-primary`.

### Add/Remove Pages

1. Create new folder in `/src/app/[page-name]/`
2. Add `page.tsx`
3. Update navigation in `/src/components/layout/Header.tsx`

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy

### Deploy to Other Platforms

Build the project:
```bash
npm run build
```

The output will be in `.next/` directory. Follow platform-specific instructions for Next.js deployment.

## 🛡️ Environment Variables

See `.env.example` for full list. Required for production:

- `NEXT_PUBLIC_SITE_URL` - Your production domain
- `NEXT_PUBLIC_COMPANY_NAME` - Factory/company name
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email
- `NEXT_PUBLIC_CONTACT_PHONE` - Contact phone

Optional (for inquiry form):
- Email service API keys (Resend, SendGrid, etc.)
- Database connection strings

## 🔎 SEO Deployment Checklist

Use this checklist after each production deployment to keep SEO stable.

1. Confirm production environment values:
   - `NEXT_PUBLIC_SITE_URL` points to the canonical production domain.
   - `NEXT_PUBLIC_COMPANY_NAME`, `NEXT_PUBLIC_CONTACT_EMAIL`, and `NEXT_PUBLIC_CONTACT_PHONE` are current.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is set when Search Console verification is required.
2. Verify robots and sitemap endpoints are live:
   - `https://your-domain.com/robots.txt`
   - `https://your-domain.com/sitemap.xml`
3. Validate canonical and social tags on core pages (`/`, `/capabilities`, `/capacity`, `/compliance`, `/inquiry`).
4. Validate structured data with Google Rich Results Test for homepage and key landing pages.
5. In Google Search Console:
   - Submit or refresh the sitemap URL.
   - Check indexing coverage and canonical selection.
   - Review enhancement reports for structured data warnings.
6. Re-run build validation before release:

```bash
npm run build
```

For a reusable implementation guide you can copy to other projects, see [SEO_PLAYBOOK.md](SEO_PLAYBOOK.md).

## 📝 Content Management

Currently, all content is hardcoded in page components. For dynamic content management, consider:

- **Sanity CMS** - Headless CMS with excellent Next.js integration
- **Contentful** - Enterprise CMS
- **Strapi** - Self-hosted open-source CMS
- **Markdown files** - Simple file-based content

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript Errors

```bash
# Check for type errors
npx tsc --noEmit
```

### Styling Issues

```bash
# Rebuild Tailwind
npm run dev
```

## 📞 Support & Contact

For questions about this codebase:
- Check the code comments in each file
- Review shadcn/ui documentation: https://ui.shadcn.com
- Next.js documentation: https://nextjs.org/docs

For factory inquiries:
- Use the inquiry form at `/inquiry`
- Email: export@sourceloom.me
- Phone: +880 1234 567 890

## 📜 License

This is a proprietary B2B website for SourceLoom. All rights reserved.

---

**Built with:** Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui · React Hook Form

**Version:** 1.0.0  
**Last Updated:** February 2026

# Free Domain Email Setup (Namecheap + Gmail Forwarding)

## 🎯 Goal

Set up a **FREE domain email system** using:

* Namecheap domain
* Gmail inbox

Result:

* Receive emails at `hello@yourdomain.com`
* Send emails from Gmail as `hello@yourdomain.com`

---

# 🧩 PART 1 — Namecheap Setup (Email Forwarding)

## Step 1 — Open Domain Management

1. Log in to Namecheap
2. Go to **Domain List**
3. Click **Manage** next to your domain

---

## Step 2 — Configure Mail Settings

1. Go to **Advanced DNS**
2. Find **Mail Settings**

### Set it to:

* **No Email Service**
  OR
* **Custom MX**

3. Click **Save**

---

## Step 3 — Remove Google MX Records (if any)

In **Advanced DNS → MX Records**, delete any of these if present:

* ASPMX.L.GOOGLE.COM
* ALT1.ASPMX.L.GOOGLE.COM
* ALT2.ASPMX.L.GOOGLE.COM
* ALT3.ASPMX.L.GOOGLE.COM
* ALT4.ASPMX.L.GOOGLE.COM

---

## Step 4 — Add / Verify SPF Record

In **Advanced DNS → TXT Records**, ensure this exists:

* **Type:** TXT
* **Host:** @
* **Value:**

  ```
  v=spf1 include:spf.efwd.registrar-servers.com ~all
  ```

If not present, add it.

---

## Step 5 — Setup Email Forwarding

⚠️ Important:
**Email forwarding is NOT in Advanced DNS**

### Correct location:

* Go to **Domain → Redirect Email** (dropdown menu)

---

### Add Forwarder:

* **Alias:** `hello`
* **Forward to:** your Gmail address

Example:

```
hello@yourdomain.com → yourgmail@gmail.com
```

---

### Optional aliases:

* `contact@yourdomain.com`
* `admin@yourdomain.com`

---

## Step 6 — Wait & Test

* Wait **10–30 minutes**
* Send a test email to:

  ```
  hello@yourdomain.com
  ```
* Confirm it arrives in Gmail

---

# 🧩 PART 2 — Gmail Setup (Send Mail As)

## Step 1 — Open Gmail Settings

1. Open Gmail
2. Click ⚙️ (top right)
3. Click **See all settings**

---

## Step 2 — Go to Accounts

* Open **Accounts and Import** tab

---

## Step 3 — Add Domain Email

Under **Send mail as**:

1. Click **Add another email address**
2. Enter:

   * Name: your name or brand
   * Email: `hello@yourdomain.com`
3. Keep:

   * ✔ Treat as alias

Click **Next**

---

## Step 4 — SMTP Configuration

Fill:

* SMTP Server: `smtp.gmail.com`
* Port: `587`
* Username: your Gmail address
* Password: Gmail password OR App Password

---

## ⚠️ If 2FA is enabled (recommended)

Use **App Password**:

1. Go to Google Account → Security
2. Open **App Passwords**
3. Generate password for "Mail"
4. Use that password instead

---

## Step 5 — Verify Email

1. Gmail sends a code to `hello@yourdomain.com`
2. It gets forwarded to your Gmail
3. Copy code → paste into popup → Verify

---

# ⚙️ Optional Settings (Recommended)

## Set Default Sender

* Set `hello@yourdomain.com` as default in Gmail

## Reply Behavior

Enable:

* “Reply from the same address the message was sent to”

## Add Signature

Example:

```
Your Name
hello@yourdomain.com
```

---

# 🧠 Final Setup Summary

| Feature           | Status      |
| ----------------- | ----------- |
| Receive emails    | ✅ Working   |
| Send emails       | ✅ Via Gmail |
| Cost              | ✅ FREE      |
| Professional look | ⚠️ Mostly   |

---

# ⚠️ Limitations

* Not a real mailbox (forwarding only)
* Emails may show “via gmail.com”
* No DKIM (higher spam chance)
* Not suitable for apps (OTP, automation)

---

# 🚀 When to Upgrade

Upgrade to real email hosting when you need:

* Better deliverability
* Client communication
* App/email automation
* Full professional setup

---

# ✅ Final Notes

* Always check **Redirect Email tab** (not DNS) for forwarding
* Keep SPF record for forwarding
* Avoid mixing with Gmail/Google MX unless using Workspace

---

✔ This setup is the **best free solution available**
✔ Simple, stable, and good for small projects / portfolios
