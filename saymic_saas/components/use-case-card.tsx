import type { ReactNode } from "react"

interface UseCaseCardProps {
  icon: ReactNode
  industry: string
  benefit: string
}

export function UseCaseCard({ icon, industry, benefit }: UseCaseCardProps) {
  return (
    <div className="p-5 md:p-6 lg:p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
      <div className="mb-3 md:mb-4 text-accent text-3xl md:text-4xl">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{industry}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{benefit}</p>
    </div>
  )
}
