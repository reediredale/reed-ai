'use client'

import Link from 'next/link'
import { useState } from 'react'

const CASES = [
  {
    client: 'Australian Retirement Trust',
    logos: [
      'https://logo.clearbit.com/australianretirementtrust.com.au',
      'https://www.australianretirementtrust.com.au/content/dam/art/images/logo/art-logo.svg',
    ],
    category: 'Superannuation · Financial Services',
    headline: '2× industry-average conversion rate',
  },
  {
    client: 'Ladbrokes',
    logos: [
      'https://logo.clearbit.com/ladbrokes.com',
      'https://logo.clearbit.com/ladbrokes.com.au',
    ],
    category: 'Gaming · Sports Betting',
    headline: '36% revenue increase',
  },
  {
    client: 'BHP',
    logos: [
      'https://logo.clearbit.com/bhp.com',
      'https://www.bhp.com/themes/custom/bhp/dist/images/bhp-logo.svg',
    ],
    category: 'Enterprise · ASX 200',
    headline: '75,000 workers enabled globally',
  },
  {
    client: 'Petzyo',
    logos: [
      'https://logo.clearbit.com/petzyo.com.au',
    ],
    category: 'DTC Ecommerce',
    headline: '100% MRR increase in 90 days',
  },
  {
    client: 'Oscar Wylee',
    logos: [
      'https://logo.clearbit.com/oscarwylee.com.au',
      'https://logo.clearbit.com/oscarwylee.com',
    ],
    category: 'Retail · Eyewear',
    headline: 'Conversion-led growth strategy',
  },
  {
    client: 'loans.com.au',
    logos: [
      'https://logo.clearbit.com/loans.com.au',
    ],
    category: 'Financial Services · Fintech',
    headline: 'Full funnel CRO & optimisation',
  },
]

function BrandLogo({ logos, alt }: { logos: string[]; alt: string }) {
  const [index, setIndex] = useState(0)

  if (index >= logos.length) {
    return (
      <span className="font-display font-extrabold text-neutral-800 text-base tracking-tight">
        {alt}
      </span>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logos[index]}
      alt={alt}
      className="h-8 w-auto object-contain max-w-[160px]"
      onError={() => setIndex(i => i + 1)}
    />
  )
}

export default function CaseStudiesSection() {
  return (
    <section className="py-24 px-6 sm:px-8 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-content mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-green-500 text-[11px] font-bold uppercase tracking-widest mb-4">Results</p>
            <h2
              className="font-display font-bold text-neutral-900 tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Brands that trusted the<br className="hidden sm:block" /> process. Numbers that proved it.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="self-start sm:self-end text-sm font-semibold text-neutral-500 hover:text-neutral-900 underline underline-offset-4 transition-colors shrink-0"
          >
            View all case studies →
          </Link>
        </div>

        {/* 6 cards — 3 per row */}
        <div className="grid sm:grid-cols-3 gap-5">
          {CASES.map((c) => (
            <div
              key={c.client}
              className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col items-center text-center gap-5 hover:shadow-md transition-shadow duration-200"
            >
              <div className="h-8 flex items-center justify-center">
                <BrandLogo logos={c.logos} alt={c.client} />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                {c.category}
              </p>

              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-sm font-bold text-green-700">
                {c.headline}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
