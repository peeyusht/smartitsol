'use client';

import { useState } from 'react';
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

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

  const handleSubmit = async (e: React.FormEvent) => {
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

  const contactInfo = [
    {
      icon: HiLocationMarker,
      label: 'Address',
      value: '123 Technology Boulevard\nInnovation District, Suite 400\nSan Francisco, CA 94105',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+1 (555) 847-2000\n+1 (555) 847-2001',
    },
    {
      icon: HiMail,
      label: 'Email',
      value: 'info@smartitsolutions.com\nsupport@smartitsolutions.com',
    },
    {
      icon: HiClock,
      label: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nEmergency Support: 24/7',
    },
  ];

  return (
    <section id="contact" className="section bg-gradient-hero text-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-overline text-white/80">Get In Touch</div>
          <h2 className="section-title text-white">
            Ready to Secure Your IT Infrastructure?
          </h2>
          <p className="section-description text-white/90">
            Schedule a free consultation to discuss your IT security needs. Our experts will assess your current infrastructure and recommend solutions tailored to your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 py-5 ${
                      index !== contactInfo.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    <Icon className="w-6 h-6 text-white/90 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wide text-white/70 mb-1">
                        {item.label}
                      </div>
                      <div className="text-white/90 whitespace-pre-line leading-relaxed">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-white/70 mb-4">
                Connect With Us
              </div>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-base bg-white/10 flex items-center justify-center
                           hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-base bg-white/10 flex items-center justify-center
                           hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-base bg-white/10 flex items-center justify-center
                           hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/98 backdrop-blur-xl rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitSuccess && (
                <div className="p-4 bg-green-500 text-white rounded-lg text-center font-medium">
                  Thank you! We&apos;ll get back to you soon.
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
                  className={`w-full px-4 py-3.5 rounded-base border-2 transition-all text-neutral-800
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
                  className={`w-full px-4 py-3.5 rounded-base border-2 transition-all text-neutral-800
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
                  className="w-full px-4 py-3.5 rounded-base border-2 border-neutral-300 text-neutral-800
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
                  className={`w-full px-4 py-3.5 rounded-base border-2 transition-all text-neutral-800
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
                  className={`w-full px-4 py-3.5 rounded-base border-2 transition-all resize-y text-neutral-800
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
