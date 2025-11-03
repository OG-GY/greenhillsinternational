# Project Images Guide

## 📁 Where to Add Your Project Images

Create this folder structure in your `app/assets` directory:

```
app/
  assets/
    projects/          ← Create this folder
      luxury-tower-exterior.jpg
      luxury-tower-interior.jpg
      corporate-hq-exterior.jpg
      corporate-hq-interior.jpg
      penthouse-exterior.jpg
      penthouse-interior.jpg
      mixed-use-exterior.jpg
      mixed-use-interior.jpg
```

## 🖼️ Required Images

### Luxury Residential Tower
- `luxury-tower-exterior.jpg` - Exterior/facade shot
- `luxury-tower-interior.jpg` - Interior/lobby shot

### Corporate Headquarters
- `corporate-hq-exterior.jpg` - Building exterior
- `corporate-hq-interior.jpg` - Office interior

### Premium Penthouse
- `penthouse-exterior.jpg` - Terrace/exterior view
- `penthouse-interior.jpg` - Living room/interior

### Mixed-Use Development
- `mixed-use-exterior.jpg` - Building exterior
- `mixed-use-interior.jpg` - Retail/interior space

## 🔄 After Adding Images

Once you add the real images to `app/assets/projects/`, update `app/lib/projectsData.ts`:

**Change from:**
```typescript
import luxuryTowerExterior from '@/app/assets/hero-1.jpg';
```

**Change to:**
```typescript
import luxuryTowerExterior from '@/app/assets/projects/luxury-tower-exterior.jpg';
```

Update all 8 image imports in the same way.

## 📏 Image Recommendations

- **Format:** JPG or WebP
- **Hero images:** Min 1920x1080px (landscape)
- **Interior images:** Min 1200x800px
- **File size:** Keep under 500KB for optimal performance
- **Aspect ratio:** 16:9 works best

## 🚀 Current Status

✅ Using placeholder images from `app/assets/`
- Projects are fully functional
- All 4 projects are accessible at:
  - `/projects/luxury-tower`
  - `/projects/corporate-hq`
  - `/projects/premium-penthouse`
  - `/projects/mixed-use`

Replace images at your convenience - the site works perfectly with placeholders!
