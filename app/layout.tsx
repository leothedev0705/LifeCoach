import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://anitadsouza.com'),
  title: 'Anita D\'Souza - Life & Success Coach | Transform Your Life Today',
  description: 'Unlock your potential with Anita D\'Souza, a certified life and success coach. Offering 1-on-1 coaching, group programs, and corporate workshops to help you achieve your goals.',
  keywords: 'life coach, success coach, personal development, transformation, coaching, motivation, goals',
  authors: [{ name: 'Anita D\'Souza' }],
  openGraph: {
    title: 'Anita D\'Souza - Life & Success Coach',
    description: 'Transform your life with personalized coaching programs designed to unlock your full potential.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anita D\'Souza - Life & Success Coach',
    description: 'Transform your life with personalized coaching programs designed to unlock your full potential.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  )
} 