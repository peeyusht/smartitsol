# Smart IT Solutions - Component Library

## Table of Contents
1. [Button Components](#button-components)
2. [Navigation Header](#navigation-header)
3. [Hero Section](#hero-section)
4. [Service Cards](#service-cards)
5. [About Section](#about-section)
6. [Contact Section](#contact-section)
7. [Footer](#footer)
8. [Icon Components](#icon-components)

---

## Button Components

### Primary Button

**Visual Specifications**
- Background: `--gradient-primary` with hover shift
- Text color: `--color-neutral-0` (white)
- Border radius: `--radius-base` (8px)
- Shadow: `--shadow-primary` on hover
- Font: `--font-primary`, `--font-weight-semibold`

**Sizes**
```css
/* Small */
.btn-primary-sm {
  padding: 12px 24px;
  font-size: 14px;
  height: 40px;
  min-width: 120px;
}

/* Medium (Default) */
.btn-primary-md {
  padding: 16px 32px;
  font-size: 16px;
  height: 52px;
  min-width: 160px;
}

/* Large */
.btn-primary-lg {
  padding: 20px 40px;
  font-size: 18px;
  height: 60px;
  min-width: 200px;
}
```

**States**
```css
.btn-primary {
  background: var(--gradient-primary);
  background-size: 200% 200%;
  color: var(--color-neutral-0);
  border: none;
  border-radius: var(--radius-base);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--duration-medium) var(--ease-out);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
  background-position: 100% 50%;
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 5px 15px rgba(0, 153, 230, 0.2);
}

.btn-primary:focus {
  outline: 3px solid rgba(0, 153, 230, 0.3);
  outline-offset: 2px;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Loading state */
.btn-primary.loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-left: 8px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Secondary Button (Outline)

```css
.btn-secondary {
  background: transparent;
  color: var(--color-primary-600);
  border: 2px solid var(--color-primary-500);
  border-radius: var(--radius-base);
  padding: 14px 30px; /* Adjusted for border */
  font-weight: var(--font-weight-semibold);
  transition: all var(--duration-base) var(--ease-default);
}

.btn-secondary:hover {
  background: var(--color-primary-500);
  color: var(--color-neutral-0);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary:active {
  transform: translateY(0);
}
```

### Ghost Button (Text Only)

```css
.btn-ghost {
  background: transparent;
  color: var(--color-primary-600);
  border: none;
  padding: 12px 24px;
  font-weight: var(--font-weight-semibold);
  position: relative;
  transition: color var(--duration-base) var(--ease-default);
}

.btn-ghost::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 24px;
  right: 24px;
  height: 2px;
  background: var(--color-primary-500);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-base) var(--ease-out);
}

.btn-ghost:hover {
  color: var(--color-primary-700);
}

.btn-ghost:hover::after {
  transform: scaleX(1);
}
```

---

## Navigation Header

### Desktop Navigation (1024px+)

**Structure**
- Fixed position with glass morphism effect
- Height: 80px
- Max-width: 1280px centered
- Backdrop blur on scroll

**Layout**
```
[Logo]                    [Nav Links]                    [CTA Button]
```

**Specifications**
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  transition: all var(--duration-medium) var(--ease-default);
}

/* Initial state (transparent) */
.header.transparent {
  background: transparent;
  box-shadow: none;
}

/* Scrolled state (glass morphism) */
.header.scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

**Logo**
```css
.logo {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: var(--font-weight-bold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

/* Icon + Text logo alternative */
.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
```

**Navigation Links**
```css
.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
}

.nav-link {
  font-size: 16px;
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-700);
  text-decoration: none;
  position: relative;
  padding: 8px 0;
  transition: color var(--duration-base) var(--ease-default);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-base) var(--ease-out);
}

.nav-link:hover {
  color: var(--color-primary-600);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link.active {
  color: var(--color-primary-600);
}

.nav-link.active::after {
  transform: scaleX(1);
}
```

### Mobile Navigation (< 1024px)

**Hamburger Menu**
```css
.mobile-menu-button {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: var(--z-modal);
}

@media (max-width: 1023px) {
  .mobile-menu-button {
    display: flex;
  }

  .nav-links {
    display: none;
  }
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: var(--color-neutral-700);
  border-radius: 2px;
  transition: all var(--duration-base) var(--ease-default);
}

/* Open state animation */
.mobile-menu-button.open .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}

.mobile-menu-button.open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button.open .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}
```

**Mobile Menu Panel**
```css
.mobile-menu {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transform: translateX(100%);
  transition: transform var(--duration-medium) var(--ease-out);
  z-index: var(--z-fixed);
  padding: 40px 32px;
  overflow-y: auto;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  margin-bottom: 40px;
}

.mobile-nav-link {
  font-size: 20px;
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-700);
  padding: 12px 0;
  border-bottom: 1px solid var(--color-neutral-200);
}
```

---

## Hero Section

### Layout Structure

**Desktop (1024px+)**
```
┌──────────────────────────────────────────────────────┐
│  [Gradient Background with Geometric Pattern]        │
│                                                       │
│  [Overline Text]                                     │
│  [Large Headline - 2 lines]                          │
│  [Subtitle - 1-2 lines]                              │
│                                                       │
│  [Primary CTA]  [Secondary CTA]                      │
│                                                       │
│  [Hero Image/Illustration - Floating]     ┐          │
│                                            │          │
└────────────────────────────────────────────┴──────────┘
```

**Specifications**
```css
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  overflow: hidden;
  padding: 120px 32px 80px;
}

/* Animated background pattern */
.hero-background {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image:
    linear-gradient(30deg, rgba(0, 153, 230, 0.2) 12%, transparent 12.5%, transparent 87%, rgba(0, 153, 230, 0.2) 87.5%, rgba(0, 153, 230, 0.2)),
    linear-gradient(150deg, rgba(0, 153, 230, 0.2) 12%, transparent 12.5%, transparent 87%, rgba(0, 153, 230, 0.2) 87.5%, rgba(0, 153, 230, 0.2)),
    linear-gradient(30deg, rgba(0, 153, 230, 0.2) 12%, transparent 12.5%, transparent 87%, rgba(0, 153, 230, 0.2) 87.5%, rgba(0, 153, 230, 0.2)),
    linear-gradient(150deg, rgba(0, 153, 230, 0.2) 12%, transparent 12.5%, transparent 87%, rgba(0, 153, 230, 0.2) 87.5%, rgba(0, 153, 230, 0.2));
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px;
  animation: backgroundShift 20s linear infinite;
}

@keyframes backgroundShift {
  0% { transform: translateY(0); }
  100% { transform: translateY(140px); }
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (max-width: 1023px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
```

**Content**
```css
.hero-content {
  color: var(--color-neutral-0);
}

.hero-overline {
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-overline::before {
  content: '';
  width: 40px;
  height: 2px;
  background: rgba(255, 255, 255, 0.6);
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 72px);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  color: var(--color-neutral-0);
}

.hero-headline .highlight {
  background: linear-gradient(135deg, #80D4FF 0%, #B3E5FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  max-width: 600px;
}

.hero-cta-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* White variant buttons for hero */
.btn-primary-white {
  background: var(--color-neutral-0);
  color: var(--color-primary-600);
}

.btn-primary-white:hover {
  background: var(--color-neutral-50);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
}

.btn-secondary-white {
  border-color: var(--color-neutral-0);
  color: var(--color-neutral-0);
}

.btn-secondary-white:hover {
  background: var(--color-neutral-0);
  color: var(--color-primary-600);
}
```

**Hero Visual**
```css
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1;
}

/* Floating animation */
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

/* Decorative elements */
.hero-decoration {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}
```

**Trust Indicators (Optional)**
```css
.hero-trust-indicators {
  display: flex;
  gap: 48px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.trust-indicator {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.trust-indicator-value {
  font-size: 32px;
  font-weight: var(--font-weight-bold);
  color: var(--color-neutral-0);
}

.trust-indicator-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## Service Cards

### Layout Structure

**3-Column Grid (Desktop)**
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Icon      │  │   Icon      │  │   Icon      │
│   Title     │  │   Title     │  │   Title     │
│   Desc      │  │   Desc      │  │   Desc      │
│   [Link]    │  │   [Link]    │  │   [Link]    │
└─────────────┘  └─────────────┘  └─────────────┘
```

**Service Card Specifications**
```css
.services-section {
  padding: 96px 32px;
  background: var(--color-neutral-50);
  position: relative;
}

.services-container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-overline {
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary-600);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  color: var(--color-neutral-800);
  margin-bottom: 16px;
}

.section-description {
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-neutral-600);
  max-width: 700px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

@media (max-width: 767px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
```

**Individual Service Card**
```css
.service-card {
  background: var(--color-neutral-0);
  border-radius: var(--radius-lg);
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: all var(--duration-medium) var(--ease-out);
  border: 1px solid var(--color-neutral-200);
}

/* Glass background effect */
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: var(--gradient-card);
  opacity: 0;
  transition: opacity var(--duration-medium) var(--ease-default);
  border-radius: var(--radius-lg);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-200);
}

.service-card:hover::before {
  opacity: 1;
}

.service-card-content {
  position: relative;
  z-index: 1;
}

/* Icon */
.service-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-md);
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: transform var(--duration-medium) var(--ease-bounce);
}

.service-card:hover .service-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.service-icon {
  width: 32px;
  height: 32px;
  color: var(--color-neutral-0);
}

/* Title */
.service-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-800);
  margin-bottom: 16px;
  line-height: 1.3;
}

/* Description */
.service-description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-neutral-600);
  margin-bottom: 24px;
}

/* Feature list */
.service-features {
  list-style: none;
  margin-bottom: 24px;
}

.service-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  font-size: 14px;
  color: var(--color-neutral-600);
}

.service-feature-item::before {
  content: '✓';
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-primary-50);
  color: var(--color-primary-600);
  font-weight: bold;
  flex-shrink: 0;
}

/* Learn more link */
.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-600);
  text-decoration: none;
  transition: gap var(--duration-base) var(--ease-out);
}

.service-link:hover {
  gap: 12px;
  color: var(--color-primary-700);
}

.service-link-arrow {
  width: 16px;
  height: 16px;
  transition: transform var(--duration-base) var(--ease-out);
}

.service-link:hover .service-link-arrow {
  transform: translateX(4px);
}
```

**Service-Specific Styling**

```css
/* Networking service - Blue accent */
.service-card.networking .service-icon-wrapper {
  background: linear-gradient(135deg, #0099E6 0%, #00D9FF 100%);
}

/* Cyber Security service - Purple accent */
.service-card.security .service-icon-wrapper {
  background: linear-gradient(135deg, #7C3AED 0%, #A366FF 100%);
}

/* Security Audit service - Teal accent */
.service-card.audit .service-icon-wrapper {
  background: linear-gradient(135deg, #0080BF 0%, #00BFA5 100%);
}
```

---

## About Section

### Layout Structure

**Split Layout (Desktop)**
```
┌──────────────────┬──────────────────┐
│                  │  [Overline]      │
│  [Image/Stats]   │  [Headline]      │
│                  │  [Body Copy]     │
│                  │  [Key Points]    │
│                  │  [CTA]           │
└──────────────────┴──────────────────┘
```

**Specifications**
```css
.about-section {
  padding: 96px 32px;
  background: var(--color-neutral-0);
  position: relative;
  overflow: hidden;
}

.about-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 80px;
  align-items: center;
}

@media (max-width: 1023px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

/* Visual side */
.about-visual {
  position: relative;
}

.about-image-container {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Stats overlay */
.about-stats {
  position: absolute;
  bottom: -40px;
  right: -40px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-lg);
  min-width: 280px;
}

@media (max-width: 1023px) {
  .about-stats {
    position: static;
    margin-top: 24px;
  }
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
}

.stat-item:not(:last-child) {
  border-bottom: 1px solid var(--color-neutral-200);
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-base);
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: var(--font-weight-bold);
  color: var(--color-neutral-800);
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: var(--color-neutral-600);
}

/* Content side */
.about-content {
  /* Already structured by global styles */
}

.about-overline {
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary-600);
  margin-bottom: 12px;
}

.about-headline {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  color: var(--color-neutral-800);
  margin-bottom: 24px;
}

.about-body {
  font-size: 18px;
  line-height: 1.7;
  color: var(--color-neutral-600);
  margin-bottom: 32px;
}

.about-key-points {
  list-style: none;
  margin-bottom: 32px;
  display: grid;
  gap: 16px;
}

.key-point {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: var(--color-neutral-50);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-primary-500);
}

.key-point-icon {
  width: 24px;
  height: 24px;
  color: var(--color-primary-600);
  flex-shrink: 0;
  margin-top: 2px;
}

.key-point-content {
  flex: 1;
}

.key-point-title {
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-800);
  margin-bottom: 4px;
}

.key-point-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-neutral-600);
}
```

---

## Contact Section

### Layout Structure

**Two-Column Layout**
```
┌──────────────────────────────────────────────────┐
│            [Section Header - Centered]           │
├──────────────────┬───────────────────────────────┤
│                  │                               │
│  Contact Info    │      Contact Form             │
│  - Address       │      - Name                   │
│  - Phone         │      - Email                  │
│  - Email         │      - Service Interest       │
│  - Hours         │      - Message                │
│                  │      [Submit Button]          │
│  [Social Links]  │                               │
│                  │                               │
└──────────────────┴───────────────────────────────┘
```

**Specifications**
```css
.contact-section {
  padding: 96px 32px;
  background: var(--gradient-hero);
  position: relative;
  color: var(--color-neutral-0);
}

.contact-container {
  max-width: 1280px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 64px;
}

.contact-overline {
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
}

.contact-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  color: var(--color-neutral-0);
  margin-bottom: 16px;
}

.contact-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 80px;
  align-items: start;
}

@media (max-width: 1023px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
```

**Contact Information Panel**
```css
.contact-info {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  padding: 40px;
}

.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 0;
}

.contact-info-item:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-info-icon {
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-info-content {
  flex: 1;
}

.contact-info-label {
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4px;
}

.contact-info-value {
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-neutral-0);
}

.contact-info-value a {
  color: inherit;
  text-decoration: none;
  transition: opacity var(--duration-base) var(--ease-default);
}

.contact-info-value a:hover {
  opacity: 0.8;
}

/* Social links */
.contact-social {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-social-title {
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
}

.contact-social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-base);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-neutral-0);
  transition: all var(--duration-base) var(--ease-default);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
```

**Contact Form**
```css
.contact-form {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-xl);
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-700);
  margin-bottom: 8px;
}

.form-label .required {
  color: var(--color-error);
  margin-left: 4px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 14px 16px;
  font-family: var(--font-primary);
  font-size: 16px;
  color: var(--color-neutral-800);
  background: var(--color-neutral-0);
  border: 2px solid var(--color-neutral-300);
  border-radius: var(--radius-base);
  transition: all var(--duration-base) var(--ease-default);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(0, 153, 230, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-neutral-400);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234B5563' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}

/* Error state */
.form-group.error .form-input,
.form-group.error .form-select,
.form-group.error .form-textarea {
  border-color: var(--color-error);
}

.form-error {
  display: block;
  margin-top: 6px;
  font-size: 14px;
  color: var(--color-error);
}

/* Submit button */
.form-submit {
  width: 100%;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-0);
  background: var(--gradient-primary);
  border: none;
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: all var(--duration-medium) var(--ease-out);
}

.form-submit:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Success message */
.form-success {
  padding: 16px;
  background: var(--color-success);
  color: white;
  border-radius: var(--radius-base);
  text-align: center;
  margin-bottom: 24px;
}
```

---

## Footer

### Layout Structure

**Four-Column Layout (Desktop)**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo + Tagline]    [Links]    [Links]    [Newsletter]     │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│  Copyright © 2024      [Legal Links]      [Social Icons]    │
└───────────────────────────────────────────────────────────────┘
```

**Specifications**
```css
.footer {
  background: var(--color-neutral-900);
  color: var(--color-neutral-400);
  padding: 80px 32px 32px;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--color-neutral-800);
  margin-bottom: 32px;
}

@media (max-width: 1023px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 639px) {
  .footer-main {
    grid-template-columns: 1fr;
  }
}
```

**Brand Column**
```css
.footer-brand {
  /* First column */
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: var(--font-weight-bold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  display: inline-block;
}

.footer-tagline {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-neutral-400);
  margin-bottom: 24px;
  max-width: 300px;
}

.footer-certifications {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.certification-badge {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-base);
  font-size: 12px;
  color: var(--color-neutral-300);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**Link Columns**
```css
.footer-links {
  /* Second and third columns */
}

.footer-links-title {
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-0);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  font-size: 15px;
  color: var(--color-neutral-400);
  text-decoration: none;
  transition: color var(--duration-base) var(--ease-default);
  display: inline-block;
}

.footer-link:hover {
  color: var(--color-primary-400);
}
```

**Newsletter Column**
```css
.footer-newsletter {
  /* Fourth column */
}

.footer-newsletter-title {
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-0);
  margin-bottom: 12px;
}

.footer-newsletter-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-neutral-400);
  margin-bottom: 16px;
}

.newsletter-form {
  display: flex;
  gap: 8px;
}

.newsletter-input {
  flex: 1;
  padding: 12px 16px;
  font-size: 14px;
  color: var(--color-neutral-0);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-base);
  transition: all var(--duration-base) var(--ease-default);
}

.newsletter-input::placeholder {
  color: var(--color-neutral-500);
}

.newsletter-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--color-primary-500);
}

.newsletter-submit {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-0);
  background: var(--gradient-primary);
  border: none;
  border-radius: var(--radius-base);
  cursor: pointer;
  white-space: nowrap;
  transition: transform var(--duration-base) var(--ease-out);
}

.newsletter-submit:hover {
  transform: translateY(-2px);
}
```

**Footer Bottom**
```css
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

@media (max-width: 639px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

.footer-copyright {
  font-size: 14px;
  color: var(--color-neutral-500);
}

.footer-legal {
  display: flex;
  gap: 24px;
  list-style: none;
}

.footer-legal-link {
  font-size: 14px;
  color: var(--color-neutral-500);
  text-decoration: none;
  transition: color var(--duration-base) var(--ease-default);
}

.footer-legal-link:hover {
  color: var(--color-primary-400);
}

.footer-social {
  display: flex;
  gap: 12px;
}

.footer-social-link {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-base);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-neutral-400);
  transition: all var(--duration-base) var(--ease-default);
}

.footer-social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-primary-400);
  transform: translateY(-2px);
}
```

---

## Icon Components

### Icon System

Using inline SVG for flexibility and performance. All icons should be:
- 24x24px default size
- Inherit currentColor for easy theming
- Stroke width: 2px
- Stroke linecap: round
- Stroke linejoin: round

**Network Icon**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="2"/>
  <circle cx="12" cy="3" r="2"/>
  <circle cx="12" cy="21" r="2"/>
  <circle cx="3" cy="12" r="2"/>
  <circle cx="21" cy="12" r="2"/>
  <line x1="12" y1="5" x2="12" y2="10"/>
  <line x1="12" y1="14" x2="12" y2="19"/>
  <line x1="5" y1="12" x2="10" y2="12"/>
  <line x1="14" y1="12" x2="19" y2="12"/>
</svg>
```

**Shield (Security) Icon**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  <path d="M9 12l2 2 4-4"/>
</svg>
```

**Checklist (Audit) Icon**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 11l3 3L22 4"/>
  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
</svg>
```

**Arrow Right Icon**
```html
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="8" x2="15" y2="8"/>
  <polyline points="11,4 15,8 11,12"/>
</svg>
```

**Check Icon**
```html
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="3,8 6,11 13,4"/>
</svg>
```

---

This component library provides all the building blocks needed to implement the Smart IT Solutions website with consistency and precision.
