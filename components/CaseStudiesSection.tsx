'use client'

import Link from 'next/link'
import { useState } from 'react'

const CASES = [
  {
    client: 'Australian Retirement Trust',
    logo: 'https://logo.clearbit.com/australianretirementtrust.com.au',
    fallbackLogo: 'https://logo.clearbit.com/art.com.au',
    category: 'Superannuation · Financial Services',
    headline: '2× industry-average conversion rate',
  },
  {
    client: 'Ladbrokes',
    logo: 'https://logo.clearbit.com/ladbrokes.com.au',
    fallbackLogo: 'https://logo.clearbit.com/ladbrokes.com',
    category: 'Gaming · Sports Betting',
    headline: '36% revenue increase',
  },
  {
    client: 'BHP',
    logo: 'https://logo.clearbit.com/bhp.com',
    fallbackLogo: null,
    category: 'Enterprise · ASX 200',
    headline: '75,000 workers enabled globally',
  },
]

function BrandLogo({ src, fallback, alt }: { src: string; fallback: string | null; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="font-display font-extrabold text-neutral-900 text-lg tracking-tight">
        {alt}
      </span>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt={alt}
      className="h-8 w-auto object-contain max-w-[140px]"
      onError={() => {
        if (fallback && imgSrc !== fallback) {
          setImgSrc(fallback)
        } else {
          setFailed(true)
        }
      }}
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

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {CASES.map((c) => (
            <div
              key={c.client}
              className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col gap-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="h-8 flex items-center">
                <BrandLogo src={c.logo} fallback={c.fallbackLogo} alt={c.client} />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                {c.category}
              </p>

              <span className="self-start inline-flex items-center px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-sm font-bold text-green-700">
                {c.headline}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
