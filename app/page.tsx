'use client'

export default function HomePage() {
  return (
    <div className="min-h-screen h-screen relative overflow-y-auto bg-[#4A90E2]">
      <div className="container mx-auto px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-6 min-h-full flex flex-col items-center justify-center">
        {/* Centered Image */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] z-20 flex items-center justify-center w-full">
          <img 
            src="/web.jpg" 
            alt="Kina Events" 
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>

        {/* Contact Info */}
        <div className="mt-2 sm:mt-3 md:mt-4 z-20 text-center">
          <h3 className="text-white font-poiret text-sm sm:text-base md:text-lg lg:text-xl font-normal mb-3 sm:mb-4">Contact us</h3>
          <div className="flex flex-row gap-3 sm:gap-4 text-white font-poiret items-center justify-center">
            <a 
              href="tel:+250788314703" 
              className="text-xs sm:text-sm md:text-base hover:underline"
            >
              0788314703
            </a>
            <span className="text-white/60">|</span>
            <a 
              href="mailto:Kinaevents1@gmail.com" 
              className="text-xs sm:text-sm md:text-base hover:underline"
            >
              Kinaevents1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

