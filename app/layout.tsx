import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Nav from '@/components/Nav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Reed Iredale — AI for Sales & Marketing',
  description:
    'I build self-learning AI systems for sales and marketing teams. Data Science expertise from RMIT and UTS.',
  openGraph: {
    title: 'Reed Iredale — AI for Sales & Marketing',
    description:
      'Self-learning AI systems that adapt to your team, your data, and your customers.',
    url: 'https://reediredale.com',
    siteName: 'Reed Iredale',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
