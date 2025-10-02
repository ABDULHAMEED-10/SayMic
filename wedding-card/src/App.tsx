import { useEffect, useState } from 'react'
import './App.css'
import { GiDiamondRing, GiFlowerEmblem, GiPartyPopper, GiCrown } from 'react-icons/gi'
import { MdRestaurant, MdLocationOn } from 'react-icons/md'
import { FaBuilding, FaDirections } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'

interface URLParams {
  name?: string;
}

function App() {
  const [urlParams, setUrlParams] = useState<URLParams>({})

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const name = params.get('name')
    setUrlParams({ name: name || undefined })
  }, [])

  const formatName = (name: string) => {
    return name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  const getInvitationText = () => {
    if (urlParams.name) {
      const formattedName = formatName(urlParams.name)
      return `${formattedName} is invited to the wedding and walima of Abdul Hameed`
    }
    return 'You are invited to the wedding and walima of Abdul Hameed'
  }

  return (
    <div className="min-h-screen bg-primary text-tertiary">
      {/* Islamic Header */}
      <div className='my-10'>
        <div className="text-center relative z-10">
          <div className="text-2xl md:text-3xl font-playfair text-white mb-4 ">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>

          <h1 className="text-3xl md:text-5xl font-greatvibes mb-4 animate-fade-in">
            <span style={{ color: '#D4AF37' }}>Wedding</span> <span style={{ color: '#C44569' }}>Invitation</span>
          </h1>

        
          <div className="mb-4">
            <div className="flex justify-center mb-3">
              <GiFlowerEmblem className="text-6xl" style={{ color: '#FFB6C1' }} />
            </div>
            <p className="text-2xl md:text-3xl font-playfair text-white mb-4">
              ما شاء الله
            </p>
          </div>

          {/* Quranic Verse */}
          <p className="text-white/90 text-sm md:text-base font-inter italic max-w-2xl mx-auto px-4 mb-2">
            "And We created you in pairs, so that you may find tranquility in one another"
          </p>
          <p className="text-white/80 text-xs mb-4">— Quran 30:21</p>
        </div>
        </div>
        {/* Ornamental Islamic Divider */}
        <div className="flex justify-center items-center space-x-6 mb-12 animate-fade-in">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-secondary"></div>
          <div className="flex items-center space-x-2">
            <IoSparkles className="text-xl" style={{ color: '#D4AF37' }} />
            <IoSparkles className="text-3xl" style={{ color: '#C44569' }} />
            <IoSparkles className="text-xl" style={{ color: '#D4AF37' }} />
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-secondary via-secondary to-transparent"></div>
        </div>
      

      <div className="max-w-6xl mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6 relative">
          {/* Beautiful Vertical Separation Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-secondary to-transparent transform -translate-x-1/2"></div>

          {/* Wedding Details - Left Column */}
          <div className="rounded-3xl p-6 transform transition-all duration-700 hover:scale-[1.02] animate-fade-in relative overflow-hidden">
            {/* Decorative Islamic patterns */}

            <div className="text-center mb-6 relative z-10">
              <div className="flex justify-center mb-4">
                <GiDiamondRing className="text-7xl" style={{ color: '#D4AF37' }} />
              </div>
              <h2 className="text-5xl font-greatvibes mb-2" style={{ color: '#D4AF37' }}>
                Nikah Ceremony
              </h2>
              <div className="text-3xl font-playfair font-bold mb-4" style={{ color: '#C44569' }}>
                11 October 2025
              </div>
              <div className="text-sm text-tertiary/60 font-inter">Saturday</div>
            </div>

            <div className="space-y-6 mb-8 relative z-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <GiCrown className="text-4xl" style={{ color: '#D4AF37' }} />
                  <div>
                    <div className="font-inter font-bold text-tertiary">Sehra Bandi</div>
                    <div className="text-xs text-tertiary/70">Groom's Ceremony</div>
                  </div>
                </div>
                <span className="font-playfair font-bold text-xl" style={{ color: '#D4AF37' }}>7:00 PM</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <MdRestaurant className="text-4xl" style={{ color: '#0F9D58' }} />
                  <div>
                    <div className="font-inter font-bold text-tertiary">Waqt-e-Taam</div>
                    <div className="text-xs text-tertiary/70">Dinner Reception</div>
                  </div>
                </div>
                <span className="font-playfair font-bold text-xl" style={{ color: '#0F9D58' }}>8:00 PM</span>
              </div>
            </div>

          </div>

          {/* Mobile Horizontal Separator */}
          <div className="lg:hidden flex justify-center my-6">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          </div>

          {/* Walima Details - Right Column */}
          <div className="rounded-3xl p-6 transform transition-all duration-700 hover:scale-[1.02] animate-fade-in relative overflow-hidden">
            {/* Decorative Islamic patterns */}

            <div className="text-center mb-6 relative z-10">
              <div className="flex justify-center mb-4">
                <GiPartyPopper className="text-7xl" style={{ color: '#C44569' }} />
              </div>
              <h2 className="text-5xl font-greatvibes mb-2" style={{ color: '#C44569' }}>
                Walima Reception
              </h2>
              <div className="text-3xl font-playfair font-bold mb-4" style={{ color: '#D4AF37' }}>
                12 October 2025
              </div>
              <div className="text-sm text-tertiary/60 font-inter">Sunday</div>
            </div>

            <div className="space-y-6 mb-8 relative z-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <IoSparkles className="text-4xl" style={{ color: '#C44569' }} />
                  <div>
                    <div className="font-inter font-bold text-tertiary">Grand Reception</div>
                    <div className="text-xs text-tertiary/70">Celebrating the Union</div>
                  </div>
                </div>
                <span className="font-playfair font-bold text-xl" style={{ color: '#C44569' }}>7:30 PM</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <MdRestaurant className="text-4xl" style={{ color: '#0F9D58' }} />
                  <div>
                    <div className="font-inter font-bold text-tertiary">Waqt-e-Taam</div>
                    <div className="text-xs text-tertiary/70">Dinner Reception</div>
                  </div>
                </div>
                <span className="font-playfair font-bold text-xl" style={{ color: '#0F9D58' }}>8:00 PM</span>
              </div>
            </div>

          </div>
        </div>
  
          {/* Mobile Horizontal Separator */}
          <div className="lg:hidden flex justify-center my-6">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          </div>

          {/* Location Header */}
          <div className="text-center mb-6 mt-14">
            <div className="flex justify-center mb-4">
              <FaBuilding className="text-6xl" style={{ color: '#C44569' }} />
            </div>
            <h3 className="text-4xl font-greatvibes font-bold mb-2" style={{ color: '#D4AF37' }}>
              Event Locations
            </h3>
          </div>
        {/* Common Location Section */}
        <div className="w-full mb-4">
          <div className="text-left p-6 pb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-4xl" style={{ color: '#C44569' }} />
                <div className="font-playfair font-bold text-tertiary text-lg">
                  DUA Marriage Hall, Bahawalpur
                </div>
              </div>
              
              <a
                href="https://maps.google.com/?q=29.4028,71.6612"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-tertiary px-4 py-1.5 rounded-full border border-tertiary/40 hover:border-tertiary/80 hover:bg-tertiary/10 transition-all duration-300 font-medium"
              >
                <FaDirections className="text-sm" />
                <span>Direction</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ornamental Islamic Divider */}
        <div className="flex justify-center items-center space-x-6 mb-12 animate-fade-in">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-secondary"></div>
          <div className="flex items-center space-x-2">
            <IoSparkles className="text-xl" style={{ color: '#D4AF37' }} />
            <IoSparkles className="text-3xl" style={{ color: '#C44569' }} />
            <IoSparkles className="text-xl" style={{ color: '#D4AF37' }} />
          </div>
          <div className="w-32 h-0.5 bg-gradient-to-r from-secondary via-secondary to-transparent"></div>
        </div>

        {/* Common Section - Personalized Invitation */}
        <div className="w-full mb-12">
          <div className="text-center p-8 animate-fade-in">
            {/* Personalized invitation */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl font-playfair text-tertiary leading-relaxed">
                {getInvitationText()}
              </p>
            </div>

            {/* Family blessing */}
            <div className="mb-8">
              <p className="text-sm md:text-lg font-inter text-tertiary/80 italic">
                <span style={{ color: '#D4AF37' }}>Your presence</span> and <span style={{ color: '#C44569' }}>prayers</span> would be a <span style={{ color: '#0F9D58' }}>great honor</span> for us
              </p>
            </div>


            {/* Contact or RSVP section */}
            <div className="text-xs text-tertiary/60 font-inter">
              JazakAllah Khair | May Allah bless you
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
