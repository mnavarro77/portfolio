import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Michael Navarro - Portafolio',
  description: 'Portafolio de Ingeniero de Software',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

import { AntigravitiBg } from '@/components/antigraviti-bg'
import { AntigravitiPointer } from '@/components/antigraviti-pointer'
import { ScrollGlowHandler } from '@/components/scroll-glow-handler'
import { BackgroundGlows } from '@/components/background-glows'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <AntigravitiBg />
        <BackgroundGlows />
        <AntigravitiPointer />
        <ScrollGlowHandler />
        <div 
          className="fixed inset-0 pointer-events-none z-[60] transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, transparent 60%, rgba(255,255,255,calc(var(--scroll-glow, 0) * 0.05)) 100%)',
            opacity: 'var(--scroll-glow, 0)',
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
