'use client'

import { useState, useEffect } from 'react'

export default function MaintenancePage() {
  const [time, setTime] = useState<Date | null>(null)
  const [date, setDate] = useState<Date | null>(null)
  const [mounted, setMounted] = useState(false)

  const videoSrc = 'https://www.youtube.com/embed/UHvo7ZQPUQU?autoplay=1&mute=1&loop=1&playlist=UHvo7ZQPUQU&start=6&controls=0&enablejsapi=1&rel=0&iv_load_policy=3'

  useEffect(() => {
    setMounted(true)
    const now = new Date()
    setTime(now)
    setDate(now)
    
    const timer = setInterval(() => {
      const now = new Date()
      setTime(now)
      setDate(now)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="h-screen flex flex-col relative overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full"
          style={{
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%) scale(2.5)',
            objectFit: 'cover'
          }}
        />
      </div>
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/85 z-[1]"></div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-8 md:p-2 min-h-0 overflow-y-auto">
        <div className="text-center text-white w-full font-poiret flex flex-col items-center justify-center py-2">
          {/* Website Coming Soon Text */}
          <div className="mb-4 md:mb-2 lg:mb-3 px-4 w-full flex justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poiret font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              WEBSITE COMING SOON
            </h1>
          </div>
          
          {/* Time Display */}
          <div className="mb-4 md:mb-2 lg:mb-3">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-normal drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {mounted && time ? formatTime(time) : '--:--:-- --'}
            </div>
          </div>
          
          {/* Date Display */}
          <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-normal drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-4 md:mb-2 lg:mb-3">
            {mounted && date ? formatDate(date) : 'Loading...'}
          </div>

          {/* Logo Image Between Date and Contact */}
          <div className="mb-1 md:mb-0.5 px-4 w-full flex flex-col items-center">
            <img 
              src="/logo.jpeg" 
              alt="KINA EVENTS Logo" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto max-w-full mx-auto"
              style={{
                maxWidth: '90vw',
                objectFit: 'contain'
              }}
            />
            <p className="text-white font-poiret text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-1 md:mt-0.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              KINA EVENTS
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 w-full pb-4 md:pb-2 pt-2 md:pt-1 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-2 md:mb-1">
            <h3 className="text-white font-poiret text-lg sm:text-xl md:text-xl lg:text-2xl font-normal">Contact us</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-3 text-white font-poiret">
            <a 
              href="tel:+250788314703" 
              className="flex items-center gap-2 text-base sm:text-lg md:text-lg lg:text-xl hover:opacity-80 transition-opacity drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 sm:h-6 sm:w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="#fff"
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
              className="flex items-center gap-2 text-base sm:text-lg md:text-lg lg:text-xl hover:opacity-80 transition-opacity drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 sm:h-6 sm:w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="#fff"
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
      </footer>
    </div>
  )
}

