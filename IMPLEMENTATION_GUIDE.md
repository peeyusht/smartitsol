# Smart IT Solutions - Implementation Guide

## Quick Start for Next.js/React

This guide provides ready-to-use code snippets for implementing the Smart IT Solutions design in a Next.js application.

---

## Project Setup

### 1. Install Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Optional but recommended
npm install framer-motion  # For animations
npm install react-intersection-observer  # For scroll animations
npm install react-icons  # For icons
```

### 2. Tailwind Configuration

**tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7FF',
          100: '#B3E5FF',
          200: '#80D4FF',
          300: '#4DC3FF',
          400: '#1AB2FF',
          500: '#0099E6',
          600: '#0080BF',
          700: '#006699',
          800: '#004D73',
          900: '#00334D',
        },
        secondary: {
          50: '#F0E6FF',
          100: '#D4B3FF',
          300: '#A366FF',
          500: '#7C3AED',
          700: '#5B21B6',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#FAFBFC',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '26': '104px',
      },
      borderRadius: {
        'base': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 153, 230, 0.12)',
        'glass-hover': '0 12px 48px rgba(0, 153, 230, 0.18)',
        'primary': '0 10px 30px rgba(0, 153, 230, 0.3)',
        'secondary': '0 10px 30px rgba(124, 58, 237, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0099E6 0%, #7C3AED 100%)',
        'gradient-hero': 'linear-gradient(135deg, #001F3D 0%, #003D73 50%, #0099E6 100%)',
      },
    },
  },
  plugins: [],
}
```

### 3. Global Styles

**app/globals.css**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: #0099E6;
    --color-secondary: #7C3AED;
  }

  * {
    @apply border-neutral-200;
  }

  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-neutral-50 text-neutral-600 antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply text-neutral-800 font-display;
  }
}

@layer components {
  /* Glass Morphism */
  .glass-light {
    @apply bg-white/70 backdrop-blur-xl border border-white/30;
  }

  .glass-dark {
    @apply bg-neutral-800/70 backdrop-blur-xl border border-white/10;
  }

  .glass-primary {
    @apply bg-primary-500/10 backdrop-blur-xl border border-primary-500/20;
  }

  /* Buttons */
  .btn {
    @apply inline-flex items-center justify-center font-semibold rounded-base
           transition-all duration-300 ease-out disabled:opacity-50
           disabled:cursor-not-allowed focus:outline-none focus:ring-3
           focus:ring-primary-500/30 focus:ring-offset-2;
  }

  .btn-primary {
    @apply btn bg-gradient-to-br from-primary-500 to-secondary-500
           text-white hover:-translate-y-0.5 hover:shadow-primary
           active:translate-y-0;
  }

  .btn-secondary {
    @apply btn border-2 border-primary-500 text-primary-600
           hover:bg-primary-500 hover:text-white hover:-translate-y-0.5
           hover:shadow-md;
  }

  .btn-ghost {
    @apply btn text-primary-600 relative after:absolute after:bottom-2
           after:left-6 after:right-6 after:h-0.5 after:bg-primary-500
           after:scale-x-0 after:transition-transform after:duration-300
           hover:text-primary-700 hover:after:scale-x-100;
  }

  /* Button Sizes */
  .btn-sm {
    @apply px-6 py-3 text-sm h-10 min-w-[120px];
  }

  .btn-md {
    @apply px-8 py-4 text-base h-[52px] min-w-[160px];
  }

  .btn-lg {
    @apply px-10 py-5 text-lg h-[60px] min-w-[200px];
  }

  /* Section Styles */
  .section {
    @apply py-24 px-8;
  }

  .section-container {
    @apply max-w-screen-xl mx-auto;
  }

  .section-header {
    @apply text-center mb-16;
  }

  .section-overline {
    @apply text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3;
  }

  .section-title {
    @apply text-4xl md:text-5xl font-bold mb-4 leading-tight;
  }

  .section-description {
    @apply text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed;
  }

  /* Animations */
  .animate-float {
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

  .animate-pulse-glow {
    animation: pulseGlow 4s ease-in-out infinite;
  }

  @keyframes pulseGlow {
    0%, 100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradientShift 6s ease infinite;
  }

  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  /* Scroll Animations */
  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent;
  }

  .text-gradient-light {
    @apply bg-gradient-to-r from-primary-200 to-secondary-200 bg-clip-text text-transparent;
  }
}
```

---

## React Component Examples

### Header Component

**components/Header.tsx**
```tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-light shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-2xl font-display font-bold text-gradient">
              Smart IT Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-700 font-medium hover:text-primary-600
                         transition-colors relative py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary
                               scale-x-0 group-hover:scale-x-100 transition-transform
                               origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="#contact" className="btn btn-primary btn-md">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 right-0 bottom-0
                   bg-white/98 backdrop-blur-xl transition-transform duration-300
                   ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col gap-6 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-neutral-700 py-3
                       border-b border-neutral-200 hover:text-primary-600
                       transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn btn-primary btn-md mt-4"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```

---

### Hero Section Component

**components/HeroSection.tsx**
```tsx
'use client';

import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(0, 153, 230, 0.2) 12%, transparent 12.5%, transparent 87%, rgba(0, 153, 230, 0.2) 87.5%),
            linear-gradient(150deg, rgba(0, 153, 230, 0.2) 12%, transparent 12.5%, transparent 87%, rgba(0, 153, 230, 0.2) 87.5%)
          `,
          backgroundSize: '80px 140px',
          animation: 'backgroundShift 20s linear infinite',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Overline */}
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              <span className="w-10 h-0.5 bg-white/60" />
              Trusted IT Security Partner
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Secure Your Digital{' '}
              <span className="text-gradient-light">Infrastructure</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              Comprehensive networking, cybersecurity, and audit services designed
              to protect and optimize your business operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#contact"
                className="btn btn-md bg-white text-primary-600 hover:bg-neutral-50
                         hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
              >
                Schedule Consultation
              </Link>
              <Link
                href="#services"
                className="btn btn-md border-2 border-white text-white
                         hover:bg-white hover:text-primary-600"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/30 to-primary-500/30 rounded-full blur-3xl animate-pulse-glow" />

              {/* Placeholder for illustration/image */}
              <div className="relative z-10 animate-float">
                {/* Replace with actual image or illustration */}
                <div className="w-full h-full rounded-2xl glass-light flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="text-white/90 font-medium">
                      Enterprise-Grade Security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe for background animation */}
      <style jsx>{`
        @keyframes backgroundShift {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(140px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
```

---

### Services Section Component

**components/ServicesSection.tsx**
```tsx
'use client';

import { HiArrowRight } from 'react-icons/hi';
import {
  IoNetworkOutline,
  IoShieldCheckmarkOutline,
  IoDocumentTextOutline
} from 'react-icons/io5';

const services = [
  {
    id: 'networking',
    icon: IoNetworkOutline,
    gradient: 'from-primary-500 to-primary-400',
    title: 'Network Infrastructure',
    description: 'Design, implement, and maintain robust network solutions that ensure seamless connectivity and optimal performance.',
    features: [
      'Network Design & Architecture',
      'LAN/WAN Implementation',
      'Network Monitoring & Management',
      'Performance Optimization',
    ],
  },
  {
    id: 'security',
    icon: IoShieldCheckmarkOutline,
    gradient: 'from-secondary-500 to-secondary-400',
    title: 'Cybersecurity Solutions',
    description: 'Protect your business from evolving threats with comprehensive security strategies and advanced threat detection.',
    features: [
      'Threat Detection & Prevention',
      'Security Infrastructure Setup',
      'Incident Response Planning',
      '24/7 Security Monitoring',
    ],
  },
  {
    id: 'audit',
    icon: IoDocumentTextOutline,
    gradient: 'from-primary-600 to-primary-500',
    title: 'Security Audits & Reviews',
    description: 'Comprehensive security assessments to identify vulnerabilities and ensure compliance with industry standards.',
    features: [
      'Vulnerability Assessments',
      'Compliance Auditing',
      'Risk Analysis & Reporting',
      'Remediation Planning',
    ],
  },
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group bg-white rounded-lg p-10 border border-neutral-200
                    hover:border-primary-200 hover:-translate-y-2 hover:shadow-lg
                    transition-all duration-300 relative overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-md bg-gradient-to-br ${service.gradient}
                        flex items-center justify-center mb-6
                        group-hover:scale-110 group-hover:rotate-3
                        transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4 text-neutral-800">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-neutral-600">
              <span className="flex items-center justify-center w-5 h-5 rounded-full
                             bg-primary-50 text-primary-600 font-bold flex-shrink-0 mt-0.5">
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Link */}
        <a
          href={`#${service.id}`}
          className="inline-flex items-center gap-2 text-primary-600 font-semibold
                   group-hover:gap-3 transition-all duration-300"
        >
          Learn More
          <HiArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-neutral-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline">Our Services</div>
          <h2 className="section-title">Comprehensive IT Solutions</h2>
          <p className="section-description">
            From network infrastructure to advanced cybersecurity, we provide
            end-to-end IT services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
```

---

### Contact Form Component

**components/ContactForm.tsx**
```tsx
'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitSuccess && (
        <div className="p-4 bg-green-500 text-white rounded-lg text-center">
          Thank you! We'll get back to you soon.
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3.5 rounded-base border-2 transition-all
                     ${errors.name
                       ? 'border-red-500'
                       : 'border-neutral-300 focus:border-primary-500'
                     }
                     focus:outline-none focus:ring-3 focus:ring-primary-500/10`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3.5 rounded-base border-2 transition-all
                     ${errors.email
                       ? 'border-red-500'
                       : 'border-neutral-300 focus:border-primary-500'
                     }
                     focus:outline-none focus:ring-3 focus:ring-primary-500/10`}
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone (Optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-base border-2 border-neutral-300
                   focus:border-primary-500 focus:outline-none focus:ring-3
                   focus:ring-primary-500/10 transition-all"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-2">
          Service Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3.5 rounded-base border-2 transition-all
                     ${errors.service
                       ? 'border-red-500'
                       : 'border-neutral-300 focus:border-primary-500'
                     }
                     focus:outline-none focus:ring-3 focus:ring-primary-500/10`}
        >
          <option value="">Select a service...</option>
          <option value="networking">Networking Solutions</option>
          <option value="cybersecurity">Cybersecurity Services</option>
          <option value="audit">Security Audit & Review</option>
          <option value="general">General Inquiry</option>
        </select>
        {errors.service && (
          <p className="mt-1.5 text-sm text-red-500">{errors.service}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3.5 rounded-base border-2 transition-all resize-y
                     ${errors.message
                       ? 'border-red-500'
                       : 'border-neutral-300 focus:border-primary-500'
                     }
                     focus:outline-none focus:ring-3 focus:ring-primary-500/10`}
          placeholder="Tell us about your IT needs..."
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary btn-md"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
```

---

## Utility Hooks

### Scroll Animation Hook

**hooks/useScrollAnimation.ts**
```typescript
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// Usage example:
// const { ref, isVisible } = useScrollAnimation();
// <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
```

---

## Page Assembly

**app/page.tsx**
```tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
```

---

## Performance Optimizations

### Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/hero-image.webp"
  alt="Description"
  width={800}
  height={600}
  priority // For above-fold images
  quality={90}
  placeholder="blur"
  blurDataURL="data:image/..." // Low-quality placeholder
/>
```

### Font Optimization

**app/layout.tsx**
```tsx
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

This implementation guide provides production-ready code that follows Next.js 14+ best practices with TypeScript support, proper accessibility, and performance optimizations.
