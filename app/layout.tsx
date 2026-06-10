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
  title: 'Reed Iredale — Growth Experimentation Consultant',
  description:
    'Growth Experimentation Consultant helping brands run structured experiments that compound into revenue. Worked with BHP, Ladbrokes, Australian Retirement Trust, and 200+ others.',
  openGraph: {
    title: 'Reed Iredale — Growth Experimentation Consultant',
    description:
      'Structured growth experiments — A/B tests, funnel analyses, attribution — that find the levers that move your number.',
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
