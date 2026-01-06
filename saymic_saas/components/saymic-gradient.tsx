import type { ReactNode } from "react"

interface SayMicGradientProps {
  className?: string
  children?: ReactNode
}

export function SayMicGradient({ className = "", children }: SayMicGradientProps) {
  return (
    <span className={`font-bold bg-gradient-to-r from-accent via-purple-600 to-blue-500 bg-clip-text text-transparent ${className}`}>
      {children || "SayMic"}
    </span>
  )
}

