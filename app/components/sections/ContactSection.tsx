import { contactContent } from '@/app/data/content'
import { ContactForm } from '../forms/ContactForm'

export function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header fade-in">
          <div className="urgency-banner">
            <span className="urgency-icon">⚠️</span>
            <span className="urgency-text">{contactContent.urgencyBanner}</span>
          </div>

          <h2>{contactContent.title}</h2>
          <p className="contact-subtitle">
            {contactContent.subtitle}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3>Here&apos;s What Happens Next:</h3>
            <div className="process-steps">
              {contactContent.processSteps.map((step) => (
                <div key={step.number} className="process-step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="alternative-contact">
              <h4>Prefer to Talk First?</h4>

              {contactContent.contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div>
                    <strong>{info.title}</strong>
                    <p>
                      {info.href ? (
                        <a href={info.href} className="contact-link">
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </p>
                    {info.hours && (
                      <span className="contact-hours">{info.hours}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
