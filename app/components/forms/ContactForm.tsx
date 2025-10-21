'use client'

import { useContactForm } from '@/app/hooks/useContactForm'

export function ContactForm() {
  const { errors, isSubmitting, isSuccess, handleSubmit } = useContactForm()

  return (
    <form className="contact-form fade-in" onSubmit={handleSubmit} noValidate>
      {isSuccess && (
        <div className="form-success" role="alert">
          <strong>✓ Thank You! Your Request Has Been Sent</strong>
          <p>Our security team will review your information and respond within 2 hours during business days.</p>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">
          Full Name <span className="required" aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Smith"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          autoComplete="name"
        />
        {errors.name && (
          <span id="name-error" className="error-message" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Work Email <span className="required" aria-label="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john@yourcompany.com"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          autoComplete="email"
        />
        {errors.email && (
          <span id="email-error" className="error-message" role="alert">
            {errors.email}
          </span>
        )}
        <span className="field-help">We&apos;ll never share your email</span>
      </div>

      <div className="form-group">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Your Company Inc."
          autoComplete="organization"
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">
          Primary Concern <span className="required" aria-label="required">*</span>
        </label>
        <select id="service" name="service" required aria-required="true">
          <option value="">What&apos;s your biggest security concern?</option>
          <option value="compliance">Need to pass compliance audit (PCI, HIPAA, SOC 2)</option>
          <option value="breach">Concerned about data breach risk</option>
          <option value="audit">Haven&apos;t had security audit in 1+ years</option>
          <option value="deployment">Need secure system deployment</option>
          <option value="incident">Recently experienced security incident</option>
          <option value="assessment">General security assessment</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Additional Details <span className="required" aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your specific security concerns, infrastructure, or timeline..."
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
          <span id="message-error" className="error-message" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="form-submit" disabled={isSubmitting}>
        <span className="btn-text">
          {isSubmitting ? 'Sending...' : 'Get My Free Security Assessment'}
        </span>
        <span className="btn-subtext">Results in 24 hours →</span>
      </button>

      <p className="form-privacy">
        🔒 Your information is secure and will never be shared.
      </p>
    </form>
  )
}
