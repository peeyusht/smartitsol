import { deploymentContent } from '@/app/data/deployment'

export function DeploymentSection() {
  return (
    <section id="deployment" className="deployment-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">{deploymentContent.title}</h2>
          <p className="section-subtitle">
            {deploymentContent.subtitle}
          </p>
        </div>

        <div className="deployment-intro fade-in">
          <p
            className="deployment-intro-text"
            dangerouslySetInnerHTML={{ __html: deploymentContent.intro }}
          />
        </div>

        <div className="deployment-grid">
          {deploymentContent.services.map((service, index) => (
            <div key={index} className="deployment-card fade-in">
              <div className="deployment-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="deployment-subtitle">{service.subtitle}</p>
              <p dangerouslySetInnerHTML={{ __html: service.description }} />

              {service.categories.map((category, catIndex) => (
                <div key={catIndex} className="service-category">
                  <h4>{category.title}</h4>
                  <ul className="deployment-features">
                    {category.features.map((feature, featIndex) => (
                      <li key={featIndex}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {service.footer && (
                <div className={`deployment-${service.footer.type}`}>
                  <span dangerouslySetInnerHTML={{ __html: service.footer.content }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="deployment-process fade-in">
          <h3>{deploymentContent.process.title}</h3>
          <div className="process-timeline">
            {deploymentContent.process.steps.map((step) => (
              <div key={step.number} className="timeline-step">
                <div className="timeline-number">{step.number}</div>
                <div className="timeline-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  <span className="timeline-duration">{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="deployment-cta fade-in">
          <div className="deployment-cta-content">
            <h3>{deploymentContent.cta.title}</h3>
            <p>{deploymentContent.cta.description}</p>

            <div className="cta-features">
              {deploymentContent.cta.features.map((feature, index) => (
                <div key={index} className="cta-feature">
                  <span className="cta-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="deployment-cta-btn">
              {deploymentContent.cta.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
