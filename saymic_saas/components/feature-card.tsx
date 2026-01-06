import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string | ReactNode
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-4 md:p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors">
      <div className="mb-3 md:mb-4 text-accent text-2xl md:text-3xl">{icon}</div>
      <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
