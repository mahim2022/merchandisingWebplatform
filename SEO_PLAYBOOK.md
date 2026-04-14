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