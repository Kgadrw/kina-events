import type { Metadata } from 'next'
import { Poiret_One } from 'next/font/google'
import './globals.css'

const poiretOne = Poiret_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poiret-one',
})

export const metadata: Metadata = {
  title: 'Kina Events - Under Maintenance',
  description: 'Kina Events official website is currently under maintenance. We are working on something amazing. Please check back soon!',
  keywords: ['kinaevents', 'kina events', 'kinaevents official website', 'kina events official', 'events', 'kina'],
  openGraph: {
    title: 'Kina Events - Under Maintenance',
    description: 'Kina Events official website is currently under maintenance. We are working on something amazing. Please check back soon!',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Kina Events Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kina Events - Under Maintenance',
    description: 'Kina Events official website is currently under maintenance.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poiretOne.variable}>{children}</body>
    </html>
  )
}

