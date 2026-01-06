import type { ReactNode } from "react"

interface HeadingProps {
  level: 1 | 2 | 3
  children: ReactNode
  className?: string
}

export function Heading({ level, children, className = "" }: HeadingProps) {
  const baseStyles = "font-bold text-foreground"

  const sizes = {
    1: "text-4xl md:text-5xl lg:text-6xl leading-tight",
    2: "text-3xl md:text-4xl lg:text-5xl leading-tight",
    3: "text-xl md:text-2xl lg:text-3xl",
  }

  const Component = `h${level}` as const

  return <Component className={`${baseStyles} ${sizes[level]} ${className}`}>{children}</Component>
}
