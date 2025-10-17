# Smart IT Solutions - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Deploy to Vercel
```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Deploy
vercel
```

---

## 📋 Available Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
vercel              # Deploy to preview
vercel --prod       # Deploy to production
```

---

## 🎨 Customize Content

### Update Company Information

1. **Hero Section** - `/components/HeroSection.tsx`
   - Change headline and subtitle
   - Update trust indicators

2. **Services** - `/components/ServicesSection.tsx`
   - Modify service descriptions
   - Update features

3. **Contact Info** - `/components/ContactSection.tsx`
   - Update address, phone, email
   - Change business hours

4. **Footer** - `/components/Footer.tsx`
   - Update social media links
   - Modify certification badges

### Update Design

1. **Colors** - `/tailwind.config.ts`
   ```typescript
   colors: {
     primary: {
       500: '#0099E6', // Change main brand color
     }
   }
   ```

2. **Fonts** - `/app/layout.tsx`
   ```typescript
   const inter = Inter({ ... })
   const spaceGrotesk = Space_Grotesk({ ... })
   ```

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Type Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

---

## 📁 Key Files

- `app/page.tsx` - Homepage
- `components/` - All components
- `app/globals.css` - Styles
- `tailwind.config.ts` - Design tokens
- `next.config.js` - Next.js config

---

## 🎯 What's Included

✅ Responsive navigation with mobile menu
✅ Hero section with gradient background
✅ Services section with 3 cards
✅ About section with stats
✅ Contact form with validation
✅ Footer with newsletter
✅ SEO optimization
✅ Performance optimization
✅ Accessibility features

---

## 📚 Documentation

- **Design System**: See `DESIGN_SYSTEM.md`
- **Components**: See `COMPONENTS.md`
- **Deployment**: See `README-DEPLOYMENT.md`
- **Full Overview**: See `PROJECT_OVERVIEW.md`

---

## 🐛 Common Issues

**Issue**: Styles not loading
- **Solution**: Restart dev server (`Ctrl+C`, then `npm run dev`)

**Issue**: TypeScript errors
- **Solution**: Check `tsconfig.json` and component imports

**Issue**: Build fails
- **Solution**: Run `npm run build` and check error messages

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Update contact information
- [ ] Replace placeholder images
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test performance (Lighthouse)
- [ ] Review SEO meta tags

---

## 💡 Pro Tips

1. **Fast Refresh**: Save files to see instant updates
2. **Mobile Testing**: Use Chrome DevTools device mode
3. **Performance**: Check Network tab for load times
4. **Accessibility**: Use Lighthouse accessibility audit

---

**Need Help?** Check the full documentation in the project files.

**Ready to Deploy?** Run `vercel` and follow the prompts!
