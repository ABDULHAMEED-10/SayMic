"use client"

import { Heading } from "@/components/heading"
import { Button } from "@/components/button"
import { SectionContainer } from "@/components/section-container"
import { FeatureCard } from "@/components/feature-card"
import { UseCaseCard } from "@/components/use-case-card"
import { BusinessDemo } from "@/components/business-demo"
import { InteractiveSteps } from "@/components/interactive-steps"
import {
  Mic,
  MessageSquare,
  Palette,
  Keyboard,
  Bell,
  UtensilsCrossed,
  Sparkles,
  CheckCircle2,
  Globe,
  Shield,
  TrendingUp,
  Navigation,
  Smartphone,
  Tablet,
  Monitor,
  Building2,
  Stethoscope,
  GraduationCap,
  Home as HomeIcon,
  Wrench,
  Car,
  ShoppingBag,
  Calendar,
  Briefcase,
  Heart,
  Dumbbell,
  Camera,
  Music,
  Plane,
} from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="SayMic Logo" width={40} height={40} className="w-10 h-10" priority />
            <span className="font-bold text-lg text-foreground">SayMic</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition">
              How it works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
            <Button variant="primary" className="text-sm py-2 px-4">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <SectionContainer className="flex flex-col items-center justify-center min-h-screen pt-20 relative">
        <div className="absolute inset-0 opacity-5 -z-10">
          <Image src="/images/hero-background.jpg" alt="" fill className="object-cover" />
        </div>

        <div className="text-center max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent text-sm font-medium">AI Voice Technology for Business</span>
          </div>
          <Heading level={1} className="mb-6">
            Capture Customer Voice Instantly
          </Heading>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Replace forms and phone calls with a voice button. SayMic lets customers speak their orders, bookings, and
            requests naturally. Powered by AI. Works everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" className="text-base">
              Start Free Trial
            </Button>
            <Button variant="outline" className="text-base bg-transparent">
              Watch Demo
            </Button>
          </div>

          <div className="mt-20 relative">
            <div className="w-48 h-48 mx-auto">
              <Image
                src="/images/logo.png"
                alt="SayMic AI Voice Microphone"
                width={192}
                height={192}
                className="w-full h-full object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer id="how-it-works" className="bg-card/50">
        <Heading level={2} className="text-center mb-8">
          How It Works
        </Heading>
        <InteractiveSteps />
      </SectionContainer>

      {/* Seamless Experience Across All Devices */}
      <SectionContainer id="seamless-experience" className="bg-background">
        <Heading level={2} className="text-center mb-12">
          Seamless Experience Across All Devices
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-border bg-card/50">
            <Smartphone className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Mobile</h3>
            <p className="text-muted-foreground leading-relaxed">
              Perfect for on-the-go customers. Tap the voice button on your phone, speak naturally, and submit your
              order instantly. Works in any mobile browser—no app download needed.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card/50">
            <Tablet className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Tablet</h3>
            <p className="text-muted-foreground leading-relaxed">
              Works perfectly on any screen size. Whether customers are browsing on an iPad or Android tablet, the voice
              interface adapts seamlessly to provide the best experience.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card/50">
            <Monitor className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Desktop</h3>
            <p className="text-muted-foreground leading-relaxed">
              Powerful on large screens. Your business website gets a professional voice interface that builds customer
              confidence and drives more conversions with better capture rates.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Business Scenarios */}
      <SectionContainer id="business-scenarios" className="bg-primary/5">
        <BusinessDemo />
      </SectionContainer>

      {/* Use Cases */}
      <SectionContainer id="industries">
        <Heading level={2} className="text-center mb-12">
          Built for Every Business
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UseCaseCard
            icon={<Navigation className="w-8 h-8" />}
            industry="Cabs & Taxi Services"
            benefit="Capture ride requests instantly. Drivers never miss a call again."
          />
          <UseCaseCard
            icon={<UtensilsCrossed className="w-8 h-8" />}
            industry="Restaurants & Coffee Shops"
            benefit="Voice ordering system that works like a phone call but faster and organized."
          />
          <UseCaseCard
            icon={<Sparkles className="w-8 h-8" />}
            industry="Salons & Beauty Services"
            benefit="Book appointments through voice. No more missed booking calls."
          />
          <UseCaseCard
            icon={<TrendingUp className="w-8 h-8" />}
            industry="Hotels & Hospitality"
            benefit="Instant reservations and event inquiries without a phone line."
          />
          <UseCaseCard
            icon={<Stethoscope className="w-8 h-8" />}
            industry="Healthcare & Clinics"
            benefit="Schedule appointments, capture symptoms, and handle inquiries through voice."
          />
          <UseCaseCard
            icon={<GraduationCap className="w-8 h-8" />}
            industry="Education & Training"
            benefit="Enrollment inquiries, course bookings, and student support via voice."
          />
          <UseCaseCard
            icon={<HomeIcon className="w-8 h-8" />}
            industry="Real Estate"
            benefit="Property inquiries, viewing bookings, and lead capture through natural conversation."
          />
          <UseCaseCard
            icon={<Wrench className="w-8 h-8" />}
            industry="Home Services"
            benefit="Service requests, repair bookings, and maintenance scheduling made simple."
          />
          <UseCaseCard
            icon={<Car className="w-8 h-8" />}
            industry="Auto Services"
            benefit="Service appointments, parts orders, and vehicle inquiries captured instantly."
          />
          <UseCaseCard
            icon={<ShoppingBag className="w-8 h-8" />}
            industry="Retail & E-commerce"
            benefit="Product inquiries, order tracking, and customer support through voice."
          />
          <UseCaseCard
            icon={<Calendar className="w-8 h-8" />}
            industry="Event Management"
            benefit="Event bookings, ticket inquiries, and venue reservations via voice."
          />
          <UseCaseCard
            icon={<Briefcase className="w-8 h-8" />}
            industry="Professional Services"
            benefit="Consultation bookings, service inquiries, and client onboarding simplified."
          />
          <UseCaseCard
            icon={<Heart className="w-8 h-8" />}
            industry="Fitness & Wellness"
            benefit="Class bookings, membership inquiries, and personal training sessions."
          />
          <UseCaseCard
            icon={<Dumbbell className="w-8 h-8" />}
            industry="Gyms & Sports"
            benefit="Membership inquiries, class schedules, and facility bookings through voice."
          />
          <UseCaseCard
            icon={<Camera className="w-8 h-8" />}
            industry="Photography & Media"
            benefit="Session bookings, package inquiries, and event photography requests."
          />
          <UseCaseCard
            icon={<Music className="w-8 h-8" />}
            industry="Entertainment & Events"
            benefit="Booking inquiries, event planning, and entertainment services via voice."
          />
          <UseCaseCard
            icon={<Plane className="w-8 h-8" />}
            industry="Travel & Tourism"
            benefit="Travel inquiries, booking requests, and itinerary planning through voice."
          />
          <UseCaseCard
            icon={<Building2 className="w-8 h-8" />}
            industry="Property Management"
            benefit="Maintenance requests, tenant inquiries, and property viewings captured instantly."
          />
        </div>
      </SectionContainer>

      {/* Features */}
      <SectionContainer id="features" className="bg-card/50">
        <Heading level={2} className="text-center mb-12">
          Powerful Features
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Mic className="w-6 h-6" />}
            title="Voice-to-Text with AI"
            description="Industry-leading speech recognition. Understands context and captures structured data."
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Multi-language Translation"
            description="Customers speak in any language. Leads arrive in your language."
          />
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Industry-Specific Fields"
            description="Customizable lead fields for taxis, restaurants, salons, and more."
          />
          <FeatureCard
            icon={<Palette className="w-6 h-6" />}
            title="Customizable Branding"
            description="Match your brand colors. Custom mic icon and styling options."
          />
          <FeatureCard
            icon={<Keyboard className="w-6 h-6" />}
            title="Keyboard Shortcuts"
            description="Website-specific mic shortcuts for power users."
          />
          <FeatureCard
            icon={<Bell className="w-6 h-6" />}
            title="Multiple Notifications"
            description="Email, WhatsApp, or dashboard. You choose how to receive leads."
          />
        </div>
      </SectionContainer>

      {/* Why SayMic - Trust & Credibility */}
      <SectionContainer className="bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent text-sm font-medium">Trusted by Industry Leaders</span>
            </div>
            <Heading level={2} className="mb-6">
              Why Businesses Choose SayMic
            </Heading>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade security, proven ROI, and 24/7 support. Trusted by thousands of businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-lg border border-border bg-card/30 hover:bg-card/60 transition-all hover:border-accent/50 text-center">
              <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg text-foreground mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                GDPR & SOC 2 compliant. Military-grade encryption protects your customer data.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card/30 hover:bg-card/60 transition-all hover:border-accent/50 text-center">
              <TrendingUp className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg text-foreground mb-2">Proven Results</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                300% increase in lead capture. 70% faster response times. Measurable ROI.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card/30 hover:bg-card/60 transition-all hover:border-accent/50 text-center">
              <Globe className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg text-foreground mb-2">Global Platform</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                50+ countries. 99.99% uptime. Reliable infrastructure you can depend on.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-card/30 border border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-6">Trusted by leading businesses worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">10,000+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">99.99% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA */}
      <SectionContainer className="bg-primary/10 text-center">
        <Heading level={2} className="mb-6">
          Ready to Start Capturing Voice Leads?
        </Heading>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join businesses across the USA, UK, and Europe already using SayMic to convert more customers.
        </p>
        <Button variant="primary" className="text-lg px-8 py-4">
          Get Started with SayMic
        </Button>
      </SectionContainer>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/logo.png" alt="SayMic Logo" width={28} height={28} className="w-7 h-7" />
                <span className="font-bold text-foreground">SayMic</span>
              </div>
              <p className="text-sm text-muted-foreground">AI voice mic plugin for websites</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Use Cases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 SayMic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
