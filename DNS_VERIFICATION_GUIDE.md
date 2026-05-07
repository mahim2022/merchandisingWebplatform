# Google Search Console - DNS Verification (Alternative Method)

If you're seeing "URL not in property" error, this DNS method is more reliable.

## When to Use This
- HTML file verification isn't working
- You want faster verification (DNS propagates in 2-24 hours)
- You have access to your domain registrar (GoDaddy, Namecheap, Route53, etc.)

## Step-by-Step DNS Verification

### Step 1: Start Fresh in Google Search Console
1. Open: https://search.google.com/search-console
2. Click the **property dropdown** (top left)
3. Click **"Create property"** or **"Switch property"**
4. Choose the **"Domain"** option (not URL prefix)
5. Enter: `sourceloom.com` (without https://)
6. Click **Continue**

### Step 2: Get Your DNS Record from Google
Google will show you a TXT record that looks like:
```
Name: _acm-challenge.sourceloom.com
Value: (some long code like) google-site-verification=abcd1234efgh5678ijkl9012mnop
```

**Copy both the Name and Value** - you'll need these in 30 seconds.

### Step 3: Add to Your Domain's DNS Settings

Where is your domain registered? Find your registrar below:

#### **If with GoDaddy:**
1. Log in to GoDaddy.com
2. Go to **My Products** → **Domains**
3. Click your domain name
4. Click **DNS** (or **Manage DNS**)
5. Click **Add Record**
6. Select Type: **TXT**
7. Name: `_acm-challenge` (paste from Google)
8. Value: (paste the long code from Google)
9. Click **Save**

#### **If with Namecheap:**
1. Log in to Namecheap.com
2. Go to **Manage Domains**
3. Click your domain
4. Click **Advanced DNS** tab
5. Click **Add New Record**
6. Type: **TXT Record**
7. Host: `_acm-challenge`
8. Value: (paste the long code from Google)
9. Click **Save**

#### **If with Route53 (AWS):**
1. Log in to AWS Console
2. Go to **Route 53**
3. Click **Hosted zones**
4. Click your domain
5. Click **Create record**
6. Name: `_acm-challenge.sourceloom.com`
7. Type: **TXT**
8. Value: (paste the long code from Google)
9. Click **Create records**

#### **If with another registrar:**
1. Log in to your registrar
2. Find **DNS settings** or **DNS management**
3. Look for **Add Record** or **Add TXT Record**
4. Enter:
   - Host/Name: `_acm-challenge`
   - Type: **TXT**
   - Value: (paste Google's code)
5. Save

### Step 4: Return to Google Search Console
1. Go back to Google Search Console (the window still open)
2. You should see the DNS verification screen
3. After adding the DNS record (30+ seconds), click **Verify**
4. **Wait 2-5 minutes** - Google checks your DNS
5. You should see **"Ownership verified"** ✅

### Step 5: If DNS Verification Fails

**Wait longer:** DNS can take up to 24 hours to propagate
- Go back later and try again
- In the meantime, continue with sitemap submission

**Check your DNS record:**
1. In your terminal, run:
   ```powershell
   nslookup _acm-challenge.sourceloom.com
   ```
2. You should see your TXT record in the output
3. If it shows, DNS is correct - wait for Google to verify

---

## Once Verified ✅

Same next steps as before:

1. **Submit sitemap:**
   - Click **Sitemaps** (left menu)
   - Paste: `sitemap.xml`
   - Click Submit

2. **Request indexing for key posts:**
   - Use URL Inspection for these 3:
   ```
   https://sourceloom.com/blog/how-to-choose-bangladesh-apparel-manufacturer
   https://sourceloom.com/blog/why-source-apparel-bangladesh-not-domestic
   https://sourceloom.com/blog/european-apparel-sourcing-compliance-guide
   ```

---

## Troubleshooting

**"Can't find DNS settings"**
- Email/call your domain registrar support
- Say: "I need to add a TXT record to my domain's DNS"
- They'll help you within minutes

**"Verification still failing after 24 hours"**
- Try the HTML file method instead
- Or contact Google Search Console support (there's a help icon)

**"DNS shows but verification fails"**
- Wait another 12 hours (DNS propagation can be slow)
- Try again later

---

## Quick Reference: Your DNS Record

**Domain:** `sourceloom.com`

**Record Type:** TXT

**Record Name:** `_acm-challenge` (or `_acm-challenge.sourceloom.com` depending on registrar)

**Record Value:** [Copy from Google Search Console - it's the long code]

---

**This method is more reliable than HTML files. Use DNS if the HTML method didn't work.**
