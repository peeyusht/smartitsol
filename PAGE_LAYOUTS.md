# Smart IT Solutions - Page Layouts

## Homepage Layout Specification

### Full Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVIGATION HEADER                         │
│                    (Fixed, Glass on scroll)                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                      HERO SECTION                            │
│                  (Full viewport height)                      │
│              Dark gradient background                        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    SERVICES SECTION                          │
│                  (Light gray background)                     │
│              3-column card grid layout                       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                     ABOUT SECTION                            │
│                   (White background)                         │
│              Split layout: Image | Content                   │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                  WHY CHOOSE US SECTION                       │
│                  (Light gray background)                     │
│                 Feature highlights grid                      │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                  TESTIMONIALS SECTION                        │
│                    (White background)                        │
│                   Carousel/Grid layout                       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    CONTACT SECTION                           │
│                 (Dark gradient background)                   │
│            Split: Contact info | Form                        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                        FOOTER                                │
│                   (Dark background)                          │
│                   Multi-column layout                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Detailed Section Layouts

### 1. Navigation Header

**Desktop Layout (1024px+)**
```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

Layout:
┌────────────────────────────────────────────────────────────┐
│ [Logo]          [Services] [About] [Contact]     [Get Started] │
│                                                            │
└────────────────────────────────────────────────────────────┘

Spacing:
- Container: max-width 1280px, padding 0 32px
- Height: 80px
- Logo to nav links: flex-grow (auto spacing)
- Nav links gap: 40px
- Nav to CTA: 32px gap
```

**Mobile Layout (< 1024px)**
```css
Layout:
┌────────────────────────────────────────────────────────────┐
│ [Logo]                                    [☰ Hamburger]   │
└────────────────────────────────────────────────────────────┘

Mobile menu (slide in from right):
┌────────────────────────────────────────────────────────────┐
│                      [× Close]                             │
│                                                            │
│                     [Services]                             │
│                     [About]                                │
│                     [Contact]                              │
│                                                            │
│                  [Get Started Button]                      │
│                                                            │
│                  [Social Links]                            │
└────────────────────────────────────────────────────────────┘
```

---

### 2. Hero Section

**Desktop Layout (1024px+)**
```css
Full viewport height (min-height: 100vh)
Background: Dark gradient (#001F3D → #0099E6)

┌────────────────────────────────────────────────────────────┐
│  Animated geometric pattern background (subtle)            │
│                                                            │
│  ┌──────────────────┐        ┌─────────────────┐         │
│  │                  │        │                 │         │
│  │  [Overline]      │        │                 │         │
│  │                  │        │                 │         │
│  │  [Headline       │        │   Floating      │         │
│  │   with gradient  │        │   Illustration  │         │
│  │   highlight]     │        │   or Image      │         │
│  │                  │        │                 │         │
│  │  [Subtitle       │        │   (Animated)    │         │
│  │   2 lines max]   │        │                 │         │
│  │                  │        │                 │         │
│  │  [Primary CTA]   │        │                 │         │
│  │  [Secondary CTA] │        │                 │         │
│  │                  │        │                 │         │
│  └──────────────────┘        └─────────────────┘         │
│                                                            │
│  [Trust indicators: Years | Clients | Projects]           │
└────────────────────────────────────────────────────────────┘

Grid: 2 columns (1fr 1fr)
Gap: 80px
Padding: 120px 32px 80px (top accounts for fixed header)
```

**Content Specifications**
- Overline: "ENTERPRISE IT SOLUTIONS" or "TRUSTED CYBERSECURITY PARTNER"
- Headline: 48-72px, max 2 lines
  - Example: "Secure Your Digital Infrastructure with **Expert IT Solutions**"
  - Gradient highlight on key phrase
- Subtitle: 18-20px, max 2 lines
  - Example: "Comprehensive networking, cybersecurity, and audit services designed to protect and optimize your business operations."
- CTAs:
  - Primary: "Schedule Consultation"
  - Secondary: "View Our Services"

**Trust Indicators**
```css
Display: flex, gap 48px
Each indicator:
- Value: 32px bold (e.g., "15+")
- Label: 14px uppercase (e.g., "YEARS EXPERIENCE")
```

**Mobile Layout (< 768px)**
```css
Single column layout
Padding: 100px 24px 60px
Hero visual: Reduced size or hidden
Trust indicators: Stack vertically or 2-column grid
```

---

### 3. Services Section

**Layout**
```css
Padding: 96px 32px
Background: #FAFBFC (neutral-50)

┌────────────────────────────────────────────────────────────┐
│                  [Section Header - Centered]                │
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │              │  │              │  │              │   │
│  │   [Icon]     │  │   [Icon]     │  │   [Icon]     │   │
│  │              │  │              │  │              │   │
│  │  Networking  │  │    Cyber     │  │   Security   │   │
│  │              │  │   Security   │  │    Audit     │   │
│  │  [Features]  │  │  [Features]  │  │  [Features]  │   │
│  │              │  │              │  │              │   │
│  │ [Learn More] │  │ [Learn More] │  │ [Learn More] │   │
│  │              │  │              │  │              │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘

Grid: 3 columns (repeat(auto-fit, minmax(320px, 1fr)))
Gap: 32px
Max-width: 1280px
```

**Section Header**
- Overline: "OUR SERVICES"
- Title: "Comprehensive IT Solutions"
- Description: Brief overview (1-2 sentences)

**Service Cards Content**

**1. Networking**
- Icon: Network/nodes icon (blue gradient)
- Title: "Network Infrastructure"
- Description: "Design, implement, and maintain robust network solutions that ensure seamless connectivity and optimal performance."
- Features:
  - Network Design & Architecture
  - LAN/WAN Implementation
  - Network Monitoring & Management
  - Performance Optimization
- Link: "Explore Networking →"

**2. Cyber Security**
- Icon: Shield icon (purple gradient)
- Title: "Cybersecurity Solutions"
- Description: "Protect your business from evolving threats with comprehensive security strategies and advanced threat detection."
- Features:
  - Threat Detection & Prevention
  - Security Infrastructure Setup
  - Incident Response Planning
  - 24/7 Security Monitoring
- Link: "Explore Security →"

**3. Security Audit**
- Icon: Checklist icon (teal gradient)
- Title: "Security Audits & Reviews"
- Description: "Comprehensive security assessments to identify vulnerabilities and ensure compliance with industry standards."
- Features:
  - Vulnerability Assessments
  - Compliance Auditing
  - Risk Analysis & Reporting
  - Remediation Planning
- Link: "Learn About Audits →"

**Mobile Responsive**
- Tablet (768-1023px): 2 columns
- Mobile (< 768px): 1 column, full width

---

### 4. About Section

**Desktop Layout**
```css
Padding: 96px 32px
Background: #FFFFFF

┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ┌─────────────────────┐    ┌──────────────────────────┐ │
│  │                     │    │  [Overline]              │ │
│  │                     │    │                          │ │
│  │    [Main Image]     │    │  [Headline]              │ │
│  │                     │    │  "Your Trusted IT        │ │
│  │    [Stats Card]     │    │   Security Partner"      │ │
│  │    - Positioned     │    │                          │ │
│  │      bottom right   │    │  [Body Paragraphs]       │ │
│  │                     │    │  - Who we are            │ │
│  │                     │    │  - What we do            │ │
│  └─────────────────────┘    │  - Why we're different   │ │
│                             │                          │ │
│                             │  [Key Points]            │ │
│                             │  ✓ Point 1               │ │
│                             │  ✓ Point 2               │ │
│                             │  ✓ Point 3               │ │
│                             │                          │ │
│                             │  [CTA Button]            │ │
│                             └──────────────────────────┘ │
│                                                            │
└────────────────────────────────────────────────────────────┘

Grid: 45% | 55%
Gap: 80px
Alignment: center
```

**Content Specifications**

**Overline**: "ABOUT SMART IT SOLUTIONS"

**Headline**: "Your Trusted Partner in IT Security & Infrastructure"

**Body Copy** (example):
```
At Smart IT Solutions, we specialize in delivering enterprise-grade IT services
that protect and empower businesses. With over 15 years of combined experience
in networking, cybersecurity, and security auditing, our team provides
comprehensive solutions tailored to your unique needs.

We understand that in today's digital landscape, security isn't optional—it's
essential. That's why we combine cutting-edge technology with industry best
practices to deliver solutions that not only meet compliance standards but
exceed them.
```

**Key Points**:
1. **Certified Expertise**: Industry-certified professionals with extensive field experience
2. **Proactive Approach**: We identify and address vulnerabilities before they become threats
3. **24/7 Support**: Round-the-clock monitoring and rapid response to security incidents

**Stats Card Content**:
- 500+ Projects Completed
- 98% Client Satisfaction
- 15+ Years Experience
- 24/7 Support Available

**Image Suggestions**:
- Professional team photo in modern office
- Server room/data center imagery
- Professional working on security systems
- Modern tech environment

**Mobile Layout**
- Single column
- Image section stacks on top
- Stats card becomes full-width below image

---

### 5. Why Choose Us Section

**Layout**
```css
Padding: 96px 32px
Background: #FAFBFC (neutral-50)

┌────────────────────────────────────────────────────────────┐
│              [Section Header - Centered]                    │
│                                                            │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐         │
│  │  [Icon]    │  │  [Icon]    │  │  [Icon]    │         │
│  │  Title     │  │  Title     │  │  Title     │         │
│  │  Text      │  │  Text      │  │  Text      │         │
│  └────────────┘  └────────────┘  └────────────┘         │
│                                                            │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐         │
│  │  [Icon]    │  │  [Icon]    │  │  [Icon]    │         │
│  │  Title     │  │  Title     │  │  Title     │         │
│  │  Text      │  │  Text      │  │  Text      │         │
│  └────────────┘  └────────────┘  └────────────┘         │
│                                                            │
└────────────────────────────────────────────────────────────┘

Grid: 3 columns
Gap: 32px
```

**Features Content**:

1. **Proven Track Record**
   - Icon: Trophy/Award
   - Text: "500+ successful projects across diverse industries with measurable results"

2. **Certified Professionals**
   - Icon: Badge/Certificate
   - Text: "Team of industry-certified experts staying current with latest security standards"

3. **Custom Solutions**
   - Icon: Puzzle piece
   - Text: "Tailored IT strategies designed specifically for your business requirements"

4. **24/7 Monitoring**
   - Icon: Clock/Shield
   - Text: "Round-the-clock threat detection and rapid incident response"

5. **Compliance Focused**
   - Icon: Checklist/Document
   - Text: "Ensure adherence to GDPR, HIPAA, ISO 27001, and other regulatory standards"

6. **Cost Effective**
   - Icon: Graph/Chart
   - Text: "Maximize ROI with efficient solutions that reduce downtime and prevent breaches"

---

### 6. Testimonials Section (Optional Enhancement)

**Layout**
```css
Padding: 96px 32px
Background: #FFFFFF

┌────────────────────────────────────────────────────────────┐
│              [Section Header - Centered]                    │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐ │
│  │                                                       │ │
│  │  "Quote text from satisfied client..."               │ │
│  │                                                       │ │
│  │  [Client Photo]  Name, Position                      │ │
│  │                  Company Name                         │ │
│  │                                                       │ │
│  │  [← →] Navigation dots                               │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                            │
│  Or 3-column grid of testimonial cards                    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Testimonial Card Style**:
```css
.testimonial-card {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  position: relative;
}

.quote-icon {
  width: 40px;
  height: 40px;
  color: var(--color-primary-200);
  margin-bottom: 16px;
}

.testimonial-text {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-neutral-600);
  margin-bottom: 24px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-photo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: 600;
  color: var(--color-neutral-800);
}

.author-position {
  font-size: 14px;
  color: var(--color-neutral-500);
}
```

---

### 7. Contact Section

**Layout**
```css
Padding: 96px 32px
Background: Dark gradient (#001F3D → #0099E6)

┌────────────────────────────────────────────────────────────┐
│              [Section Header - Centered, White]             │
│                                                            │
│  ┌──────────────────┐    ┌──────────────────────────────┐│
│  │                  │    │                              ││
│  │  Contact Info    │    │     Contact Form             ││
│  │                  │    │                              ││
│  │  📍 Address      │    │  Name [_______________]      ││
│  │                  │    │                              ││
│  │  📞 Phone        │    │  Email [______________]      ││
│  │                  │    │                              ││
│  │  ✉️  Email       │    │  Service [___________v]      ││
│  │                  │    │                              ││
│  │  🕐 Hours        │    │  Message                     ││
│  │                  │    │  [____________________]      ││
│  │                  │    │  [____________________]      ││
│  │  [Social Links]  │    │                              ││
│  │  [f] [t] [in]    │    │  [Send Message Button]       ││
│  │                  │    │                              ││
│  └──────────────────┘    └──────────────────────────────┘│
│                                                            │
└────────────────────────────────────────────────────────────┘

Grid: 400px | 1fr
Gap: 80px
```

**Contact Information Panel Content**:

```
📍 **ADDRESS**
123 Business Avenue
Tech District, Suite 456
City, State 12345

📞 **PHONE**
+1 (555) 123-4567
+1 (555) 123-4568

✉️ **EMAIL**
info@smartitsolutions.com
support@smartitsolutions.com

🕐 **BUSINESS HOURS**
Monday - Friday: 9:00 AM - 6:00 PM
Saturday: 10:00 AM - 4:00 PM
Sunday: Closed
Emergency Support: 24/7
```

**Contact Form Fields**:

1. **Full Name** (required)
   - Input type: text
   - Placeholder: "John Doe"

2. **Email Address** (required)
   - Input type: email
   - Placeholder: "john@company.com"

3. **Phone Number** (optional)
   - Input type: tel
   - Placeholder: "+1 (555) 123-4567"

4. **Service Interest** (required)
   - Select dropdown:
     - "Select a service..."
     - Networking Solutions
     - Cybersecurity Services
     - Security Audit & Review
     - General Inquiry

5. **Message** (required)
   - Textarea
   - Placeholder: "Tell us about your IT needs..."
   - Min height: 120px

6. **Submit Button**
   - Text: "Send Message"
   - Full width
   - Primary gradient style

**Form Validation**:
- Required fields marked with red asterisk
- Real-time validation on blur
- Error messages display below fields
- Success message after submission
- Loading state during submission

**Mobile Layout**:
- Single column
- Contact info panel stacks on top
- Form below, full width

---

### 8. Footer

**Layout**
```css
Padding: 80px 32px 32px
Background: #111827 (neutral-900)

┌────────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌─────────┐  ┌─────────┐  ┌────────────┐  │
│  │          │  │         │  │         │  │            │  │
│  │  Logo +  │  │ Services│  │  Quick  │  │ Newsletter │  │
│  │  Tagline │  │         │  │  Links  │  │            │  │
│  │          │  │ - Net   │  │         │  │ [Email___] │  │
│  │  Badges  │  │ - Sec   │  │ - About │  │ [Subscribe]│  │
│  │          │  │ - Audit │  │ - Blog  │  │            │  │
│  │          │  │         │  │ - Career│  │            │  │
│  │          │  │         │  │ - FAQ   │  │            │  │
│  └──────────┘  └─────────┘  └─────────┘  └────────────┘  │
│                                                            │
│  ──────────────────────────────────────────────────────── │
│                                                            │
│  © 2024 Smart IT Solutions     [Privacy] [Terms]  [f][t][in] │
│                                                            │
└────────────────────────────────────────────────────────────┘

Grid: 2fr | 1fr | 1fr | 1.5fr
Gap: 48px
```

**Column 1: Brand**
- Logo with gradient
- Tagline: "Securing your digital future with expert IT solutions"
- Certification badges:
  - "ISO 27001 Certified"
  - "SOC 2 Compliant"
  - "CISSP Certified"

**Column 2: Services**
- Networking Solutions
- Cybersecurity Services
- Security Audits
- IT Consulting

**Column 3: Quick Links**
- About Us
- Case Studies
- Blog & Resources
- Careers
- FAQ
- Contact

**Column 4: Newsletter**
- Title: "Stay Informed"
- Text: "Get the latest security insights and company updates."
- Email input + Subscribe button

**Footer Bottom**:
- Copyright notice
- Legal links (Privacy Policy, Terms of Service)
- Social media icons (LinkedIn, Twitter, Facebook)

**Mobile Layout**:
- Stack columns vertically
- 2-column grid for middle sections on tablet
- Single column on mobile

---

## Responsive Breakpoints Summary

### Desktop Large (1536px+)
- Max content width: 1536px
- Hero headline: 72px
- Section padding: 96px vertical

### Desktop (1280px - 1535px)
- Max content width: 1280px
- Hero headline: 60px
- Section padding: 96px vertical

### Laptop (1024px - 1279px)
- Max content width: 1024px
- Hero headline: 56px
- Section padding: 80px vertical
- Services: 3 columns

### Tablet (768px - 1023px)
- Max content width: 768px
- Hero headline: 48px
- Section padding: 64px vertical
- Services: 2 columns
- Hero: Single column stack
- About: Single column stack
- Contact: Single column stack

### Mobile (640px - 767px)
- Max content width: 640px
- Hero headline: 40px
- Section padding: 48px vertical
- Services: 1 column
- All sections: Single column

### Mobile Small (< 640px)
- Padding: 24px horizontal
- Hero headline: 36px
- Section padding: 40px vertical
- Button text may reduce

---

## Scrolling & Interaction Behaviors

### Scroll-Triggered Animations

**Fade In Up** (Default for most sections)
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger Animation** (For cards/grid items)
```css
.stagger-item {
  opacity: 0;
  transform: translateY(20px);
}

.stagger-item:nth-child(1) { transition-delay: 0.1s; }
.stagger-item:nth-child(2) { transition-delay: 0.2s; }
.stagger-item:nth-child(3) { transition-delay: 0.3s; }
```

### Smooth Scrolling

```css
html {
  scroll-behavior: smooth;
}
```

### Intersection Observer Trigger
- Elements animate when 20% visible in viewport
- One-time animation (doesn't re-trigger on scroll up)
- Progressive enhancement (fallback to visible state if JS disabled)

---

## Performance Considerations

### Image Optimization
- Hero images: WebP format, max 1920px wide
- Service icons: SVG (inline or sprite)
- About section images: WebP, max 800px wide
- All images: Lazy loading except above-fold hero

### Critical CSS
- Extract and inline styles for:
  - Header (above fold)
  - Hero section
  - Font loading

### Font Loading Strategy
```css
@font-face {
  font-family: 'Inter';
  font-display: swap;
  /* Prevents invisible text during font load */
}
```

### Accessibility Features
- Skip to main content link
- Focus visible on all interactive elements
- ARIA labels for icon-only buttons
- Semantic HTML structure
- Color contrast WCAG AA compliant
- Keyboard navigation support

---

This comprehensive layout specification provides everything needed to build a modern, responsive, and accessible website for Smart IT Solutions.
