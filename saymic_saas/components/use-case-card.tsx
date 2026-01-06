import type { ReactNode } from "react"

interface UseCaseCardProps {
  icon: ReactNode
  industry: string
  benefit: string
}

export function UseCaseCard({ icon, industry, benefit }: UseCaseCardProps) {
  return (
    <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
      <div className="mb-4 text-accent text-4xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{industry}</h3>
      <p className="text-muted-foreground leading-relaxed">{benefit}</p>
    </div>
  )
}
