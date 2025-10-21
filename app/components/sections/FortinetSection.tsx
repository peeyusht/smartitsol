import { fortinetContent } from '@/app/data/fortinet'

export function FortinetSection() {
  return (
    <section id="fortinet" className="fortinet-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">{fortinetContent.title}</h2>
          <p className="section-subtitle">
            {fortinetContent.subtitle}
          </p>
        </div>

        <div className="fortinet-intro fade-in">
          <p
            className="fortinet-intro-text"
            dangerouslySetInnerHTML={{ __html: fortinetContent.intro }}
          />
        </div>

        <div className="fortinet-grid">
          {fortinetContent.products.map((product, index) => (
            <div key={index} className="fortinet-card fade-in">
              <div className="fortinet-icon" aria-hidden="true">{product.icon}</div>
              <h3>{product.title}</h3>
              <p className="fortinet-subtitle">{product.subtitle}</p>
              <p dangerouslySetInnerHTML={{ __html: product.description }} />

              <ul className="fortinet-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>

              <div className="fortinet-services-box">
                <h4>Audit & Review Services:</h4>
                <ul>
                  {product.auditServices.map((service, idx) => (
                    <li key={idx}>• {service}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="fortinet-cta fade-in">
          <div className="fortinet-cta-content">
            <h3>{fortinetContent.cta.title}</h3>
            <p>{fortinetContent.cta.description}</p>

            <ul className="fortinet-cta-benefits">
              {fortinetContent.cta.benefits.map((benefit, index) => (
                <li key={index}>✓ {benefit}</li>
              ))}
            </ul>

            <div className="fortinet-cta-pricing">
              <span className="pricing-label">{fortinetContent.cta.pricing.label}</span>
              <span className="pricing-amount">{fortinetContent.cta.pricing.amount}</span>
              <span className="pricing-detail">{fortinetContent.cta.pricing.detail}</span>
            </div>

            <a href="#contact" className="fortinet-cta-btn">
              {fortinetContent.cta.buttonText}
            </a>
          </div>
        </div>

        <div className="fortinet-certifications fade-in">
          <p className="certifications-label">{fortinetContent.certifications.label}</p>
          <div className="certifications-badges">
            {fortinetContent.certifications.badges.map((badge, index) => (
              <span key={index} className="cert-badge">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
