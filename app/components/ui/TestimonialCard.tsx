import { ShowMoreToggle } from './ShowMoreToggle'

interface TestimonialCardProps {
  stars: number
  quote: string
  author: {
    name: string
    title: string
    company: string
  }
  companySize?: string
  result: {
    metric: string
    label: string
  }
}

export function TestimonialCard({
  stars,
  quote,
  author,
  companySize,
  result
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card fade-in">
      <div className="testimonial-stars">
        {'⭐'.repeat(stars)}
      </div>
      <ShowMoreToggle maxHeight={90}>
        <p className="testimonial-text">
          &ldquo;{quote}&rdquo;
        </p>
      </ShowMoreToggle>
      <div className="testimonial-author">
        <div className="author-info">
          <strong>{author.name}</strong>
          <span>{author.title}, {author.company}</span>
          {companySize && <span className="company-size">{companySize}</span>}
        </div>
      </div>
      <div className="testimonial-result">
        <span className="result-metric">{result.metric}</span>
        <span className="result-label">{result.label}</span>
      </div>
    </div>
  )
}
