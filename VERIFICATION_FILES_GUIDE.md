# EXAMPLE VERIFICATION FILES

This shows you what to expect when you download verification files from Google and Bing.

## What Google's HTML File Looks Like

When you download from Google Search Console, you'll get something like:

```html
google-site-verification: google1a2b3c4d5e6f7g8h9i0j.html
```

**File name:** `google1a2b3c4d5e6f7g8h9i0j.html` (your code will be different)

**What to do:**
1. Save this file to: `public/google1a2b3c4d5e6f7g8h9i0j.html`
2. Once you push to git and deploy, it will be served at: `https://sourceloom.com/google1a2b3c4d5e6f7g8h9i0j.html`
3. Google verifies by visiting that URL and confirming the file exists

---

## What Bing's XML File Looks Like

When you download from Bing Webmaster Tools, you'll get:

```xml
<?xml version="1.0"?>
<!DOCTYPE html>
<html>
<head>
<title>Bing Webmaster Tools</title>
</head>
<body>
<h1>Bing Webmaster Tools</h1>
<p>
  <noscript>
    <meta name="msvalidate.01" content="0123456789ABCDEF0123456789ABCDEF" />
  </noscript>
</p>
<script>
  // Bing validation script
</script>
</body>
</html>
```

**File name:** `BingSiteAuth.xml` (usually this exact name)

**What to do:**
1. Save this file to: `public/BingSiteAuth.xml`
2. Once you push to git and deploy, it will be served at: `https://sourceloom.com/BingSiteAuth.xml`
3. Bing verifies by visiting that URL and confirming the file exists

---

## Terminal Commands Reference

```powershell
# Navigate to project
cd c:\Users\Administrator\Documents\Work\Sourceloom\Website\merchandisingWebplatform

# Check if files are in public folder
ls public/

# Should show:
# BingSiteAuth.xml
# google1a2b3c4d5e6f7g8h9i0j.html (with your actual code)

# Add them to git
git add public/BingSiteAuth.xml public/google*.html

# Verify they're staged
git status

# Commit
git commit -m "Add search engine verification files"

# Push to deploy
git push origin main

# Monitor deployment (wait 10-20 seconds after push)
# Then visit the URLs in your browser to confirm they exist:
# https://sourceloom.com/BingSiteAuth.xml
# https://sourceloom.com/google1a2b3c4d5e6f7g8h9i0j.html
```

---

## Quick Verification

After pushing to git, verify the files are live:

**Test Google file:**
```
https://sourceloom.com/google[YOUR-CODE].html
```
In browser, you should see the verification content (usually just one line)

**Test Bing file:**
```
https://sourceloom.com/BingSiteAuth.xml
```
In browser, you should see the XML content

If both load successfully, you're ready to verify in the search console tools.

---

## Troubleshooting

### File not found (404)
- Did you push to git? (`git push origin main`)
- Wait 10 seconds for deployment
- Try refreshing browser (Ctrl+Shift+R)
- Check that filename matches exactly (case-sensitive)

### Verification still failing
- Confirm URL is exactly: `https://sourceloom.com/[filename]`
- Check that file is in `public/` folder, not `src/public/`
- Verify git push succeeded (check terminal for "✓ Sending objects")

### Multiple failed attempts
- Delete the file, download fresh from Google/Bing
- Start over with the new file
- If still failing, use DNS method instead (ask your domain registrar)

---

**You've got this! These are standard files - just place them in the right folder and push to git.**
