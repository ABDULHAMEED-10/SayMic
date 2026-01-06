import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SayMic - AI Voice Mic Plugin for Websites",
  description:
    "SayMic lets customers speak instead of typing. Capture orders, bookings, and requests instantly with AI-powered voice-to-text and translation for your business.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
