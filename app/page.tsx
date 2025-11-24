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
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/85 z-0"></div>
      
      {/* Noise Effect */}
      <div className="absolute inset-0 z-[1]">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      {/* Scrolling Text */}
      <div className="relative z-40 w-full h-12 bg-yellow-400 flex items-center overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap font-poiret">
          <span className="text-black font-bold text-lg md:text-xl px-8">
            Website is under maintenance • 
          </span>
          <span className="text-black font-bold text-lg md:text-xl px-8">
            Website is under maintenance • 
          </span>
          <span className="text-black font-bold text-lg md:text-xl px-8">
            Website is under maintenance • 
          </span>
          <span className="text-black font-bold text-lg md:text-xl px-8">
            Website is under maintenance • 
          </span>
          <span className="text-black font-bold text-lg md:text-xl px-8">
            Website is under maintenance • 
          </span>
          <span className="text-black font-bold text-lg md:text-xl px-8">
            Website is under maintenance • 
          </span>
          <span className="text-black font-bold text-lg md:text-xl px-8">
            Website is under maintenance • 
          </span>
          <span className="text-black font-bold text-lg md:text-xl px-8">
            Website is under maintenance • 
          </span>
        </div>
      </div>

      {/* Top Construction Border */}
      <div 
        className="absolute top-12 left-0 w-full h-8 z-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #FFD700 0, #FFD700 20px, #000 20px, #000 40px)'
        }}
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-8 md:p-4">
        <div className="text-center text-white w-full font-poiret flex flex-col items-center justify-center">
          {/* Time Display */}
          <div className="mb-6">
            <div className="text-7xl md:text-8xl lg:text-9xl font-normal drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {formatTime(time)}
            </div>
          </div>
          
          {/* Date Display */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-normal drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {formatDate(date)}
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
                stroke="currentColor"
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
      </footer>

      {/* Bottom Construction Border */}
      <div 
        className="absolute bottom-0 left-0 w-full h-8 z-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #FFD700 0, #FFD700 20px, #000 20px, #000 40px)'
        }}
      />
    </div>
  )
}

