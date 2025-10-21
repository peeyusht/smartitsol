import { testimonialsContent } from '@/app/data/testimonials'
import { TestimonialCard } from '../ui/TestimonialCard'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">{testimonialsContent.title}</h2>
          <p className="section-subtitle">{testimonialsContent.subtitle}</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
