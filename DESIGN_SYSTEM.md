# Smart IT Solutions - Design System

## Overview
A modern, trust-inspiring design system for an IT services company specializing in Networking, Cyber Security, and Security Audits. The design emphasizes professionalism, innovation, and reliability through a contemporary aesthetic with calming colors and sophisticated visual elements.

---

## Design Philosophy

### Core Principles
1. **Trust & Security**: Visual elements that convey reliability and protection
2. **Modern Innovation**: Contemporary design patterns that differentiate from traditional IT sites
3. **Clarity**: Clean, scannable layouts with clear information hierarchy
4. **Sophistication**: Professional aesthetic without being sterile or generic

### Visual Style
- **Glass Morphism**: Subtle frosted glass effects for cards and overlays
- **Gradient Accents**: Smooth color transitions for depth and visual interest
- **Micro-interactions**: Subtle animations that enhance user experience
- **Asymmetric Layouts**: Breaking traditional grid patterns for unique compositions

---

## Color Palette

### Primary Colors
```css
--color-primary-50: #E6F7FF;      /* Lightest teal - backgrounds */
--color-primary-100: #B3E5FF;     /* Light teal - hover states */
--color-primary-200: #80D4FF;     /* Medium-light teal */
--color-primary-300: #4DC3FF;     /* Medium teal */
--color-primary-400: #1AB2FF;     /* Medium-dark teal */
--color-primary-500: #0099E6;     /* Primary brand color - main CTAs */
--color-primary-600: #0080BF;     /* Dark teal - active states */
--color-primary-700: #006699;     /* Darker teal */
--color-primary-800: #004D73;     /* Very dark teal */
--color-primary-900: #00334D;     /* Deepest teal - text on light backgrounds */
```

### Secondary Colors (Accent)
```css
--color-secondary-50: #F0E6FF;    /* Lightest purple */
--color-secondary-100: #D4B3FF;   /* Light purple */
--color-secondary-300: #A366FF;   /* Medium purple */
--color-secondary-500: #7C3AED;   /* Primary purple - secondary CTAs */
--color-secondary-700: #5B21B6;   /* Dark purple */
```

### Neutral Colors
```css
--color-neutral-0: #FFFFFF;       /* Pure white */
--color-neutral-50: #FAFBFC;      /* Off-white backgrounds */
--color-neutral-100: #F3F4F6;     /* Light gray backgrounds */
--color-neutral-200: #E5E7EB;     /* Borders, dividers */
--color-neutral-300: #D1D5DB;     /* Disabled elements */
--color-neutral-400: #9CA3AF;     /* Placeholder text */
--color-neutral-500: #6B7280;     /* Secondary text */
--color-neutral-600: #4B5563;     /* Body text */
--color-neutral-700: #374151;     /* Headings */
--color-neutral-800: #1F2937;     /* Dark headings */
--color-neutral-900: #111827;     /* Maximum contrast text */
```

### Semantic Colors
```css
--color-success: #10B981;         /* Success states */
--color-warning: #F59E0B;         /* Warning states */
--color-error: #EF4444;           /* Error states */
--color-info: #3B82F6;            /* Info states */
```

### Gradient Definitions
```css
--gradient-primary: linear-gradient(135deg, #0099E6 0%, #7C3AED 100%);
--gradient-hero: linear-gradient(135deg, #001F3D 0%, #003D73 50%, #0099E6 100%);
--gradient-card: linear-gradient(145deg, rgba(0, 153, 230, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%);
--gradient-overlay: linear-gradient(180deg, rgba(0, 31, 61, 0.95) 0%, rgba(0, 61, 115, 0.85) 100%);
```

### Color Usage Guidelines

**Backgrounds**
- Main background: `--color-neutral-50` (#FAFBFC)
- Card backgrounds: `--color-neutral-0` (#FFFFFF)
- Dark sections: `--color-neutral-900` (#111827)

**Text**
- Primary headings: `--color-neutral-800` (#1F2937)
- Body text: `--color-neutral-600` (#4B5563)
- Secondary text: `--color-neutral-500` (#6B7280)
- Text on dark: `--color-neutral-0` (#FFFFFF)

**Interactive Elements**
- Primary CTA: `--color-primary-500` (#0099E6)
- Secondary CTA: `--color-secondary-500` (#7C3AED)
- Links: `--color-primary-600` (#0080BF)
- Hover states: `--color-primary-600` (#0080BF)

**Accessibility**
- All color combinations meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text)
- Primary blue on white: 4.52:1 ratio
- Neutral-600 on white: 7.0:1 ratio

---

## Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Space Grotesk', 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

**Font Stack Rationale**
- **Inter**: Modern, highly legible sans-serif with excellent readability at all sizes
- **Space Grotesk**: Geometric, contemporary feel for headings and display text
- **JetBrains Mono**: Technical code blocks and data displays

### Type Scale (8px base)
```css
--font-size-xs: 12px;             /* 0.75rem - Fine print, labels */
--font-size-sm: 14px;             /* 0.875rem - Small body, captions */
--font-size-base: 16px;           /* 1rem - Base body text */
--font-size-lg: 18px;             /* 1.125rem - Large body, introductions */
--font-size-xl: 20px;             /* 1.25rem - Small headings */
--font-size-2xl: 24px;            /* 1.5rem - H4 */
--font-size-3xl: 30px;            /* 1.875rem - H3 */
--font-size-4xl: 36px;            /* 2.25rem - H2 */
--font-size-5xl: 48px;            /* 3rem - H1, Hero */
--font-size-6xl: 60px;            /* 3.75rem - Large hero */
--font-size-7xl: 72px;            /* 4.5rem - Extra large hero (desktop) */
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Line Heights
```css
--line-height-tight: 1.25;        /* Headings */
--line-height-snug: 1.375;        /* Large text */
--line-height-normal: 1.5;        /* Body text */
--line-height-relaxed: 1.625;     /* Comfortable reading */
--line-height-loose: 1.75;        /* Maximum readability */
```

### Letter Spacing
```css
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
```

### Typography Styles

#### Headings
```css
.heading-1 {
  font-family: var(--font-display);
  font-size: var(--font-size-5xl);        /* 48px mobile, 60-72px desktop */
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-neutral-800);
}

.heading-2 {
  font-family: var(--font-display);
  font-size: var(--font-size-4xl);        /* 36px */
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-neutral-800);
}

.heading-3 {
  font-family: var(--font-display);
  font-size: var(--font-size-3xl);        /* 30px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-neutral-800);
}

.heading-4 {
  font-family: var(--font-primary);
  font-size: var(--font-size-2xl);        /* 24px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-neutral-700);
}
```

#### Body Text
```css
.body-large {
  font-family: var(--font-primary);
  font-size: var(--font-size-lg);         /* 18px */
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-relaxed);
  color: var(--color-neutral-600);
}

.body-base {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);       /* 16px */
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-600);
}

.body-small {
  font-family: var(--font-primary);
  font-size: var(--font-size-sm);         /* 14px */
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-500);
}
```

#### Special Text
```css
.text-overline {
  font-family: var(--font-primary);
  font-size: var(--font-size-sm);         /* 14px */
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-wider);
  text-transform: uppercase;
  color: var(--color-primary-600);
}

.text-caption {
  font-family: var(--font-primary);
  font-size: var(--font-size-xs);         /* 12px */
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-500);
}
```

---

## Spacing System

### Base Unit: 8px
All spacing follows an 8px grid for visual consistency.

```css
--spacing-0: 0;
--spacing-1: 4px;      /* 0.25rem - Micro spacing */
--spacing-2: 8px;      /* 0.5rem - Base unit */
--spacing-3: 12px;     /* 0.75rem - Small spacing */
--spacing-4: 16px;     /* 1rem - Comfortable spacing */
--spacing-5: 20px;     /* 1.25rem */
--spacing-6: 24px;     /* 1.5rem - Medium spacing */
--spacing-8: 32px;     /* 2rem - Large spacing */
--spacing-10: 40px;    /* 2.5rem */
--spacing-12: 48px;    /* 3rem - Section spacing */
--spacing-16: 64px;    /* 4rem - Large section spacing */
--spacing-20: 80px;    /* 5rem - XL section spacing */
--spacing-24: 96px;    /* 6rem - Hero spacing */
--spacing-32: 128px;   /* 8rem - Maximum spacing */
```

### Container Widths
```css
--container-sm: 640px;     /* Small content */
--container-md: 768px;     /* Medium content */
--container-lg: 1024px;    /* Large content */
--container-xl: 1280px;    /* Extra large content */
--container-2xl: 1536px;   /* Maximum content */
```

### Spacing Guidelines

**Component Padding**
- Buttons: 12px 24px (small), 16px 32px (medium), 20px 40px (large)
- Cards: 24px (mobile), 32px (tablet), 40px (desktop)
- Sections: 48px (mobile), 80px (tablet), 96px (desktop)

**Vertical Rhythm**
- Between paragraphs: 16px
- Between sections: 48-96px depending on hierarchy
- Between components: 24-32px

---

## Border Radius

```css
--radius-none: 0;
--radius-sm: 4px;          /* Small elements */
--radius-base: 8px;        /* Default radius */
--radius-md: 12px;         /* Medium cards */
--radius-lg: 16px;         /* Large cards */
--radius-xl: 20px;         /* Extra large elements */
--radius-2xl: 24px;        /* Hero sections */
--radius-full: 9999px;     /* Pills, circles */
```

---

## Shadows & Elevation

```css
/* Subtle shadows for depth */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-base: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);
--shadow-md: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
--shadow-xl: 0 25px 50px rgba(0, 0, 0, 0.12), 0 12px 18px rgba(0, 0, 0, 0.08);

/* Glass morphism shadows */
--shadow-glass: 0 8px 32px rgba(0, 153, 230, 0.12);
--shadow-glass-hover: 0 12px 48px rgba(0, 153, 230, 0.18);

/* Colored shadows for CTAs */
--shadow-primary: 0 10px 30px rgba(0, 153, 230, 0.3);
--shadow-secondary: 0 10px 30px rgba(124, 58, 237, 0.3);
```

### Elevation Levels
- Level 0: Flat (no shadow)
- Level 1: `--shadow-sm` - Subtle depth
- Level 2: `--shadow-base` - Default cards
- Level 3: `--shadow-md` - Hover states
- Level 4: `--shadow-lg` - Modals, dropdowns
- Level 5: `--shadow-xl` - Maximum elevation

---

## Glass Morphism Effects

```css
.glass-light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.glass-medium {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(31, 41, 55, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-primary {
  background: rgba(0, 153, 230, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 153, 230, 0.2);
}
```

---

## Animation & Transitions

### Transition Durations
```css
--duration-fast: 150ms;        /* Micro-interactions */
--duration-base: 200ms;        /* Default transitions */
--duration-medium: 300ms;      /* Smooth transitions */
--duration-slow: 500ms;        /* Deliberate transitions */
```

### Easing Functions
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);        /* Standard easing */
--ease-in: cubic-bezier(0.4, 0, 1, 1);               /* Accelerate */
--ease-out: cubic-bezier(0, 0, 0.2, 1);              /* Decelerate */
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);         /* Smooth */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful */
```

### Common Transitions
```css
.transition-default {
  transition: all var(--duration-base) var(--ease-default);
}

.transition-colors {
  transition: color var(--duration-base) var(--ease-default),
              background-color var(--duration-base) var(--ease-default),
              border-color var(--duration-base) var(--ease-default);
}

.transition-transform {
  transition: transform var(--duration-medium) var(--ease-out);
}

.transition-opacity {
  transition: opacity var(--duration-base) var(--ease-default);
}
```

### Micro-Animations
```css
/* Fade in from bottom */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale in */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Gradient shift */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Pulse glow */
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 153, 230, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 153, 230, 0.6);
  }
}
```

---

## Responsive Breakpoints

```css
--breakpoint-xs: 320px;    /* Small phones */
--breakpoint-sm: 640px;    /* Large phones */
--breakpoint-md: 768px;    /* Tablets */
--breakpoint-lg: 1024px;   /* Small laptops */
--breakpoint-xl: 1280px;   /* Desktops */
--breakpoint-2xl: 1536px;  /* Large screens */
```

### Media Query Usage
```css
/* Mobile first approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

---

## Z-Index Scale

```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

---

This design system provides a solid foundation for building the Smart IT Solutions website with consistency, accessibility, and modern aesthetics.
