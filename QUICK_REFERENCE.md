# Smart IT Solutions - Quick Reference Cheat Sheet

## At-a-Glance Design Specs

### Colors (Most Used)

```css
/* Copy & Paste Ready */
--primary: #0099E6;           /* Main brand color - buttons, links */
--primary-hover: #0080BF;     /* Hover states */
--secondary: #7C3AED;         /* Accent color - highlights */
--background: #FAFBFC;        /* Page background */
--card: #FFFFFF;              /* Card backgrounds */
--text: #4B5563;              /* Body text */
--heading: #1F2937;           /* Headings */
--dark-bg: #111827;           /* Footer, dark sections */
--gradient: linear-gradient(135deg, #0099E6 0%, #7C3AED 100%);
```

### Typography (Quick Copy)

```css
/* Headings */
font-family: 'Space Grotesk', sans-serif;
font-weight: 700;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400;

/* Sizes */
Hero: 48-72px
H2: 36-48px
H3: 30px
Body: 16px
Small: 14px
```

### Spacing (8px Grid)

```
4px   8px   12px   16px   24px   32px   48px   64px   96px
xs    sm    3      md     6      8      12     16     24
```

### Common Patterns

```css
/* Glass Card */
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 16px;

/* Primary Button */
background: linear-gradient(135deg, #0099E6, #7C3AED);
color: white;
padding: 16px 32px;
border-radius: 8px;
font-weight: 600;

/* Hover Effect */
transform: translateY(-2px);
box-shadow: 0 10px 30px rgba(0, 153, 230, 0.3);
```

---

## Component Quick Reference

### Header
- Height: 80px
- Fixed position
- Glass effect on scroll
- Logo left, nav center, CTA right

### Hero
- Full viewport height
- Dark gradient background (#001F3D → #0099E6)
- 2-column layout (content | visual)
- White text

### Services
- Light background (#FAFBFC)
- 3-column grid
- Card hover: lift 8px, shadow increase
- Icons: 64x64px in gradient containers

### About
- White background
- 2-column: 45% image | 55% content
- Stats card overlays image

### Contact
- Dark gradient background
- 2-column: 400px info | flex form
- White/glass styling

### Footer
- Dark background (#111827)
- 4-column: 2fr | 1fr | 1fr | 1.5fr
- White/gray text

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 640px)  { /* sm - Large phones */ }
@media (min-width: 768px)  { /* md - Tablets */ }
@media (min-width: 1024px) { /* lg - Laptops */ }
@media (min-width: 1280px) { /* xl - Desktops */ }
```

**Common Adjustments:**
- Mobile (< 768px): Single column, reduce padding
- Tablet (768-1023px): 2 columns
- Desktop (1024px+): Full 3-column layout

---

## Button Classes (Tailwind)

```jsx
// Primary
className="btn btn-primary btn-md"

// Secondary (Outline)
className="btn btn-secondary btn-md"

// Ghost (Text)
className="btn btn-ghost btn-md"

// Sizes
btn-sm   // Small
btn-md   // Medium (default)
btn-lg   // Large
```

---

## Common Animations

```css
/* Fade In Up (on scroll) */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Card Hover */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```

---

## Icon Requirements

**Service Icons:**
- Size: 32px (in 64x64px container)
- Style: Line icons, 2px stroke
- Format: SVG
- Color: White (on gradient background)

**UI Icons:**
- Size: 24px (links), 16px (small)
- Style: Outline
- Format: SVG
- Color: Inherit from parent

**Recommended:** Heroicons, Lucide Icons, Ionicons

---

## Image Specs

### Hero Image
- Size: 1920x1080px
- Format: WebP (primary), JPG (fallback)
- Max file size: 200KB
- Subject: Tech/security themed

### Service Icons
- Size: 64x64px container
- Format: SVG or PNG @2x
- Style: Gradient filled

### About Image
- Size: 800x1000px
- Format: WebP, JPG
- Max file size: 150KB

### Favicon
- Sizes: 16, 32, 48, 180px
- Format: ICO, PNG

---

## Form Validation

```jsx
// States
- Default: border gray
- Focus: border blue, glow
- Error: border red, error message
- Success: green checkmark

// Required fields
<span className="text-red-500">*</span>

// Error message
{error && <p className="text-sm text-red-500 mt-1">{error}</p>}
```

---

## Accessibility Checklist

- [ ] Color contrast ≥ 4.5:1 for text
- [ ] All images have alt text
- [ ] Form labels properly associated
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels on icon buttons
- [ ] Semantic HTML (header, nav, main, footer)
- [ ] Skip to main content link

---

## Performance Targets

```
Lighthouse Scores (Target):
Performance:     90+
Accessibility:   95+
Best Practices:  90+
SEO:             95+

Core Web Vitals:
LCP (Largest Contentful Paint):  < 2.5s
FID (First Input Delay):         < 100ms
CLS (Cumulative Layout Shift):   < 0.1
```

---

## SEO Essentials

```html
<!-- Title (60 chars max) -->
<title>Smart IT Solutions | Cybersecurity & IT Services</title>

<!-- Description (160 chars max) -->
<meta name="description" content="Expert IT security services including network infrastructure, cybersecurity solutions, and security audits. Protect your business with certified professionals." />

<!-- Keywords -->
<meta name="keywords" content="cybersecurity, network security, IT services, security audits" />

<!-- Open Graph -->
<meta property="og:title" content="Smart IT Solutions" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:url" content="https://smartitsolutions.com" />
```

---

## Deployment Commands

```bash
# Local Development
npm run dev                 # Start dev server (port 3000)
npm run build              # Build for production
npm run start              # Start production server

# Vercel Deployment
vercel                     # Deploy to preview
vercel --prod              # Deploy to production

# Check Build
npm run build && npm run start  # Test production build locally
```

---

## Common Tailwind Classes

```css
/* Layout */
max-w-screen-xl mx-auto     /* Container */
grid grid-cols-3 gap-8      /* 3-col grid */
flex items-center           /* Flex center */

/* Spacing */
p-8                         /* Padding 32px */
py-24 px-8                  /* Section padding */
mb-16                       /* Margin bottom 64px */

/* Typography */
text-4xl font-bold          /* Large heading */
text-base text-neutral-600  /* Body text */
font-display                /* Display font */

/* Colors */
bg-neutral-50               /* Light background */
text-primary-600            /* Primary text */
border-neutral-200          /* Border color */

/* Effects */
rounded-lg                  /* Border radius 16px */
shadow-lg                   /* Large shadow */
hover:shadow-xl             /* Hover shadow */
transition-all duration-300 /* Smooth transition */
```

---

## File Organization

```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Homepage
├── globals.css             # Global styles
└── favicon.ico             # Favicon

components/
├── Header.tsx              # Navigation
├── HeroSection.tsx         # Hero
├── ServicesSection.tsx     # Services
├── AboutSection.tsx        # About
├── ContactSection.tsx      # Contact
├── ContactForm.tsx         # Form
└── Footer.tsx              # Footer

public/
├── images/                 # Optimized images
└── icons/                  # SVG icons
```

---

## Git Workflow

```bash
# Initial Setup
git init
git add .
git commit -m "Initial commit: Smart IT Solutions design system"

# Connect to GitHub
git remote add origin <your-repo-url>
git push -u origin main

# Regular Updates
git add .
git commit -m "Update: [description]"
git push
```

---

## Contact Form API (Example)

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();

  // Validate
  if (!data.name || !data.email || !data.message) {
    return Response.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Send email (using SendGrid, Resend, etc.)
  // await sendEmail(data);

  return Response.json({ success: true });
}
```

---

## Environment Variables

```bash
# .env.local (DO NOT COMMIT)
NEXT_PUBLIC_SITE_URL=https://smartitsolutions.com
SENDGRID_API_KEY=your_key_here
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Access in code
process.env.NEXT_PUBLIC_SITE_URL
```

---

## Common Issues & Solutions

**Issue:** Images not loading
**Solution:** Check file paths, use `/images/` for public folder

**Issue:** Tailwind classes not working
**Solution:** Check `tailwind.config.js` content paths

**Issue:** Build fails
**Solution:** Run `npm install`, check for TypeScript errors

**Issue:** Slow page load
**Solution:** Optimize images to WebP, lazy load below fold

**Issue:** Form not submitting
**Solution:** Check API route, console.log form data

---

## Quick Links

- **Tailwind Docs**: https://tailwindcss.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **React Icons**: https://react-icons.github.io/react-icons
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Google Fonts**: https://fonts.google.com
- **Unsplash (Images)**: https://unsplash.com
- **WebP Converter**: https://squoosh.app

---

## Need Help?

**Design Questions**: See DESIGN_SYSTEM.md
**Components**: See COMPONENTS.md
**Layout**: See PAGE_LAYOUTS.md
**Code**: See IMPLEMENTATION_GUIDE.md
**Content**: See CONTENT_COPY.md
**Deployment**: See ASSETS_AND_DEPLOYMENT.md

---

## Print This Page

Use this as a physical reference while coding. All values are production-ready and can be copied directly into your code.

---

**Last Updated**: 2024
**Version**: 1.0
**Status**: Production Ready
