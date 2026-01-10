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
  Laptop,
  Key,
  Settings,
  Zap,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { SayMicGradient } from "@/components/saymic-gradient"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAllIndustries, setShowAllIndustries] = useState(false)
  const [showAllFeatures, setShowAllFeatures] = useState(false)

  return (
    <div id="top" className="w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <a 
              href="#top" 
              className="flex items-center hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label="Go to top of page"
            >
              <Image src="/images/logo.png" alt="SayMic Logo" width={40} height={40} className="w-10 h-10 flex-shrink-0 object-contain" priority />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="#how-it-works" 
                className="text-sm text-muted-foreground hover:text-foreground transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Navigate to How it works section"
              >
                How it works
              </a>
              <a 
                href="#business-scenarios" 
                className="text-sm text-muted-foreground hover:text-foreground transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Navigate to Business scenarios section"
              >
                Use Cases
              </a>
              <a 
                href="#industries" 
                className="text-sm text-muted-foreground hover:text-foreground transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Navigate to Industries section"
              >
                Industries
              </a>
              <a 
                href="#features" 
                className="text-sm text-muted-foreground hover:text-foreground transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
                aria-label="Navigate to Features section"
              >
                Features
              </a>
              <ThemeToggle />
              <Button variant="primary" className="text-sm py-2 px-4">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-3">
                <a 
                  href="#how-it-works" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition py-2 px-3 rounded-lg hover:bg-accent/10"
                >
                  How it works
                </a>
                <a 
                  href="#business-scenarios" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition py-2 px-3 rounded-lg hover:bg-accent/10"
                >
                  Use Cases
                </a>
                <a 
                  href="#industries" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition py-2 px-3 rounded-lg hover:bg-accent/10"
                >
                  Industries
                </a>
                <a 
                  href="#features" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition py-2 px-3 rounded-lg hover:bg-accent/10"
                >
                  Features
                </a>
                <Button variant="primary" className="w-full mt-2 text-sm py-2">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <SectionContainer className="flex flex-col items-center justify-center min-h-screen pt-16 md:pt-20">
        <div className="text-center max-w-4xl px-4">
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent text-xs md:text-sm font-medium">Voice To Lead Solution for Your Website</span>
          </div>
          <Heading level={1} className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Never Miss a Booking Again
          </Heading>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto px-4">
            The B2B voice to lead solution. Embed <SayMicGradient /> on your website. Customers speak directly to your business. Orders, bookings, and requests captured instantly. Delivered to your email, WhatsApp, or dashboard. Zero missed calls. Maximum conversions.
          </p>
          <p className="text-base md:text-lg text-accent font-semibold mb-6 md:mb-8">
            Connect Your Customer Through Voice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-10">
            <Button variant="primary" className="text-base">
              Start Free Trial
            </Button>
            <Button variant="outline" className="text-base bg-transparent">
              Watch Demo
            </Button>
          </div>
          
          {/* Rixon Logo */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="text-xs md:text-sm text-muted-foreground">Powered by</span>
            <a 
              href="https://rixon.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity inline-flex items-center justify-center p-1.5 rounded-md bg-purple-800 border border-purple-700 shadow-sm"
            >
              <Image 
                src="/images/rixon logo.png" 
                alt="Rixon" 
                width={80} 
                height={32} 
                className="h-4 md:h-5 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop/Laptop Screen Prototype - Showing SayMic on Business Website */}
          <div className="mt-8 md:mt-12 lg:mt-16 w-full max-w-6xl mx-auto px-4">
            <div className="relative">
              {/* Laptop/Desktop Frame */}
              <div className="relative mx-auto">
                {/* Laptop Base */}
                <div className="bg-gradient-to-b from-muted/50 to-muted/30 rounded-b-xl md:rounded-b-2xl p-1.5 md:p-2 lg:p-3 shadow-2xl">
                  {/* Screen Frame */}
                  <div className="bg-gradient-to-b from-card/90 to-card/70 border-2 md:border-4 border-border rounded-t-xl md:rounded-t-2xl p-1 md:p-1.5 lg:p-2 shadow-inner">
                    {/* Screen Content - Business Website with SayMic */}
                    <div className="bg-gradient-to-b from-background to-background/95 rounded-t-lg md:rounded-t-xl min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
                      {/* Desktop Browser Bar */}
                      <div className="flex items-center gap-1 md:gap-2 mb-3 md:mb-4 pb-2 md:pb-3 border-b border-border bg-card/50 px-2 md:px-4 py-1.5 md:py-2 rounded-t-lg md:rounded-t-xl">
                        <div className="flex gap-1 md:gap-2">
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-card/30"></div>
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-card/30"></div>
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-card/30"></div>
                        </div>
                        <div className="flex-1 bg-background rounded-lg px-2 md:px-4 py-1 md:py-1.5 mx-2 md:mx-4 border border-border">
                          <p className="text-[10px] md:text-xs text-muted-foreground truncate">glamoursalon.com/book-appointment</p>
                        </div>
                        <Laptop className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground flex-shrink-0" />
                      </div>

                      {/* Business Website Content */}
                      <div className="p-3 md:p-4 lg:p-6 xl:p-8">
                        {/* Business Header */}
                        <div className="mb-4 md:mb-6 pb-3 md:pb-4 border-b border-border">
                          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-1 md:mb-2">Glamour Salon</h2>
                          <p className="text-xs md:text-sm text-muted-foreground">Book your appointment in seconds</p>
                        </div>

                        {/* SayMic Embedded on Business Website */}
                        <div className="mb-3 md:mb-4 flex flex-col items-center justify-center gap-1.5 md:gap-2">
                          <div className="relative">
                            <button className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center">
                                <Mic className="w-4 h-4 md:w-5 md:w-6 text-accent-foreground group-hover:scale-110 transition-transform" />
                              </div>
                              <span className="whitespace-nowrap">Speak to Glamour Salon</span>
                            </button>
                          </div>
                          <div className="bg-accent/20 px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-accent/30 shadow-sm">
                            <span className="text-[10px] md:text-xs font-bold text-accent">SayMic</span>
                          </div>
                        </div>
                        <p className="text-center text-[10px] md:text-xs text-muted-foreground mb-4 md:mb-6 px-2">
                          SayMic embedded on Glamour Salon's website • Customer speaks directly to the business
                        </p>

                        {/* Flow Visualization - Customer Using SayMic */}
                        <div className="space-y-3 md:space-y-4 lg:space-y-5 max-w-3xl mx-auto">
                          {/* Step 1: Customer Speaking to Business via SayMic */}
                          <div className="flex items-start gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-5 xl:p-6 bg-accent/10 rounded-xl md:rounded-2xl border-2 border-accent/30 backdrop-blur-sm">
                            <div className="w-10 h-10 md:w-12 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0 border-2 border-accent-foreground/20 shadow-lg animate-pulse">
                              <Mic className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-accent-foreground" />
                            </div>
                            <div className="flex-1 pt-1 md:pt-2">
                              <p className="text-xs md:text-sm text-accent font-semibold mb-1">Speaking to Glamour Salon</p>
                              <p className="text-sm md:text-base lg:text-lg font-semibold text-foreground mb-1 md:mb-2">Customer Request:</p>
                              <p className="text-xs md:text-sm lg:text-base text-muted-foreground italic leading-relaxed">
                                "Book an appointment for hair cut tomorrow at 3pm"
                              </p>
                            </div>
                          </div>
                          
                          {/* Step 2: SayMic Converts Speech to Structured Lead */}
                          <div className="p-3 md:p-4 lg:p-5 xl:p-6 bg-card rounded-xl md:rounded-2xl border border-accent/20 shadow-sm">
                            <div className="flex items-center gap-2 mb-3 md:mb-4">
                              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                              <p className="text-xs md:text-sm text-accent font-semibold">SayMic converting voice to structured lead...</p>
                            </div>
                            <p className="text-sm md:text-base lg:text-lg font-semibold text-foreground mb-3 md:mb-4">Lead Captured:</p>
                            <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 text-xs md:text-sm lg:text-base xl:text-lg">
                              <div className="flex justify-between items-center p-2 md:p-3 bg-accent/5 rounded-lg border border-accent/10">
                                <span className="text-muted-foreground">Service:</span>
                                <span className="text-foreground font-semibold">Hair Cut</span>
                              </div>
                              <div className="flex justify-between items-center p-2 md:p-3 bg-accent/5 rounded-lg border border-accent/10">
                                <span className="text-muted-foreground">Date/Time:</span>
                                <span className="text-foreground font-semibold">Tomorrow 3pm</span>
                              </div>
                            </div>
                            <p className="text-[10px] md:text-xs text-muted-foreground mt-2 md:mt-3 italic">Custom fields configured for salon business</p>
                          </div>
                          
                          {/* Step 3: Business Confirms */}
                          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 p-3 md:p-4 lg:p-5 bg-accent/20 rounded-xl md:rounded-2xl border-2 border-accent/40 shadow-lg">
                            <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-accent-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs md:text-sm text-accent font-semibold mb-1">Booking Confirmed</p>
                              <p className="text-xs md:text-sm lg:text-base xl:text-lg text-foreground font-semibold break-words">Glamour Salon confirmed your appointment • No missed call!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements for Large Screens */}
                <div className="hidden lg:block absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                <div className="hidden lg:block absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer id="how-it-works" className="bg-card/50">
        <Heading level={2} className="text-center mb-4 text-2xl md:text-3xl lg:text-4xl px-4">
          How SayMic Works for Your Business
        </Heading>
        <p className="text-center text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Embed SayMic on your website. Customers speak directly to your business. Never miss a booking again.
        </p>
        <InteractiveSteps />
      </SectionContainer>

      {/* Business Scenarios */}
      <SectionContainer id="business-scenarios" className="bg-primary/5">
        <BusinessDemo />
      </SectionContainer>

      {/* Use Cases */}
      <SectionContainer id="industries">
        <Heading level={2} className="text-center mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl px-4">
          Built for Every Business
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4">
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
          {showAllIndustries && (
            <>
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
            </>
          )}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAllIndustries(!showAllIndustries)}
            className="text-sm md:text-base"
          >
            {showAllIndustries ? "View Less" : "View More"}
          </Button>
        </div>
      </SectionContainer>

      {/* Features */}
      <SectionContainer id="features" className="bg-card/50">
        <Heading level={2} className="text-center mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl px-4">
          Powerful Features
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
          <FeatureCard
            icon={<Key className="w-6 h-6" />}
            title="Unique Business Key"
            description="Each business gets a unique embed code and key. Your SayMic is tied specifically to your business, ensuring leads go directly to you."
          />
          <FeatureCard
            icon={<Mic className="w-6 h-6" />}
            title="Speech to Structured Text"
            description="Customers speak naturally. SayMic converts voice to structured, actionable data—ready for your business system."
          />
          <FeatureCard
            icon={<Settings className="w-6 h-6" />}
            title="Industry-Specific Fields"
            description="Customize fields for your industry: pickup/drop for cabs, orders for restaurants, appointments for salons. Leads parsed accurately."
          />
          <FeatureCard
            icon={<Palette className="w-6 h-6" />}
            title="Customizable Branding"
            description="Match your brand perfectly. Customize the mic icon, shortcut name, colors, and styling to fit your website."
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Multi-language Support"
            description="Customers speak in any language. SayMic translates and delivers leads in your preferred language automatically."
          />
          <FeatureCard
            icon={<Bell className="w-6 h-6" />}
            title="Multiple Delivery Channels"
            description="Receive leads via Email, WhatsApp, or Dashboard. Choose your preferred notification method or use all three."
          />
          {showAllFeatures && (
            <>
              <FeatureCard
                icon={<Smartphone className="w-6 h-6" />}
                title="Mobile Shortcuts"
                description="Customers can create mobile shortcuts to access your business mic instantly. One-tap access for faster bookings."
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Instant Lead Capture"
                description="No missed calls, no lost opportunities. Capture every customer request instantly, even when you're busy."
              />
              <FeatureCard
                icon={<Shield className="w-6 h-6" />}
                title="Subscription-Managed"
                description="Automatic subscription verification. Your SayMic stays active as long as your subscription is active. Fully managed solution."
              />
            </>
          )}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAllFeatures(!showAllFeatures)}
            className="text-sm md:text-base"
          >
            {showAllFeatures ? "View Less" : "View More"}
          </Button>
        </div>
      </SectionContainer>

      {/* Why SayMic - Trust & Credibility */}
      <SectionContainer className="bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent text-xs md:text-sm font-medium">Trusted by Industry Leaders</span>
            </div>
            <Heading level={2} className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl px-4">
              Why Businesses Choose SayMic
            </Heading>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Enterprise-grade security, proven ROI, and 24/7 support. Trusted by thousands of businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="p-4 md:p-6 rounded-lg border border-border bg-card/30 hover:bg-card/60 transition-all hover:border-accent/50 text-center">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-accent mx-auto mb-3 md:mb-4" />
              <h3 className="font-bold text-base md:text-lg text-foreground mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                GDPR & SOC 2 compliant. Military-grade encryption protects your customer data.
              </p>
            </div>
            <div className="p-4 md:p-6 rounded-lg border border-border bg-card/30 hover:bg-card/60 transition-all hover:border-accent/50 text-center">
              <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-accent mx-auto mb-3 md:mb-4" />
              <h3 className="font-bold text-base md:text-lg text-foreground mb-2">Proven Results</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                300% increase in lead capture. 70% faster response times. Measurable ROI.
              </p>
            </div>
            <div className="p-4 md:p-6 rounded-lg border border-border bg-card/30 hover:bg-card/60 transition-all hover:border-accent/50 text-center">
              <Globe className="w-8 h-8 md:w-10 md:h-10 text-accent mx-auto mb-3 md:mb-4" />
              <h3 className="font-bold text-base md:text-lg text-foreground mb-2">Global Platform</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                50+ countries. 99.99% uptime. Reliable infrastructure you can depend on.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-card/30 border border-border rounded-lg p-4 md:p-6 lg:p-8 text-center">
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">Trusted by leading businesses worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
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
      <SectionContainer className="bg-primary/10 text-center mb-12 md:mb-16 px-4">
        <Heading level={2} className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl px-4">
          Ready to Start Capturing Voice Leads?
        </Heading>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Join businesses across the USA, UK, and Europe already using SayMic to convert more customers.
        </p>
        <Button variant="primary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
          Get Started with SayMic
        </Button>
      </SectionContainer>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Image src="/images/logo.png" alt="SayMic Logo" width={28} height={28} className="w-6 h-6 md:w-7 md:h-7" />
                <span className="font-bold text-sm md:text-base text-foreground">SayMic</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground italic">Connect Your Customer Through Voice.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm md:text-base text-foreground mb-3 md:mb-4">Product</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
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
              <h4 className="font-bold text-sm md:text-base text-foreground mb-3 md:mb-4">Company</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
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
              <h4 className="font-bold text-sm md:text-base text-foreground mb-3 md:mb-4">Legal</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
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
          <div className="border-t border-border pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2026 SayMic. All rights reserved.</p>
            <p className="mt-2 md:mt-3">
              Powered by{" "}
              <a 
                href="https://rixon.agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                rixon.agency
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
