import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  className?: string
  onClick?: () => void
  [key: string]: any
}

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"

  const variants = {
    primary: "bg-accent text-accent-foreground hover:bg-opacity-90 focus:ring-offset-background",
    secondary: "bg-primary text-primary-foreground hover:bg-opacity-90 focus:ring-offset-background",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-offset-background",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
