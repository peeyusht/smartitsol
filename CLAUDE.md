# Claude Code Implementation Guide

## Project Overview

This is a Next.js 14 website for Smart IT Solutions, implemented using TypeScript and custom CSS. The project was built from an HTML mockup into a production-ready Next.js application.

## Architecture

### File Structure
```
app/
├── page.tsx          # Main homepage component (Client Component)
├── layout.tsx        # Root layout with fonts & metadata
├── home.css          # All custom styles for the homepage
├── globals.css       # Global styles & Tailwind base
└── favicon.ico       # Site favicon
```

### Key Implementation Details

#### Client Components
The main `page.tsx` is marked as a client component (`'use client'`) because it uses:
- React hooks (`useEffect`, `useRef`)
- Browser APIs (DOM manipulation, scroll events)
- Form handling with events

#### CSS Architecture
- **home.css**: Contains all page-specific styles with CSS custom properties
- **globals.css**: Tailwind directives and global resets
- **Approach**: Custom CSS was chosen over Tailwind classes for:
  - Complex animations and transitions
  - Precise gradient controls
  - Glass morphism effects
  - Maintaining the exact design from the HTML mockup

#### React Patterns Used

**Intersection Observer for Animations**
```typescript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)
```

**Scroll Event Handler**
```typescript
const handleScroll = () => {
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)'
  }
}
```

**Form Handling**
```typescript
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // Validation and submission logic
}
```

## Design System

### Color Palette
The design uses a cohesive color system defined in CSS custom properties:

**Primary Colors**
- `--primary-navy`: #0f172a (dark backgrounds, footer)
- `--primary-slate`: #1e293b (secondary dark sections)
- `--primary-cyan`: #0ea5e9 (primary accent, CTAs)

**Accent Colors**
- `--accent-cyan`: #06b6d4 (secondary accents)
- `--highlight-orange`: #f97316 (CTA buttons)
- `--highlight-amber`: #ea580c (button hover states)

**Neutral Colors**
- Full scale from `--neutral-50` to `--neutral-900`
- Used for backgrounds, text, and borders

### Typography
- **Display Font**: Space Grotesk (headings, numbers)
- **Body Font**: Inter (paragraphs, UI)
- **Loaded via**: Google Fonts in `layout.tsx`

### Responsive Design
Media queries at:
- 1024px (tablet to desktop)
- 768px (mobile to tablet)
- 480px (small mobile)

## Component Breakdown

### Header
- Fixed position with backdrop blur
- Logo as inline SVG (easily customizable)
- Navigation with smooth scroll links
- Changes background on scroll

### Hero Section
- Full viewport height
- Gradient background with animated pseudo-element
- Text with gradient clip effect
- CTA button with gradient and shadow

### Services Section
- 3-column grid (responsive to 1 column on mobile)
- Cards with hover effects (translateY, shadow changes)
- Top border animation on hover (scaleX transform)

### About Section
- 4 stat cards in 2x2 grid
- Hover effect on cards
- Large numbers with gradient text

### Why Partner Section
- 6 feature cards
- Icon containers with gradient backgrounds
- Centered text layout

### Contact Section
- Split layout (info + form)
- Form with validation
- Glass morphism effect on form background
- Contact details with icon boxes

### Footer
- 4-column grid (responsive to 1 column)
- Links organized by category
- Copyright notice

## Interactive Features

### Smooth Scrolling
All anchor links use native smooth scrolling via `scroll-behavior: smooth` in CSS, enhanced with JavaScript for compatibility.

### Fade-in Animations
Elements with `.fade-in` class:
1. Start invisible and translated down
2. IntersectionObserver watches for visibility
3. Adds `.visible` class when in viewport
4. CSS transitions handle the animation

### Form Validation
- Client-side validation using HTML5 required attributes
- Custom JavaScript validation in `handleSubmit`
- Simulated submission with loading state

## SEO & Metadata

Located in `app/layout.tsx`:
- Title: Includes key services in format `Service 1 • Service 2 • Service 3`
- Description: Focused on value proposition
- Keywords: Array of relevant terms
- OpenGraph tags for social sharing
- Twitter Card metadata
- Robots directives for indexing

## Development Workflow

### Running Locally
```bash
npm run dev          # Development server on localhost:3000
npm run build        # Production build
npm run start        # Run production build locally
```

### Making Changes

**To update content:**
- Edit text directly in `app/page.tsx`
- Metadata in `app/layout.tsx`

**To update styles:**
- Modify `app/home.css` for component styles
- Use CSS custom properties for consistency

**To add new sections:**
1. Add JSX in `app/page.tsx`
2. Add styles in `app/home.css`
3. Follow existing patterns for animations

## Common Modifications

### Changing Colors
Edit CSS custom properties in `app/home.css`:
```css
:root {
  --primary-cyan: #yourcolor;
}
```

### Replacing Emoji Icons
1. Install an icon library (e.g., `react-icons`)
2. Import icons in `page.tsx`
3. Replace emoji in `.service-icon` and `.feature-icon` divs

### Adding Form Backend
Replace the simulated submission in `handleSubmit` with:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

### Updating Logo
Edit the SVG in the header section of `page.tsx`. The SVG uses:
- Gradients defined in `<defs>`
- Text elements for "Smart IT Solutions"
- Network-themed icon

## Performance Considerations

### What's Optimized
- Static generation (no server-side rendering needed)
- Google Fonts with `display: swap`
- CSS-only animations (GPU-accelerated)
- Minimal JavaScript bundle

### What Could Be Optimized
- Add `next/image` for images when added
- Implement code splitting for larger apps
- Add service worker for offline support
- Lazy load below-fold sections

## Accessibility

### Current Features
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels with `htmlFor` attributes
- Focus states on interactive elements
- Sufficient color contrast ratios

### Recommended Additions
- Skip to main content link
- ARIA labels for icon-only elements
- Keyboard navigation testing
- Screen reader testing
- Focus trap for mobile menu (when implemented)

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Configure:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy

### Environment Variables
None required for current implementation.

For form backend, you might add:
- `SENDGRID_API_KEY`
- `CONTACT_EMAIL`
- etc.

## Troubleshooting

### Build Errors
- Ensure TypeScript types are correct
- Check for unused imports
- Verify all required dependencies are in package.json

### Styling Issues
- Check CSS custom property values
- Verify class names match between JSX and CSS
- Clear `.next` cache and rebuild

### Animation Issues
- Ensure `.fade-in` elements have `visible` class added by observer
- Check browser support for IntersectionObserver
- Verify CSS transitions are not disabled by user preferences

## Future Enhancements

### Quick Wins
- Add real images to services and about sections
- Implement actual form submission
- Add favicon and OG image
- Install ESLint for code quality

### Medium Effort
- Create separate components for reusability
- Add more pages (About, Services detail, Blog)
- Implement mobile menu functionality
- Add testimonials carousel

### Advanced
- CMS integration (Sanity, Contentful)
- Multi-language support
- Dark mode toggle
- Advanced analytics and tracking

## Notes for Claude

When asked to make changes to this project:

1. **For content changes**: Edit `app/page.tsx` directly
2. **For styling changes**: Modify `app/home.css`
3. **For new features**: Follow the existing React patterns
4. **For SEO**: Update `app/layout.tsx`

The codebase favors:
- TypeScript for type safety
- Custom CSS over utility classes (already established)
- Client components only where needed
- Simple, readable code over clever abstractions

Always test changes with `npm run build` to ensure production readiness.
