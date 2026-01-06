"use client"

import { useState } from "react"
import { Code2, Mic, Zap, Send, Smartphone, Building2, Car, CheckCircle2 } from "lucide-react"

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
    <div className="space-y-8 md:space-y-12 px-4">
      {/* Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {steps.map((step, idx) => {
          const StepIcon = step.icon
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl border-2 transition-all text-left ${
                activeStep === idx ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
              }`}
            >
              <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 font-bold text-sm md:text-base`}
                >
                  {step.num}
                </div>
                <StepIcon className="w-4 h-4 md:w-5 md:h-5 text-accent mt-0.5 flex-shrink-0" />
              </div>
              <h4 className="font-bold text-foreground text-xs md:text-sm leading-tight">{step.title}</h4>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1.5 md:mt-2">{step.description}</p>
            </button>
          )
        })}
      </div>

      {/* Active Step Detail */}
      <div className={`bg-gradient-to-br ${steps[activeStep].color} border-2 border-accent/30 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 xl:p-12`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left: Details */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2 md:mb-3">{steps[activeStep].num}</div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">{steps[activeStep].title}</h3>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">{steps[activeStep].details}</p>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-3 md:p-4">
              <p className="text-[10px] md:text-xs text-muted-foreground mb-2 font-bold uppercase tracking-wide">Example Output</p>
              <code className="text-xs md:text-sm text-accent font-mono block break-words">{steps[activeStep].code}</code>
            </div>
          </div>

          {/* Right: Visual Representation */}
          <div className="h-64 md:h-72 lg:h-80 bg-card/50 border-2 border-accent/30 rounded-lg md:rounded-xl flex items-center justify-center relative overflow-hidden">
            {activeStep === 0 && (
              <div className="text-center space-y-3 md:space-y-4 px-2">
                <Code2 className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-accent mx-auto" />
                <p className="text-foreground font-bold text-base md:text-lg">Simple Integration</p>
                <p className="text-xs md:text-sm text-muted-foreground">Copy & paste code</p>
              </div>
            )}
            {activeStep === 1 && (
              <div className="text-center space-y-3 md:space-y-4 w-full px-4 md:px-6">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-accent/20 animate-pulse">
                  <Mic className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-accent" />
                </div>
                <p className="text-foreground font-bold text-sm md:text-base">Customer Speaking</p>
                <p className="text-xs md:text-sm text-muted-foreground italic">"Tell us your order..."</p>
                <div className="flex gap-1 justify-center mt-3 md:mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-6 md:h-8 bg-accent/30 rounded w-1 animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div className="space-y-3 md:space-y-4 w-full px-3 md:px-6">
                {/* Phone Prototype Flow */}
                <div className="space-y-2 md:space-y-3">
                  {/* Step 1: Customer with Phone Speaking */}
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-card/50 rounded-lg border border-accent/20">
                    <div className="relative">
                      <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                      <Mic className="w-3 h-3 md:w-4 md:h-4 text-accent absolute -bottom-0.5 -right-0.5 md:-bottom-1 md:-right-1 bg-background rounded-full p-0.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-xs font-semibold text-foreground">Customer Speaking</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground italic break-words">"Order a cab from Mall to Airport"</p>
                    </div>
                  </div>

                  {/* Step 2: AI Processing */}
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-accent/10 rounded-lg border border-accent/30">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-accent animate-pulse flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-xs font-semibold text-accent">AI Processing...</p>
                      <div className="flex gap-1 mt-1">
                        <div className="h-1 bg-accent/50 rounded-full w-6 md:w-8 animate-pulse" style={{ animationDelay: '0ms' }}></div>
                        <div className="h-1 bg-accent/50 rounded-full w-6 md:w-8 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                        <div className="h-1 bg-accent/50 rounded-full w-6 md:w-8 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Structured Data Captured */}
                  <div className="p-2 md:p-3 bg-card/50 rounded-lg border border-accent/20">
                    <p className="text-[10px] md:text-xs font-semibold text-foreground mb-1.5 md:mb-2">Captured Data:</p>
                    <div className="space-y-1 text-[10px] md:text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">From:</span>
                        <span className="text-foreground">Mall Entrance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">To:</span>
                        <span className="text-foreground">Airport</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="text-foreground">Cab Request</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Business Receives Lead */}
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-card/50 rounded-lg border border-accent/20">
                    <Building2 className="w-6 h-6 md:w-8 md:h-8 text-accent flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-xs font-semibold text-foreground">Business Receives Lead</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground">Notification sent to dispatch</p>
                    </div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full animate-pulse flex-shrink-0"></div>
                  </div>

                  {/* Step 5: Cab Arrived */}
                  <div className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-accent/10 rounded-lg border border-accent/30">
                    <Car className="w-6 h-6 md:w-8 md:h-8 text-accent flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-xs font-semibold text-foreground">Cab Dispatched</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground">Driver notified, on the way</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  </div>
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div className="space-y-2 md:space-y-3 w-full px-4 md:px-6">
                <Send className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-accent mx-auto" />
                {[
                  { icon: "✉", text: "Email sent" },
                  { icon: "💬", text: "WhatsApp notified" },
                  { icon: "📊", text: "Dashboard updated" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg"
                    style={{ backgroundColor: '#FFE5D9', border: '1px solid #F5D5C8' }}
                  >
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] md:text-xs text-accent-foreground font-bold">✓</span>
                    </div>
                    <span className="text-xs md:text-sm text-accent font-semibold">{item.text}</span>
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
