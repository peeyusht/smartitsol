import { faqContent } from '@/app/data/faq'
import { FAQItem } from '../ui/FAQItem'

export function FAQSection() {
  return (
    <section className="faq">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">{faqContent.title}</h2>
        </div>

        <div className="faq-grid">
          {faqContent.faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
