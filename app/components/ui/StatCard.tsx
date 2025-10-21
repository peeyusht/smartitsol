interface StatCardProps {
  number: string
  label: string
  context: string
  since: string
}

export function StatCard({ number, label, context, since }: StatCardProps) {
  return (
    <div className="stat-card">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
      <span className="stat-context">{context}</span>
      <span className="stat-since">{since}</span>
    </div>
  )
}
