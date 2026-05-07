# SEO Setup Quick Actions

Use this file as your actual checklist while setting up Google and Bing indexation.

## ACTION ITEMS - DO THESE IN ORDER

### GOOGLE SEARCH CONSOLE SETUP
**Time: 15 minutes**

- [ ] Open https://search.google.com/search-console
- [ ] Sign in with Google email
- [ ] Select "URL prefix" option
- [ ] Enter: `https://sourceloom.com`
- [ ] Click "Continue"
- [ ] Select "HTML file" verification method
- [ ] **Download the verification file** (e.g., `googleabcd1234.html`)
- [ ] **Create file in your project:**
  ```
  c:\Users\Administrator\Documents\Work\Sourceloom\Website\merchandisingWebplatform\public\googleabcd1234.html
  ```
  (Replace with actual filename Google gives you)
- [ ] Run these commands in terminal:
  ```powershell
  cd c:\Users\Administrator\Documents\Work\Sourceloom\Website\merchandisingWebplatform
  git add public/google*.html
  git commit -m "Add Google Search Console verification"
  git push origin main
  ```
- [ ] Wait 10 seconds for deployment
- [ ] Return to Google Search Console
- [ ] Click "Verify" button
- [ ] Confirm you see "Ownership verified" ✅

### SUBMIT SITEMAP TO GOOGLE
- [ ] Still in Google Search Console, click "Sitemaps" (left menu)
- [ ] In the "Add a new sitemap" field, type: `sitemap.xml`
- [ ] Click "Submit"
- [ ] Confirm Status shows "Success" ✅

### REQUEST INDEXING (3 KEY POSTS)
- [ ] At top of Google Search Console, click URL inspection search box
- [ ] Paste: `https://sourceloom.com/blog/how-to-choose-bangladesh-apparel-manufacturer`
- [ ] Press Enter, wait for report
- [ ] Click blue "Request indexing" button
- [ ] Confirm success popup
- [ ] Repeat for:
  - `https://sourceloom.com/blog/why-source-apparel-bangladesh-not-domestic`
  - `https://sourceloom.com/blog/european-apparel-sourcing-compliance-guide`

---

### BING WEBMASTER TOOLS SETUP
**Time: 10 minutes**

- [ ] Open https://www.bing.com/webmasters
- [ ] Sign in with Microsoft account (create if needed)
- [ ] Click "Add a site" (top right)
- [ ] Enter: `https://sourceloom.com`
- [ ] Click "Add"
- [ ] Select "Upload an HTML file" verification
- [ ] **Download the verification file** (usually `BingSiteAuth.xml`)
- [ ] **Create file in your project:**
  ```
  c:\Users\Administrator\Documents\Work\Sourceloom\Website\merchandisingWebplatform\public\BingSiteAuth.xml
  ```
- [ ] Run these commands in terminal:
  ```powershell
  cd c:\Users\Administrator\Documents\Work\Sourceloom\Website\merchandisingWebplatform
  git add public/BingSiteAuth.xml
  git commit -m "Add Bing Webmaster Tools verification"
  git push origin main
  ```
- [ ] Wait 10 seconds for deployment
- [ ] Return to Bing Webmaster Tools
- [ ] Click "Verify" button
- [ ] Confirm you see "Verified" ✅

### SUBMIT SITEMAP TO BING
- [ ] In Bing Webmaster Tools, click "Sitemaps" (left menu)
- [ ] Click "Submit sitemap"
- [ ] Paste: `https://sourceloom.com/sitemap.xml` (full URL)
- [ ] Click "Submit"
- [ ] Confirm it appears in the list ✅

### SUBMIT KEY URLS TO BING
- [ ] In Bing Webmaster Tools, click "Submit URLs" (left menu)
- [ ] Paste these 4 URLs:
  ```
  https://sourceloom.com/blog
  https://sourceloom.com/blog/how-to-choose-bangladesh-apparel-manufacturer
  https://sourceloom.com/blog/why-source-apparel-bangladesh-not-domestic
  https://sourceloom.com/blog/european-apparel-sourcing-compliance-guide
  ```
- [ ] Click "Submit"
- [ ] Confirm success ✅

---

## TESTING & MONITORING (START AFTER 3 DAYS)

### Quick Google Index Check
- [ ] Go to https://google.com
- [ ] Search: `site:sourceloom.com blog`
- [ ] Do you see blog posts? If yes, Google is indexing ✅

### Monitor in Google Search Console
- [ ] Click "Performance" (left menu)
- [ ] Look for your blog URLs showing clicks/impressions
- [ ] Expected: First data appears after 3–7 days

### Monitor in Bing Webmaster Tools
- [ ] Click "Coverage" (left menu)
- [ ] Should show your URLs and their crawl status

---

## AFTER 4 WEEKS

Once you have 4 weeks of data:

### Check What's Working
- [ ] Open Google Search Console > Performance
- [ ] Look at "Queries" section
- [ ] Which blog posts are getting the most clicks?
- [ ] Which keywords are sending traffic?

### Optimize Low-Performers
- [ ] Find posts with high impressions but low clicks (CTR < 3%)
- [ ] These are ranking but titles/descriptions need work
- [ ] Revise titles and meta descriptions to be more compelling

### Double Down on Winners
- [ ] Create more content around top-performing topics
- [ ] Link high-performing posts to related newer posts
- [ ] Track keywords you're ranking for and expand around them

---

## FILES YOU'LL CREATE

**Google verification file** (exact name will differ):
```
public/google1234abcd5678ef.html
```

**Bing verification file**:
```
public/BingSiteAuth.xml
```

Both files will be in your `public/` folder, so they're always served at:
- `https://sourceloom.com/google1234abcd5678ef.html`
- `https://sourceloom.com/BingSiteAuth.xml`

---

## TERMINAL COMMANDS YOU'LL RUN

```powershell
# After creating verification files:
cd c:\Users\Administrator\Documents\Work\Sourceloom\Website\merchandisingWebplatform

# Add all files
git add public/google*.html public/BingSiteAuth.xml

# Commit
git commit -m "Add search engine verification files"

# Push
git push origin main
```

---

**Status:** You're ready to go! Follow this checklist step-by-step.
Date started: ___________
Date completed: ___________
