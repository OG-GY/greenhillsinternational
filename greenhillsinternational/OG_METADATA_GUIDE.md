# Open Graph Metadata Setup Guide

## 🎯 Overview
Complete Open Graph (OG) and social media metadata implementation for Green Hills International website. This guide explains what images you need to create and how they're used across social platforms.

---

## 📁 Required Images for `/public/og/` folder

Create these images in your `/public/og/` directory:

### 1. **og-default.png** (REQUIRED - Primary Image)
- **Dimensions**: 1200x630 pixels (16:9 aspect ratio - optimal for most platforms)
- **Purpose**: Default fallback for all pages
- **Used on**: Home page, all pages without specific OG images
- **Recommended Design**:
  - Company logo prominently displayed
  - "Construction & Metal Trading" headline
  - Company name: "Green Hills International"
  - Colors: Deep navy background with luxury gold accents
  - Should convey professionalism and global presence

- **Social Platforms**: Facebook, LinkedIn, Twitter, WhatsApp, Telegram, Pinterest

---

### 2. **og-construction.png**
- **Dimensions**: 1200x630 pixels
- **Purpose**: Construction division branding
- **Used on**: 
  - `/construction` page
  - Construction services detail pages
- **Recommended Design**:
  - Construction site or completed building project
  - "Construction Services" headline
  - Emphasize excellence, safety, quality
  - Colors: Professional with construction imagery

- **Social Platforms**: Facebook, LinkedIn, Twitter, WhatsApp, Telegram

---

### 3. **og-metal.png**
- **Dimensions**: 1200x630 pixels
- **Purpose**: Metal trading division branding
- **Used on**: 
  - `/metal` page
  - Metal trading domains pages (`/metal/[domain]`)
- **Recommended Design**:
  - Industrial metals, stacked materials, warehouse
  - "Metal Trading Solutions" headline
  - Global trade emphasis
  - Colors: Industrial grays with luxury gold accents

- **Social Platforms**: Facebook, LinkedIn, Twitter, WhatsApp, Telegram

---

### 4. **og-contact.jpg**
- **Dimensions**: 1200x630 pixels
- **Purpose**: Contact page branding
- **Used on**: `/contact` page
- **Recommended Design**:
  - Professional office/team environment
  - "Get In Touch" or "Contact Us" headline
  - Call-to-action appeal
  - Colors: Warm and inviting

- **Social Platforms**: Facebook, LinkedIn, Twitter, WhatsApp, Telegram

---

### 5. **og-project.jpg**
- **Dimensions**: 1200x630 pixels
- **Purpose**: Project portfolio fallback image
- **Used on**: 
  - All `/projects/[projectId]` pages (if project.heroImage not available)
  - Project showcase
- **Recommended Design**:
  - Portfolio/showcase aesthetic
  - "Green Hills Projects" or company tagline
  - Modern construction/completed project imagery
  - Colors: Professional and aspirational

- **Social Platforms**: Facebook, LinkedIn, Twitter, WhatsApp, Telegram

---

### 6. **og-service.jpg**
- **Dimensions**: 1200x630 pixels
- **Purpose**: Service detail pages fallback
- **Used on**: 
  - All `/construction/services/[slug]` pages
  - All `/metal/services/[slug]` pages
- **Recommended Design**:
  - Service-oriented imagery
  - "Professional Services" concept
  - Could be hybrid showing both construction and metal trading
  - Colors: Professional and authoritative

- **Social Platforms**: Facebook, LinkedIn, Twitter, WhatsApp, Telegram

---

### 7. **og-linkedin.jpg** (OPTIONAL but recommended)
- **Dimensions**: 1200x627 pixels (LinkedIn's optimal ratio - slightly different)
- **Purpose**: LinkedIn-specific OG image (if using LinkedIn domain tags)
- **Recommended Design**: Similar to og-default.png but adjusted for LinkedIn's square-ish crop
- **Note**: Currently using og-default.png for LinkedIn, but this provides better optimization

---

## 📊 Open Graph Types Explained

### What is Open Graph Type?

The `type` field tells social platforms how to interpret and display your content. Here's what each means:

| Type | Best For | When to Use | Display Behavior |
|------|----------|------------|------------------|
| **website** | General pages, sections | Home, main divisions, contact | Standard preview with title + description + image |
| **business.business** | B2B companies | Construction/Metal main pages | Optimized for LinkedIn/business platforms |
| **article** | Blog posts, news, detailed content | Not currently used (future blog) | Shows author, publish date, modified date |
| **product** | Services, offerings | Could use for service pages | Shows price, availability, ratings |

**Current Implementation**: Using `website` type for all pages (most compatible, works everywhere)

---

## 🌐 Social Media Platform Specifications

### Facebook
- **Image Size**: 1200x630 recommended (1.91:1 ratio)
- **Image Size Range**: 200x200 minimum, 4:3 or 1.91:1 ratios
- **Fields Used**: 
  - `og:title` (up to 95 characters displayed)
  - `og:description` (up to 297 characters displayed)
  - `og:image` (primary)
  - `og:type`
  - `og:url`
  - `og:site_name`
- **Preview Tool**: facebook.com/sharing/debugger/

### LinkedIn
- **Image Size**: 1200x627 recommended (1.91:1 ratio, slightly different from Facebook)
- **Character Limits**:
  - Title: 255 characters
  - Description: 256 characters
- **Fields Used**:
  - `og:title`
  - `og:description`
  - `og:image`
  - `og:url`
  - `linkedin:url` (company profile)
- **Best Practices**: 
  - Use company logo/branding
  - Emphasize value proposition
  - Include company name
- **Preview Tool**: linkedin.com/post-inspector/

### Twitter
- **Image Size**: 1200x675 recommended (16:9 ratio, BUT displayed at different ratios)
- **Card Type**: `summary_large_image` (shows large image)
- **Fields Used**:
  - `twitter:card` ("summary_large_image")
  - `twitter:title`
  - `twitter:description`
  - `twitter:image` (or falls back to og:image)
  - `twitter:site` (company handle)
  - `twitter:creator` (individual handle)
- **Character Limits**:
  - Title: 70 characters recommended
  - Description: 200 characters recommended
- **Note**: Twitter's crop changes based on image aspect ratio. Design for center focus.
- **Preview Tool**: twitter.com/en/resources/doing-more-with-tweets (Cards section)

### WhatsApp
- **Image Size**: 1200x630 recommended
- **Fields Used**:
  - `og:title`
  - `og:description`
  - `og:image`
- **Special Behavior**: Shows preview with title + description + image in chat
- **Note**: Most conservative in display - keep messaging clear

### Telegram
- **Image Size**: 1200x630 recommended
- **Fields Used**:
  - `og:title`
  - `og:description`
  - `og:image`
- **Note**: Similar to WhatsApp, shows full preview

### Pinterest
- **Image Size**: Tall images perform best (up to 1000x1500 or taller)
- **Recommended**: 1200x1500 pixels (4:5 ratio) for max reach
- **Fields Used**:
  - `og:image` (primary source)
  - `og:title` (appears as Pin title)
  - `og:description` (appears as Pin description)
- **Note**: Currently using 1200x630 which is suboptimal for Pinterest, but still works

---

## 💻 Implementation Details (Already Done)

### Layout.tsx (Root Metadata)
```typescript
// Updated with:
- og:type: "website"
- og:locale: "en_AE"
- og:site_name: "Green Hills International"
- og:images array with 1200x630 and 800x420 sizes
- twitter:card: "summary_large_image"
- twitter:site: "@greenhillsintl" (update with actual handle)
- facebook:app_id: "YOUR_FACEBOOK_APP_ID" (needs real ID)
```

### All Page Metadata Includes:
✅ `og:type`: "website"
✅ `og:url`: Full page URL
✅ `og:title`: Page title
✅ `og:description`: SEO-optimized description (110-160 chars)
✅ `og:site_name`: "Green Hills International"
✅ `og:locale`: "en_AE"
✅ `og:images`: Array with 1200x630 and 800x420 sizes
✅ `twitter:card`: "summary_large_image"
✅ `twitter:title`: Optimized for Twitter character limits
✅ `twitter:description`: Twitter-optimized description
✅ `twitter:images`: Array of images
✅ `alternates.canonical`: Page canonical URL

---

## 🔗 URLs Format in Metadata

All pages use fully qualified URLs with `https://greenhillsinternational.com` base:

### Static Pages
- Home: `https://greenhillsinternational.com`
- Construction: `https://greenhillsinternational.com/construction`
- Metal: `https://greenhillsinternational.com/metal`
- Contact: `https://greenhillsinternational.com/contact`

### Dynamic Pages
- Projects: `https://greenhillsinternational.com/projects/[projectId]`
- Construction Services: `https://greenhillsinternational.com/construction/services/[slug]`
- Metal Domains: `https://greenhillsinternational.com/metal/[domain]`
- Metal Services: `https://greenhillsinternational.com/metal/services/[slug]`

---

## ✅ Checklist for Image Creation

### Before You Create Images:
- [ ] Determine your brand colors (currently using deep-navy, luxury-gold, warm-cream)
- [ ] Prepare company logo in high resolution
- [ ] Choose representative imagery for each division
- [ ] Create image templates for consistency

### For Each Image:
- [ ] Dimensions set to specifications above
- [ ] Resolution at least 72 DPI (web standard)
- [ ] File format: JPG (optimized for web)
- [ ] File size: Keep under 500KB for web performance
- [ ] Compress images using TinyJPG or similar
- [ ] Test preview on Facebook, LinkedIn, Twitter debuggers
- [ ] Ensure all text is readable at 1200x630
- [ ] No watermarks or distracting elements

### Placement:
- [ ] Save images to `/public/og/` folder
- [ ] All files must be `.jpg` (not .png - larger file size)
- [ ] Name exactly as specified in this guide

---

## 🚀 Testing Tools

**Test your metadata on these platforms:**

1. **Facebook**: [facebook.com/sharing/debugger](https://facebook.com/sharing/debugger/)
   - Paste your URL
   - Check if images load correctly
   - Look for title/description display

2. **LinkedIn**: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/)
   - Paste your URL
   - See how it appears in LinkedIn shares

3. **Twitter**: [twitter.com/resources/cards](https://developer.twitter.com/en/resources/doing-more-with-tweets)
   - Use Cards Validator
   - Test summary_large_image preview

4. **WhatsApp Web**: Simply share link in WhatsApp desktop
   - Should show preview with image + title + description

5. **Telegram**: Create a test bot or share in test chat
   - Preview should display correctly

---

## 🎨 Design Recommendations

### Color Psychology for Each Image:
- **og-default.png**: Deep Navy (trust, professionalism) + Luxury Gold (premium, quality)
- **og-construction.png**: Professional grays/blues + safety orange accents + construction imagery
- **og-metal.png**: Industrial grays + stainless/metallic elements + luxury gold
- **og-contact.jpg**: Warm cream (approachable) + deep navy (professional) + call-to-action orange/gold

### Typography:
- Use clean, sans-serif fonts for web display
- Ensure text is readable even at 200x200 pixels (minimum preview size)
- Hierarchy: Company Name > Headline > Subtext

### Image Best Practices:
- Center important elements (platforms crop from edges)
- Use consistent branding across all images
- Include company name/logo on most images
- Avoid dense text - let images speak
- Use high-quality photography/graphics
- Optimize for mobile viewing (center focal point)

---

## 🔄 Future Enhancements

### Consider Adding:
1. **Article Schema**: When/if adding blog section
2. **Product Schema**: For individual service detail pages
3. **LocalBusiness Schema**: For B2B SEO boost
4. **Organization Schema**: At root level for rich snippets
5. **FAQ Schema**: For common service questions
6. **BreadcrumbList Schema**: For improved navigation in SERPs

### LinkedIn-Specific:
- [ ] Add `linkedin:url` to company profile (set in layout.tsx)
- [ ] Add `facebook:app_id` if running Facebook Ads (set in layout.tsx)

---

## 📱 Image Aspect Ratios Reference

```
Facebook/LinkedIn/WhatsApp/Telegram: 1200x630 (1.91:1)
Twitter Cards: 1200x675 (16:9)
Pinterest: 1200x1500 (4:5) - tall format recommended
Instagram: 1080x1080 (1:1 - square)
LinkedIn Articles: 1200x627 (slightly different)

Current Setup: 1200x630 works well for most platforms
```

---

## 📝 Next Steps

1. **Create 6 images** in `/public/og/`:
   - og-default.png
   - og-construction.png
   - og-metal.png
   - og-contact.jpg
   - og-project.jpg
   - og-service.jpg

2. **Update layout.tsx** with:
   - Correct Twitter handle: `@your_actual_handle`
   - Facebook App ID: `YOUR_FACEBOOK_APP_ID` (if using Meta ads)

3. **Test all URLs** on platform debuggers (Facebook, LinkedIn, Twitter)

4. **Monitor Performance**:
   - Track social shares via Google Analytics
   - Monitor click-through rate from social platforms
   - Adjust image messaging based on performance

---

## 🎯 Success Metrics

After implementation, you should see:
- ✅ Rich previews when sharing on Facebook/LinkedIn/Twitter
- ✅ Proper image display (not broken/missing)
- ✅ Correct title and description in all previews
- ✅ Consistent branding across all social platforms
- ✅ Improved click-through rate from social shares
- ✅ Better engagement metrics on social platforms

