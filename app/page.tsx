'use client'

export default function HomePage() {
  return (
    <div className="h-screen relative overflow-hidden bg-[#4A90E2]">
      {/* Decorative Diamond Pattern Top */}
      <div className="absolute top-0 left-0 right-0 h-6 flex gap-2 justify-center items-center z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rotate-45 opacity-60"></div>
        ))}
      </div>

      {/* Decorative Diamond Pattern Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 flex gap-2 justify-center items-center z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rotate-45 opacity-60"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center w-full">
          {/* Left Side - Text Content */}
          <div className="text-white z-20 animate-fade-in-up font-poiret">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poiret font-bold mb-3 md:mb-4 text-[#1a4d80]">
              KINA EVENTS
            </h1>
            <p className="text-sm md:text-base mb-3 md:mb-4 text-white font-poiret font-normal">
              Our website is still under maintenance. Please check back soon!
            </p>
            <p className="text-sm md:text-base mb-2 md:mb-3 text-white/90 leading-relaxed font-poiret">
              Welcome to Kina Events, your premier destination for unforgettable experiences. 
              We specialize in creating extraordinary moments that bring people together.
            </p>
            <p className="text-sm md:text-base mb-4 md:mb-5 text-white/90 leading-relaxed font-poiret">
              From intimate gatherings to grand celebrations, we craft events that leave lasting impressions. 
              Let us help you create memories that will be cherished forever.
            </p>
            
            {/* Contact Info in Hero */}
            <div className="mt-2 md:mt-3">
              <h3 className="text-white font-poiret text-base sm:text-lg md:text-xl font-normal mb-3">Contact us</h3>
              <div className="flex flex-row gap-3 text-white font-poiret">
                <a 
                  href="tel:+250788314703" 
                  className="flex items-center justify-center gap-2 bg-[#1a4d80] text-white px-4 py-3 rounded-full font-poiret font-normal hover:bg-[#153a66] transition-colors shadow-lg"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 sm:h-6 sm:w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  0788314703
                </a>
                <a 
                  href="mailto:Kinaevents1@gmail.com" 
                  className="flex items-center justify-center gap-2 bg-[#1a4d80] text-white px-4 py-3 rounded-full font-poiret font-normal hover:bg-[#153a66] transition-colors shadow-lg"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 sm:h-6 sm:w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  Kinaevents1@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] z-20 flex items-center justify-center">
            <img 
              src="/web.jpg" 
              alt="Kina Events" 
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

