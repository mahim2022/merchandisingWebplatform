# SEO Playbook — Portable Copy

A single, copy-pasteable SEO playbook assembled from the repository's SEO guides. Drop this file into a new Next.js marketing repo and follow the Quick Start to get Search Console, sitemaps, robots, metadata, structured data, and Core Web Vitals (CWV) improvements running quickly. Includes short Copilot prompts you can reuse.

---

## 1 — Purpose
- Portable, actionable SEO runbook for Next.js marketing sites.
- Minimal prerequisites: a Next.js app with a `public/` folder and git.
- Goal: make a new site indexable, crawlable, and CWV-friendly within a few hours.

---

## 2 — Files to add or verify (copy to new repo)
- `SEO_PLAYBOOK_COMBINED.md` (this file)
- `SEO_INDEXATION_SETUP.md` (optional companion: indexation steps)
- `INDEXATION_CHECKLIST.md` (printable checklist)
- `VERIFICATION_FILES_GUIDE.md` (domain verification notes)
- `public/googleXXXXXXXX.html` (Google Search Console verification file)
- `public/BingSiteAuth.xml` (Bing verification file)
- A site `sitemap.xml` generator route (e.g., `src/app/sitemap.ts`) and `robots.txt` route (e.g., `src/app/robots.ts`).

---

## 3 — Quick Start (15–45 minutes)
1. Copy this file to the repo root.

PowerShell copy example:

```powershell
Copy-Item .\SEO_PLAYBOOK_COMBINED.md -Destination C:\path\to\new\repo\
```

2. Set environment variables in `.env` or Vercel/host settings:
- `NEXT_PUBLIC_SITE_URL=https://example.com`
- `NEXT_PUBLIC_COMPANY_NAME=Your Company Name`
- `NEXT_PUBLIC_CONTACT_EMAIL=you@example.com`
- `NEXT_PUBLIC_CONTACT_PHONE=+1-555-555-5555`
- Optionally: `NEXT_PUBLIC_LOGO_URL` and `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

3. Create or copy the following quick helpers:
- `src/lib/seo.ts` — single helper that returns `metadataBase`, `defaultTitle`, `openGraph`, `twitter`, canonical, and `generateMetadata(page)`.
- `src/app/robots.ts` and `src/app/sitemap.ts` — simple endpoints that emit `text/plain` and XML respectively.

4. Build and validate locally:
```powershell
npm install
npm run build
```

5. Add verification files to `public/` (download from Search Console / Bing) and push:
```powershell
git add public/google*.html public/BingSiteAuth.xml
git commit -m "Add search engine verification files"
git push origin main
```

6. Verify in Google Search Console and Bing; submit `sitemap.xml` and request indexing for your top 3 pages.

---

## 4 — Site Identity & Metadata (Implementation)
1. Centralize site identity in `src/lib/seo.ts`:
   - `getBaseUrl()` returning `NEXT_PUBLIC_SITE_URL`
   - `siteName`, `contact`, `logoUrl`, `verificationToken`
   - `generatePageMetadata({ title, description, path, image, robots })` that returns a metadata object used by Next.js layout and route pages.

2. Wire `metadataBase` and defaults in `src/app/layout.tsx` (root layout):
   - Default title & template
   - Default description & keywords
   - Open Graph & Twitter card values
   - JSON-LD for `Organization`, `Website`, and a site-level `BreadcrumbList` if needed

3. Per-route: call `generatePageMetadata()` with route-specific title, description, canonical, and structured data inclusion.

---

## 5 — Structured Data (JSON-LD)
- Add `BreadcrumbList` to major pages.
- Add `FAQPage` only where you have real Q&A content.
- Add `Service`/`LocalBusiness`/`Organization` where appropriate.
- Validate with Google's Rich Results Test and Schema Validator.

Example pattern (inject in layout or page head):
```tsx
<script type="application/ld+json">{...}</script>
```

---

## 6 — Robots & Sitemap
- Implement `src/app/robots.ts` to return `User-agent: *` rules and the sitemap URL.
- Implement `src/app/sitemap.ts` to return an XML sitemap generated from your internal route list (blog posts, static pages). Set `lastmod` based on content change time.
- Submit `/sitemap.xml` to Search Console and Bing Webmaster Tools.

---

## 7 — Indexation Steps (Google + Bing)
(Condensed version of `SEO_INDEXATION_SETUP.md`)

Google (15 min):
- Add property in GSC using **URL prefix** → `https://yourdomain.com`.
- Download the HTML file, put it in `public/`, push, then click Verify.
- Submit `sitemap.xml` via GSC > Index > Sitemaps.
- Use URL Inspection to Request Indexing for 3 priority pages.

Bing (10 min):
- Add site in Bing Webmaster Tools.
- Upload `BingSiteAuth.xml` to `public/`, push and verify.
- Submit `https://yourdomain.com/sitemap.xml` and optionally Submit URLs.

Checklist (copy this into a ticket or runbook):
- [ ] GSC property added and verified
- [ ] Sitemap submitted to GSC
- [ ] 3 priority pages requested for indexing
- [ ] Bing verified and sitemap submitted

---

## 8 — Core Web Vitals (CWV) Quick SOP
(Condensed from CWV notes in the repo)

1. Baseline: `npm run build` and run PageSpeed Insights on target pages.
2. Hero image: compress first hero image (<200KB JPEG or <150KB WebP/AVIF). Use `priority` on first image and proper `sizes`.
3. Defer heavy components: wrap non-critical components in `dynamic()`.
   - Use `ssr: true` for SEO-relevant components with placeholder skeletons.
   - Use `ssr: false` for purely interactive UI.
4. Remove below-fold scroll-triggered animations that cause layout work; prefer `transform` and `opacity` only.
5. Rebuild and re-measure; commit each change in small steps for easier rollback.

Quick commands:
```powershell
npm run build
# measure with PageSpeed or Lighthouse
```

---

## 9 — Testing & Validation
- `npm run build` should succeed.
- Validate metadata and structured data with:
  - Google Rich Results Test
  - URL Inspection in Search Console
- Validate sitemap URLs and `lastmod` values.

---

## 10 — Monitoring & KPIs
Track monthly:
- Organic traffic (Analytics)
- Impressions & CTR (Search Console)
- Average position (Search Console)
- Pages indexed (Coverage)
- Core Web Vitals (CrUX / PageSpeed)

---

## 11 — Reusable Commit Messages & Patterns
- "Add site metadata and SEO helper"
- "Add sitemap and robots endpoints"
- "Add GSC/Bing verification files"
- "Optimize hero image for LCP"
- "Defer [ComponentName] with dynamic import for CWV"

---

## 12 — Copy-to-New-Repo Checklist (one-liner tasks)
- Copy `SEO_PLAYBOOK_COMBINED.md` to new repo root.
- Add `src/lib/seo.ts` helper (or copy from an existing project).
- Wire `metadataBase` and root layout metadata.
- Add `sitemap.ts` and `robots.ts` endpoints.
- Add verification files to `public/` and push.
- Verify in GSC and Bing, submit sitemaps, request indexing.

---

## 13 — Copilot Prompts & Usage (repeatable)
Use these short prompts in the new repo to get Copilot to help implement items faster.

- Create SEO helper module:
"Create a `src/lib/seo.ts` module that exports `siteMetadata` and a function `generatePageMetadata({title,description,path,image})` for a Next.js app. Use env var `NEXT_PUBLIC_SITE_URL` as base."

- Add robots endpoint:
"Create `src/app/robots.ts` that returns `text/plain` with a `User-agent: *` rule and sitemap location using `NEXT_PUBLIC_SITE_URL`." 

- Add sitemap endpoint:
"Create `src/app/sitemap.ts` that returns a basic XML sitemap built from static route list and blog posts in `src/lib/blog.ts`. Include lastmod from each post metadata."

- Optimize hero image suggestion:
"Find the largest image under `public/images/home` and suggest a compressed version and Next.js `Image` settings to reduce LCP." 

- Request GSC steps reminder:
"Open SEO_INDEXATION_SETUP.md and follow the Google Search Console steps: add property, add verification file to public/, push, and click Verify. Then submit sitemap.xml and request indexing for top 3 posts."

Tip: Use Copilot in code editor mode for file scaffolding and small code snippets, then review before committing.

---

## 14 — Example Minimal Files (links you can copy)
- SEO helper: see `src/lib/seo.ts` in this repo for a full example.
- Root wiring: see `src/app/layout.tsx` for how metadataBase is set.
- Robots & sitemap: see `src/app/robots.ts` and `src/app/sitemap.ts` in this repo.

---

## 15 — Next Actions (recommended order)
1. Wire `src/lib/seo.ts` and `src/app/layout.tsx` (metadata base).
2. Add `robots.ts` and `sitemap.ts` endpoints.
3. Add GSC/Bing verification files to `public/` and push.
4. Submit sitemaps and request indexing for 3 priority pages.
5. Run PageSpeed Insights and apply CWV quick wins.

---

## 16 — License & Attribution
Use this playbook as you see fit. It aggregates internal notes and published workflows; adapt to your organization and domain.

---

_Last updated: May 21, 2026 — combined from repository SEO guides._
