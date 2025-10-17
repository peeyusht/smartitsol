'use client';

import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    services: [
      { label: 'Network Infrastructure', href: '#networking' },
      { label: 'Cybersecurity Solutions', href: '#security' },
      { label: 'Security Audits', href: '#audit' },
      { label: 'IT Consulting', href: '#consulting' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Case Studies', href: '#cases' },
      { label: 'Blog & Resources', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact Us', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="max-w-screen-xl mx-auto px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="text-2xl font-display font-bold text-gradient">
                Smart IT Solutions
              </span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
              Securing your digital future with expert IT solutions and unwavering commitment to your success.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-base text-xs uppercase tracking-wide">
                ISO 27001 Certified
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-base text-xs uppercase tracking-wide">
                SOC 2 Compliant
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-base text-xs uppercase tracking-wide">
                CISSP Certified
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wide text-sm mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wide text-sm mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-b border-neutral-800">
          <div className="max-w-2xl">
            <h4 className="text-white font-semibold text-lg mb-3">
              Stay Informed
            </h4>
            <p className="text-neutral-400 mb-6 text-sm">
              Get the latest cybersecurity insights, threat alerts, and company updates delivered to your inbox monthly.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-base bg-white/5 border border-white/10
                         text-white placeholder-neutral-500 focus:outline-none
                         focus:border-primary-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="btn btn-primary btn-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-green-400 text-sm">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-500 text-sm">
            © 2024 Smart IT Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-neutral-500 hover:text-primary-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-neutral-500 hover:text-primary-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>

            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-base bg-white/5 flex items-center justify-center
                         hover:bg-white/10 text-neutral-400 hover:text-primary-400
                         transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-base bg-white/5 flex items-center justify-center
                         hover:bg-white/10 text-neutral-400 hover:text-primary-400
                         transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-base bg-white/5 flex items-center justify-center
                         hover:bg-white/10 text-neutral-400 hover:text-primary-400
                         transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
