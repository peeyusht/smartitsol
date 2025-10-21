import { statsContent } from '@/app/data/content'
import { StatCard } from '../ui/StatCard'

export function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">{statsContent.title}</h2>
          <p className="section-subtitle">{statsContent.subtitle}</p>
        </div>

        <div className="stats-grid-enhanced fade-in">
          {statsContent.stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
