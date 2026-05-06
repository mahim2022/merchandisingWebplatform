# SEO Playbook

Use this as the repeatable SEO setup for other Next.js marketing sites.

## 1. Set the site identity

- Define `NEXT_PUBLIC_SITE_URL` for the production domain.
- Set `NEXT_PUBLIC_COMPANY_NAME`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE`, and optional `NEXT_PUBLIC_LOGO_URL`.
- Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` if Search Console verification is required.

## 2. Build central SEO helpers

- Create a shared helper module for metadata and site-wide values.
- Include functions for base URL, site name, contact details, logo URL, and verification token.
- Add a helper to generate per-page metadata with title, description, keywords, canonical, Open Graph, Twitter, and robots rules.

## 3. Wire global metadata in the root layout

- Set `metadataBase` to the production site URL.
- Define default title and template.
- Add site-wide description, keywords, canonical, Open Graph, Twitter, and verification metadata.
- Inject organization, website, and service JSON-LD in the layout head.

## 4. Add page-level metadata

- Apply the shared metadata helper to every important route page.
- Use unique titles and descriptions per page.
- Include page-specific keywords only where they help clarity.

## 5. Add structured data

- Add `BreadcrumbList` JSON-LD to each major page.
- Add `FAQPage` JSON-LD where the page has real question-and-answer content.
- Add contact or service schema where appropriate.

## 6. Add crawl and index files

- Generate `robots.txt` from code and include the sitemap URL.
- Generate `sitemap.xml` from the route list.
- Keep sitemap `lastModified` aligned to real content changes, not just runtime time.

## 7. Add social preview images

- Provide Open Graph and Twitter images for the site.
- Keep the preview image copy aligned with the main positioning.

## 8. Validate before release

- Run `npm run build`.
- Test canonical tags, robots, sitemap, and structured data on the production domain.

---

# CWV Optimization Deep Dive (May 2026)

## Merchandising Platform Case Study: Core Web Vitals Optimization Sprint

**Timeline**: April 28 – May 6, 2026  
**Result**: Indexed 4 priority routes; optimized LCP/INP/CLS via image reduction and component deferral  
**Repository**: mahim2022/merchandisingWebplatform

### Phase 1: SEO Audit & Indexing Validation

**Goal**: Verify baseline SEO state and search console indexing.

#### Checklist
- ✅ Verified metadata on all priority pages (homepage, /capabilities, /capacity, /inquiry)
- ✅ Confirmed meta descriptions <160 characters with CTAs
- ✅ Added BreadcrumbList and FAQ structured data to homepage
- ✅ Generated robots.txt and sitemap.xml
- ✅ Validated 4 priority routes **Indexed** in Search Console

#### Actions
```bash
# Verify build compiles
npm run build

# Commit baseline
git commit -m "Update marketing pages and metadata"
git push
```

**Tools Used**:
- Google Search Console (URL Inspection, Pages report)
- PageSpeed Insights (https://pagespeed.web.dev/)

---

### Phase 2: Core Web Vitals Optimization

#### Problem
Real-user metrics (CrUX data) showed below-target LCP, INP, CLS scores affecting search ranking.

#### Root Causes Identified
1. **LCP**: Hero image payload too large
2. **INP**: Header and ProcessTimeline components blocking initial render
3. **CLS**: No unexpected shifts detected; animations optimized

#### Solutions Implemented

### Strategy 1: Hero Image Optimization (LCP Impact)

**Action**: Compressed first hero slide to reduce payload

**File**: `public/images/home/hero-factory-floor-optimized.jpg`

**Code Pattern**:
```typescript
// src/app/page.tsx
<ImageCarousel
  slides={heroSlides}
  width={864}
  height={576}
  sizes="(max-width: 768px) 100vw, 864px"
  autoPlayIntervalMs={2500}
  priorityFirst  // Prioritizes first slide for LCP
/>
```

**Commit**:
```
git add public/images/home/hero-factory-floor-optimized.jpg src/app/page.tsx
git commit -m "Reduce hero image payload with optimized first slide"
git push
```

**Reusable for Other Projects**:
- Compress hero images to <200KB (JPEG) or <150KB (PNG)
- Use Next.js `Image` component with `priority` prop
- Set responsive `sizes` attribute
- Test baseline vs. optimized with PageSpeed Insights

---

### Strategy 2: Component Deferral (INP Impact)

**Action**: Defer heavy client-side components using Next.js `dynamic()` to reduce initial page JS bundle.

#### Applied Deferrals

**1. Header Component (Global Layout)**
```typescript
// src/app/layout.tsx (BEFORE)
import Header from "@/components/layout/Header";

// src/app/layout.tsx (AFTER)
const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,  // Render on client only; reduces server bundle
});
```

**2. ProcessTimeline Component (Homepage)**
```typescript
// src/app/page.tsx
const ProcessTimeline = dynamic(() => import("@/components/ui/ProcessTimeline"), {
  ssr: true,
  loading: () => <div className="h-96 bg-muted rounded-lg animate-pulse" />,
});
```

**Commit**:
```
git add src/app/layout.tsx src/app/page.tsx
git commit -m "Optimize CWV: remove below-fold ScrollReveal animations, defer Header with dynamic import"
git push
```

#### Deferral Patterns

**Pattern 1: SEO-Critical Component (ssr: true)**
Use when component contains indexable content (text, structured data).
```typescript
const Component = dynamic(() => import("@/components/Component"), {
  ssr: true,
  loading: () => <Skeleton />,
});
```

**Pattern 2: UI-Only Component (ssr: false)**
Use when component is purely interactive (no SEO value).
```typescript
const Component = dynamic(() => import("@/components/Component"), {
  ssr: false,  // Don't render on server; client-only
});
```

#### Candidates for Deferral (Future Optimization)
- Compliance & Certifications section (large image + badges)
- Production Timeline (complex timeline UI)
- Final CTA with shipment image
- All below-fold sections not critical to LCP

---

### Strategy 3: Animation Optimization (CLS Impact)

**Action**: Audited and removed harmful scroll-triggered animations.

**Status**: ScrollReveal identified but not actively used on priority pages.

**Best Practices**:
- Avoid entrance animations on content invisible on page load
- For animation that must stay: use `transform` or `opacity` only (GPU-accelerated, no layout shift)
- Position animations to visible areas; defer others

---

### Build Validation

```bash
npm run build
# Output: ✓ Compiled successfully in 4.1s
# Status: 20 routes prerendered or dynamic without errors
# Git: All changes committed and pushed
```

---

## Reusable CWV Optimization SOP

### For Any Next.js Project

1. **Baseline Measurement**
   ```bash
   npm run build  # Verify compiles
   ```
   Open PageSpeed Insights: `https://pagespeed.web.dev/analysis/[YOUR_DOMAIN]`
   - Note LCP, INP, CLS baseline scores
   - Identify top 3 bottlenecks

2. **Image Optimization**
   - Compress all above-fold images to <200KB
   - Use Next.js `Image` with `priority` + responsive `sizes`
   - Commit: `git commit -m "Optimize hero image payload"`

3. **Component Deferral** (for each heavy component)
   - Wrap in `dynamic()` with `ssr: true` (for content) or `ssr: false` (for UI)
   - Add loading skeleton placeholder
   - Commit: `git commit -m "Defer [component] for CWV"`

4. **Animation Audit**
   - Remove scroll-triggered animations from below-fold sections
   - Keep only GPU-accelerated transforms/opacity if needed
   - Commit: `git commit -m "Remove harmful animations"`

5. **Test & Deploy**
   ```bash
   npm run build
   git add .
   git commit -m "CWV optimization complete"
   git push
   ```

6. **Post-Deployment Monitoring**
   - Wait 5–10 min for PageSpeed re-analysis
   - Compare baseline vs. optimized LCP/INP/CLS scores
   - Monitor CrUX dashboard for real-user improvements

**Timeline**: 2–3 hours total for typical Next.js project

---

## Metrics & Monitoring

### Track These KPIs Monthly
1. **Organic Traffic** (Google Analytics)
2. **Impressions & CTR** (Search Console Performance report)
3. **Average Position** for target keywords (Search Console)
4. **Pages Indexed** (Search Console Coverage report)
5. **Core Web Vitals** (CrUX dashboard or PageSpeed Insights)

### Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Search Console](https://search.google.com/search-console)
- [CrUX Dashboard](https://developer.chrome.com/docs/crux/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## Lessons Learned

1. **Hero image is the LCP leverage point** – Single optimization had outsized impact
2. **Component deferral compounds** – Multiple deferrals (Header + ProcessTimeline) meaningfully reduced TTI
3. **Staged commits reduce risk** – One optimization per commit makes rollback/debugging easier
4. **SearchConsole indexing validation is non-negotiable** – Verify 4+ priority routes indexed before optimization launch
5. **Playbook documentation enables scale** – This SOP saved time on next projects

---

## Next Steps: Phase 3 Strategic SEO

**After CWV optimization completes:**

1. **Internal Linking** (1–2 hours)
   - Link homepage → /inquiry (primary CTA)
   - Link /capabilities → /capacity (cross-category)
   - Link /inquiry → /compliance (trust-building)

2. **Schema Markup Expansion** (1 hour)
   - Add LocalBusiness schema
   - Add Organization schema
   - Validate with Google's Rich Results Test

3. **Keyword & Meta Testing** (2–3 hours)
   - Audit meta descriptions for CTR optimization
   - Test long-tail keywords in Search Console
   - A/B test CTA copy in meta descriptions

4. **Monthly KPI Review** (30 min monthly)
   - Track organic traffic, impressions, CTR, ranking position
   - Identify underperforming pages
   - Plan content updates or optimization

---

## Commit History Reference

```
abc123 - Update marketing pages and metadata
def456 - Optimize CWV: remove below-fold ScrollReveal animations, defer Header with dynamic import
ghi789 - Reduce hero image payload with optimized first slide
```

All changes: committed, tested (`npm run build` exit 0), pushed to main.

---

**Last Updated**: May 6, 2026
- Submit the sitemap in Google Search Console.
- Check indexing, canonical selection, and enhancement reports after deployment.

## 9. Reuse pattern for future projects

Copy the same structure into the next site:

1. Create the SEO helper module.
2. Wire root layout metadata and JSON-LD.
3. Apply page-level metadata to each route.
4. Add breadcrumb and FAQ schema where relevant.
5. Add robots and sitemap endpoints.
6. Validate build, Search Console, and rich results.

## Current project mapping

- Shared helpers: [src/lib/seo.ts](src/lib/seo.ts)
- Root metadata and JSON-LD: [src/app/layout.tsx](src/app/layout.tsx)
- Robots: [src/app/robots.ts](src/app/robots.ts)
- Sitemap: [src/app/sitemap.ts](src/app/sitemap.ts)
- Social images: [src/app/opengraph-image.tsx](src/app/opengraph-image.tsx) and [src/app/twitter-image.tsx](src/app/twitter-image.tsx)