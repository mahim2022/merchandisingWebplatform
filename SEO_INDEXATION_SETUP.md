# SEO Indexation Setup for Sourceloom Blog

**Status:** Your blog is technically ready. This guide walks you through getting it indexed in Google and Bing.

**Timeline:**
- Google: 3–7 days to crawl, 2–4 weeks to show in search results
- Bing: 1–3 weeks for initial results

---

## Part 1: Google Search Console (15 minutes)

### Step 1: Create/Sign Into Google Search Console
1. Go to: https://search.google.com/search-console
2. Sign in with your Google account
   - If you don't have one, create one using your work/personal email
   - Good practice: Use the same email as your domain admin

### Step 2: Add Your Property
1. You'll see two options:
   - **URL prefix** (left) ← Pick this
   - Domain (right)
2. In the URL prefix field, paste: `https://sourceloom.com`
3. Click **Continue**

### Step 3: Verify Ownership - HTML File Method (EASIEST)
1. Google will show you a verification dialog
2. Look for the **"HTML file"** tab at the top
3. Click **Download** the HTML file offered (e.g., `googleXXXXXXXX.html`)
4. Now add it to your Next.js project:
   - Create the file in: `public/googleXXXXXXXX.html` (keep the exact filename)
   - The file is already downloaded, so just copy it there
5. Deploy/push your changes:
   ```
   git add public/googleXXXXXXXX.html
   git commit -m "Add Google Search Console verification file"
   git push origin main
   ```
6. Wait 10 seconds for deployment
7. Return to Google Search Console and click **"Verify"**
8. You should see **"Ownership verified"** ✅

**Alternative:** If you prefer DNS verification:
- Instead of HTML file, click the **"DNS record"** tab
- Google will give you a TXT record
- Add it to your domain's DNS settings at your registrar (GoDaddy, Namecheap, etc.)
- Wait 24–48 hours for DNS to propagate, then verify

### Step 4: Submit Your Sitemap
1. In left menu, click **Sitemaps** (under "Index" section)
2. In the "Add a new sitemap" box, paste: `sitemap.xml`
   - (It auto-prepends your domain, so just the path)
3. Click **Submit**
4. Wait a few seconds – you should see it listed with status **Success** ✅

### Step 5: Request Indexing (Speeds Up Crawling)
This makes Google crawl your posts within 24–48 hours instead of weeks.

1. At the top, click the **URL inspection** search bar
2. Paste this URL: `https://sourceloom.com/blog/how-to-choose-bangladesh-apparel-manufacturer`
3. Press Enter and wait for the report
4. You should see **"URL is not on Google"** (normal for new pages)
5. Click the blue **"Request indexing"** button
6. A popup will confirm it's queued for crawling

**Repeat for 2 more key posts:**
- `https://sourceloom.com/blog/why-source-apparel-bangladesh-not-domestic`
- `https://sourceloom.com/blog/european-apparel-sourcing-compliance-guide`

**Result:** These 3 posts will be in Google's crawl queue within 24 hours ✅

---

## Part 2: Bing Webmaster Tools (10 minutes)

### Step 1: Go to Bing Webmaster Tools
1. Navigate to: https://www.bing.com/webmasters
2. Sign in with your Microsoft account (create one if needed)

### Step 2: Add Your Site
1. Click **"Add a site"** in the top right
2. Paste: `https://sourceloom.com`
3. Click **Add**

### Step 3: Verify Ownership - HTML File Method
1. Bing will ask for verification
2. Click **"Upload an HTML file"** option
3. Download the file provided
4. Add it to your Next.js `public/` folder:
   ```
   public/BingSiteAuth.xml
   ```
5. Push to git:
   ```
   git add public/BingSiteAuth.xml
   git commit -m "Add Bing Webmaster Tools verification file"
   git push origin main
   ```
6. Wait for deployment, then click **"Verify"** in Bing
7. You should see **"Verified"** ✅

### Step 4: Submit Your Sitemap
1. In left menu, click **Sitemaps** (under "Configure my site")
2. Click **"Submit sitemap"**
3. Paste: `https://sourceloom.com/sitemap.xml` (full URL this time)
4. Click **Submit**
5. You should see it listed ✅

### Step 5: Submit Key URLs Directly
1. In left menu, click **Submit URLs** (under "Configure my site")
2. Paste these URLs:
   ```
   https://sourceloom.com/blog
   https://sourceloom.com/blog/how-to-choose-bangladesh-apparel-manufacturer
   https://sourceloom.com/blog/why-source-apparel-bangladesh-not-domestic
   https://sourceloom.com/blog/european-apparel-sourcing-compliance-guide
   ```
3. Click **Submit**
4. Bing will queue them for crawling ✅

---

## Part 3: Monitoring & Verification (Start after 3 days)

### Quick Test: Is Google Indexing?
1. Go to Google
2. Search: `site:sourceloom.com blog`
3. If blog posts appear, Google has indexed them ✅
4. Search specific keywords you're targeting:
   - `Bangladesh apparel manufacturer`
   - `apparel sourcing guide`
   - `how to choose garment factory`
5. If your posts appear in top 20 results, you're on the right track

### Monitor In Google Search Console
1. Go to **Performance** (left menu)
2. You'll see:
   - **Total Clicks:** How many people clicked your link from Google
   - **Total Impressions:** How many times your link showed in results
   - **Average CTR:** Click-through rate %
   - **Average Position:** Average ranking (1–100)

### Monitor In Bing Webmaster Tools
1. Go to **Coverage** (under "Crawl")
2. You'll see your URLs listed and their crawl status

---

## Part 4: Optimization Tips (After 4 weeks)

Once you have 4+ weeks of data in Google Search Console:

1. **Find High-Impression, Low-Click Posts** (CTR < 3%)
   - These posts are ranking but not attracting clicks
   - Fix: Improve the meta title/description to be more compelling

2. **Find High-Click Posts**
   - These are working! Update related posts to link to them
   - Consider creating follow-up content around that topic

3. **Target Specific Keywords**
   - Look at "Queries" section in Performance
   - See which keywords are sending traffic
   - Create more content around high-traffic keywords

---

## Checklist

```
GOOGLE SEARCH CONSOLE:
☐ Step 1: Create/sign into Google Search Console
☐ Step 2: Add your property (https://sourceloom.com)
☐ Step 3: Verify ownership with HTML file
   ☐ Download file
   ☐ Place in public/ folder
   ☐ Commit and push to git
   ☐ Click Verify in GSC
☐ Step 4: Submit sitemap.xml
☐ Step 5: Request indexing for 3 key posts

BING WEBMASTER TOOLS:
☐ Step 1: Go to Bing Webmaster Tools
☐ Step 2: Add your site
☐ Step 3: Verify ownership with HTML file
   ☐ Download file
   ☐ Place in public/ folder
   ☐ Commit and push to git
   ☐ Click Verify in Bing
☐ Step 4: Submit sitemap.xml
☐ Step 5: Submit key URLs

MONITORING (After 3–7 days):
☐ Test: site:sourceloom.com blog (in Google)
☐ Check Google Search Console > Performance
☐ Check Bing Webmaster Tools > Coverage
☐ Track clicks and impressions for 4 weeks

OPTIMIZATION (After 4 weeks):
☐ Review Performance data
☐ Identify high-impression, low-CTR posts → improve titles/descriptions
☐ Create follow-up content for high-traffic posts
```

---

## Quick Reference: Your URLs

**Blog Hub:**
- https://sourceloom.com/blog

**Key Pillar Posts:**
1. https://sourceloom.com/blog/how-to-choose-bangladesh-apparel-manufacturer
2. https://sourceloom.com/blog/why-source-apparel-bangladesh-not-domestic
3. https://sourceloom.com/blog/european-apparel-sourcing-compliance-guide

**All Blog Posts (11 total):**
- /blog/how-to-choose-bangladesh-apparel-manufacturer
- /blog/moq-for-apparel-production
- /blog/apparel-production-capacity-guide
- /blog/apparel-compliance-checklist
- /blog/knit-vs-woven-vs-denim
- /blog/low-moq-factory-sourcing
- /blog/usa-canada-apparel-sourcing
- /blog/why-source-apparel-bangladesh-not-domestic
- /blog/european-apparel-sourcing-compliance-guide
- /blog/apparel-sampling-approval-workflow (if exists)

---

## Support Notes

- **Google takes longer:** 2–4 weeks to show decent rankings (competition dependent)
- **Bing is faster:** Often 1–2 weeks for initial indexing
- **Your advantage:** 11 high-quality blog posts with schema markup = strong foundation
- **Next step after indexing:** Guest posting, backlink outreach to boost rankings

**Questions?** Refer back to the steps above or ask for clarification.
