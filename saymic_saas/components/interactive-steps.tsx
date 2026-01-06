"use client"

import { useState } from "react"
import { Code2, Mic, Zap, Send } from "lucide-react"

export function InteractiveSteps() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      num: 1,
      title: "Embed the Code",
      description: "Add a simple script tag to your website",
      icon: Code2,
      details: "Just one line of code. No complex setup. Works with WordPress, Shopify, custom sites.",
      code: '<script src="https://saymic.com/embed.js"></script>',
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      num: 2,
      title: "Customer Speaks",
      description: "Customer clicks the mic button and speaks",
      icon: Mic,
      details: "They can speak in any language. Natural conversation. No typing needed.",
      code: 'Customer: "One large cappuccino, extra hot"',
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      num: 3,
      title: "AI Converts",
      description: "AI instantly converts speech to structured data",
      icon: Zap,
      details: "Industry-leading accuracy. Understands context. Captures all relevant fields.",
      code: "Product: Cappuccino | Size: Large | Temp: Extra Hot",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      num: 4,
      title: "Instant Lead",
      description: "Lead delivered via email, WhatsApp, or dashboard",
      icon: Send,
      details: "Real-time notifications. Multiple delivery channels. Never miss a lead.",
      code: "Email ✓ | WhatsApp ✓ | Dashboard ✓",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => {
          const StepIcon = step.icon
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                activeStep === idx ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 font-bold`}
                >
                  {step.num}
                </div>
                <StepIcon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              </div>
              <h4 className="font-bold text-foreground text-sm leading-tight">{step.title}</h4>
              <p className="text-xs text-muted-foreground mt-2">{step.description}</p>
            </button>
          )
        })}
      </div>

      {/* Active Step Detail */}
      <div className={`bg-gradient-to-br ${steps[activeStep].color} border-2 border-accent/30 rounded-2xl p-8 md:p-12`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Details */}
          <div className="space-y-6">
            <div>
              <div className="text-6xl font-bold text-accent mb-3">{steps[activeStep].num}</div>
              <h3 className="text-3xl font-bold text-foreground mb-2">{steps[activeStep].title}</h3>
              <p className="text-lg text-muted-foreground">{steps[activeStep].details}</p>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-2 font-bold uppercase tracking-wide">Example Output</p>
              <code className="text-sm text-accent font-mono block break-words">{steps[activeStep].code}</code>
            </div>
          </div>

          {/* Right: Visual Representation */}
          <div className="h-80 bg-card/50 border-2 border-accent/30 rounded-xl flex items-center justify-center relative overflow-hidden">
            {activeStep === 0 && (
              <div className="text-center space-y-4">
                <Code2 className="w-16 h-16 text-accent mx-auto" />
                <p className="text-foreground font-bold text-lg">Simple Integration</p>
                <p className="text-sm text-muted-foreground">Copy & paste code</p>
              </div>
            )}
            {activeStep === 1 && (
              <div className="text-center space-y-4 w-full px-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 animate-pulse">
                  <Mic className="w-8 h-8 text-accent" />
                </div>
                <p className="text-foreground font-bold">Customer Speaking</p>
                <p className="text-sm text-muted-foreground italic">"Tell us your order..."</p>
                <div className="flex gap-1 justify-center mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-8 bg-accent/30 rounded w-1 animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div className="space-y-4 w-full px-6">
                <Zap className="w-16 h-16 text-accent mx-auto" />
                <div className="space-y-3">
                  <div className="h-2 bg-accent/30 rounded-full w-3/4 mx-auto"></div>
                  <div className="h-2 bg-accent/30 rounded-full w-full mx-auto"></div>
                  <div className="h-2 bg-accent/30 rounded-full w-2/3 mx-auto"></div>
                </div>
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="text-xs text-accent font-bold mb-1 uppercase">Processing</p>
                  <p className="text-xs text-accent">Data captured & structured</p>
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div className="space-y-3 w-full px-6">
                <Send className="w-16 h-16 text-accent mx-auto" />
                {[
                  { icon: "✉", text: "Email sent" },
                  { icon: "💬", text: "WhatsApp notified" },
                  { icon: "📊", text: "Dashboard updated" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-accent/20 border border-accent/30 rounded-lg"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-xs text-accent-foreground font-bold">✓</span>
                    </div>
                    <span className="text-sm text-accent font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
