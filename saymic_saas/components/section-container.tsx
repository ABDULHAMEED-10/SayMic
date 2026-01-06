import type { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className = "", id }: SectionContainerProps) {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  )
}
