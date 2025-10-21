import { heroContent } from '@/app/data/content'

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="trust-indicators">
            {heroContent.badges.map((badge, index) => (
              <span key={index} className="trust-badge">
                {badge.icon} {badge.text}
              </span>
            ))}
          </div>

          <h1>{heroContent.headline}</h1>

          <p className="hero-subtitle">
            <strong>{heroContent.subtitle}</strong>
          </p>

          <div className="hero-features">
            {heroContent.features.map((feature, index) => (
              <div key={index} className="hero-feature">
                ✓ {feature}
              </div>
            ))}
          </div>

          <a href="#contact" className="hero-cta">
            <span className="cta-main">{heroContent.cta.main}</span>
            <span className="cta-sub">{heroContent.cta.sub}</span>
          </a>

          <div className="social-proof-mini">
            <p>
              &ldquo;{heroContent.socialProof.quote}&rdquo;{' '}
              <strong>— {heroContent.socialProof.author}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
