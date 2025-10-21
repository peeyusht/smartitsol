import { Service } from '@/app/data/services'

interface ServiceCardProps extends Service {
  className?: string
}

export function ServiceCard({
  icon,
  title,
  description,
  fullDescription,
  benefits,
  stat,
  testimonial,
  cta,
  className = ''
}: ServiceCardProps) {
  return (
    <div className={`service-card fade-in ${className}`}>
      <div className="service-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>

      <p><strong>{description}</strong></p>
      {fullDescription && <p>{fullDescription}</p>}

      <ul className="service-benefits">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      {stat && (
        <p className="service-stat">
          <strong>{stat.label} {stat.value}</strong> {stat.context}
        </p>
      )}

      {testimonial && (
        <p className="service-testimonial">
          &ldquo;{testimonial.quote}&rdquo; <strong>— {testimonial.author}</strong>
        </p>
      )}

      {cta && (
        <p className="service-cta">
          <a href={cta.href} className="service-link">{cta.text}</a>
        </p>
      )}
    </div>
  )
}
