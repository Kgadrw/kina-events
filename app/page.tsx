'use client'

import { useState, useEffect } from 'react'
import Noise from '@/components/Noise'

export default function MaintenancePage() {
  const [time, setTime] = useState(new Date())
  const [date, setDate] = useState(new Date())

  useEffect(() => {
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
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-mobile-crop filter grayscale"
        style={{
          backgroundImage: 'url(/news.jpg)'
        }}
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/85 z-[1]"></div>
      
      {/* Noise Effect */}
      <div className="absolute inset-0 z-[2]">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-8 md:p-4">
        <div className="text-center text-white w-full font-poiret flex flex-col items-center justify-center">
          {/* Logo Image Above Time */}
          <div className="mb-6 px-4 w-full flex justify-center">
            <img 
              src="/black.png" 
              alt="Logo" 
              className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto max-w-full mx-auto animate-rotate-left-right filter grayscale"
              style={{
                maxWidth: '90vw',
                objectFit: 'contain'
              }}
            />
          </div>
          
          {/* Time Display */}
          <div className="mb-6">
            <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {formatTime(time)}
            </div>
          </div>
          
          {/* Date Display */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-normal drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-6">
            {formatDate(date)}
          </div>

          {/* Logo Image Between Date and Contact */}
          <div className="mb-2 px-4 w-full flex flex-col items-center">
            <img 
              src="/logo.jpeg" 
              alt="KINA EVENTS Logo" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-full mx-auto"
              style={{
                maxWidth: '90vw',
                objectFit: 'contain'
              }}
            />
            <p className="text-white font-poiret text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              KINA EVENTS
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 w-full pb-12 pt-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-4">
            <h3 className="text-white font-poiret text-xl md:text-2xl font-normal">Contact us</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-white font-poiret">
            <a 
              href="tel:+250783880835" 
              className="flex items-center gap-3 text-lg md:text-xl hover:opacity-80 transition-opacity drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
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
              +250 783 880 835
            </a>
            <a 
              href="mailto:Kinaevents1@gmail.com" 
              className="flex items-center gap-3 text-lg md:text-xl hover:opacity-80 transition-opacity drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
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

