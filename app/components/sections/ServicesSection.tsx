import { servicesContent } from '@/app/data/services'
import { ServiceCard } from '../ui/ServiceCard'

export function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">{servicesContent.title}</h2>
          <p className="section-subtitle">{servicesContent.subtitle}</p>
        </div>

        <div className="services-grid">
          {servicesContent.services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
