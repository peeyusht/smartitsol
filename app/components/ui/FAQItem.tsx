interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="faq-item fade-in">
      <h3>{question}</h3>
      <p dangerouslySetInnerHTML={{ __html: answer }} />
    </div>
  )
}
