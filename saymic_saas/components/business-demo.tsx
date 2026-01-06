"use client"

import { useState } from "react"
import { Navigation, Utensils, Zap, BarChart3, Users } from "lucide-react"

const businesses = [
  {
    name: "Taxi & Ride Services",
    icon: Navigation,
    scenario: "Ride Request Capture",
    before: "Phone operator manually types location, misses details, caller repeats 3 times",
    after:
      "Customer says: 'Pick me up from Mall entrance, going to Airport'. AI captures address, destination, passenger count instantly.",
    mockup: "From: Mall Entrance | To: Airport | Passengers: 1 | Luggage: Yes",
    benefit: "Eliminate missed calls, 40% more ride requests captured",
  },
  {
    name: "Restaurants & Coffee",
    icon: Utensils,
    scenario: "Delivery Order Platform",
    before: "Call comes in, staff writes order on paper, re-reads to confirm, customer waits 5 minutes",
    after: "Customer clicks mic, orders complete meal in 30 seconds. Kitchen gets digital receipt instantly.",
    mockup: "Order: Biryani (2), Samosas (3), Mango Lassi (2) | Delivery to: Address saved",
    benefit: "3x faster orders, reduce phone lines needed",
  },
  {
    name: "Salons & Beauty",
    icon: Users,
    scenario: "Appointment Booking",
    before: "Calls pile up, receptionist manually books in system, customers on hold waiting",
    after: "Customer speaks: 'Haircut and color, Friday 3pm'. Auto-books, sends confirmation.",
    mockup: "Service: Haircut + Color | Date: Friday | Time: 3:00 PM | Duration: 2 hours",
    benefit: "Never miss a booking, reduce staff time by 50%",
  },
  {
    name: "Service Businesses",
    icon: Zap,
    scenario: "Lead Generation & Scheduling",
    before: "Manual data entry slows down team, customers get frustrated with delays",
    after: "Voice-to-structured-data in seconds. Teams focus on delivering service, not typing.",
    mockup: "Lead: Qualified | Status: Ready | Channel: Voice | Time: Instant",
    benefit: "25% more productivity, happier customers and staff",
  },
]

export function BusinessDemo() {
  const [selectedIdx, setSelectedIdx] = useState(0)

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h3 className="text-4xl font-bold text-foreground">Real Business Scenarios</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how different businesses use SayMic to convert more customers and save time
        </p>
      </div>

      {/* Scenario Selector */}
      <div className="flex flex-wrap justify-center gap-3">
        {businesses.map((biz, idx) => {
          const IconComponent = biz.icon
          return (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg border-2 font-semibold transition-all ${
                selectedIdx === idx
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border text-muted-foreground hover:border-accent/50"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span>{biz.name}</span>
            </button>
          )
        })}
      </div>

      {/* Selected Scenario Detail */}
      <div className="border border-border rounded-2xl overflow-hidden bg-card/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent/30 to-primary/30 border-b border-border p-8">
          <div className="flex items-start gap-4">
            {(() => {
              const IconComponent = businesses[selectedIdx].icon
              return <IconComponent className="w-8 h-8 text-accent flex-shrink-0" />
            })()}
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-1">{businesses[selectedIdx].name}</h4>
              <p className="text-accent font-semibold">{businesses[selectedIdx].scenario}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Before/After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-500/5 border border-red-500/30 rounded-xl p-6">
              <p className="text-xs font-bold text-red-500 mb-3 uppercase tracking-wide">Before SayMic</p>
              <p className="text-foreground leading-relaxed">{businesses[selectedIdx].before}</p>
            </div>
            <div className="bg-accent/5 border border-accent/30 rounded-xl p-6">
              <p className="text-xs font-bold text-accent mb-3 uppercase tracking-wide">With SayMic</p>
              <p className="text-foreground leading-relaxed">{businesses[selectedIdx].after}</p>
            </div>
          </div>

          {/* Data Capture Mockup */}
          <div className="bg-card border border-accent/20 rounded-lg p-6 font-mono text-sm">
            <p className="text-accent mb-3 font-bold text-xs uppercase">Captured Data</p>
            <p className="text-foreground">{businesses[selectedIdx].mockup}</p>
          </div>

          {/* Key Benefit */}
          <div className="pt-4 border-t border-border flex items-start gap-3">
            <BarChart3 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-accent">Impact</p>
              <p className="text-foreground">{businesses[selectedIdx].benefit}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
