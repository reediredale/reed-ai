import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Providers } from './providers'
import Nav from '@/components/Nav'

const averta = localFont({
  src: './fonts/averta-pe-vf.woff2',
  variable: '--font-averta',
  display: 'swap',
  weight: '100 900',
})

const BASE_URL = 'https://reediredale.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Reed Iredale — Growth Experimentation Consultant',
    template: '%s — Reed Iredale',
  },
  description:
    'Growth Experimentation Consultant helping brands run structured experiments that compound into revenue. Worked with BHP, Ladbrokes, Australian Retirement Trust, and 200+ others.',
  keywords: [
    'CRO consultant', 'conversion rate optimisation', 'growth experimentation',
    'A/B testing', 'landing page optimisation', 'ecommerce CRO', 'CRO Australia',
    'funnel optimisation', 'Reed Iredale',
  ],
  authors: [{ name: 'Reed Iredale', url: BASE_URL }],
  creator: 'Reed Iredale',
  openGraph: {
    title: 'Reed Iredale — Growth Experimentation Consultant',
    description:
      'Structured growth experiments — A/B tests, funnel optimisation, landing pages — that find the revenue hiding in your funnel.',
    url: BASE_URL,
    siteName: 'Reed Iredale',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/reed-iredale-headshot.webp',
        width: 1200,
        height: 630,
        alt: 'Reed Iredale — Growth Experimentation Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reed Iredale — Growth Experimentation Consultant',
    description:
      'Structured growth experiments that find the revenue hiding in your funnel. No extra ad spend required.',
    images: ['/reed-iredale-headshot.webp'],
    creator: '@reediredale',
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Reed Iredale',
  url: BASE_URL,
  image: `${BASE_URL}/reed-iredale-headshot.webp`,
  jobTitle: 'Growth Experimentation Consultant',
  description:
    'CRO and Growth Experimentation Consultant with 15+ years experience. Worked with BHP, Ladbrokes, Australian Retirement Trust, and 200+ brands.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brisbane',
    addressCountry: 'AU',
  },
  sameAs: [
    'https://www.linkedin.com/in/reediredale',
    'https://x.com/reediredale',
  ],
  knowsAbout: [
    'Conversion Rate Optimisation',
    'Growth Experimentation',
    'A/B Testing',
    'Landing Page Design',
    'Email Marketing',
    'Data Science',
    'AI for Ecommerce',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={averta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
