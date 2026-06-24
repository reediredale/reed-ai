import Link from 'next/link'
import Image from 'next/image'

const CASES = [
  {
    client: 'Australian Retirement Trust',
    logo: 'https://logo.clearbit.com/australianretirementtrust.com.au',
    category: 'Superannuation · Financial Services',
    headline: '2× industry-average conversion rate',
    stats: [
      { value: '2×',       label: 'industry avg CVR' },
      { value: 'National', label: 'reach' },
    ],
  },
  {
    client: 'Ladbrokes',
    logo: 'https://logo.clearbit.com/ladbrokes.com.au',
    category: 'Gaming · Sports Betting',
    headline: '36% revenue increase',
    stats: [
      { value: '36%', label: 'revenue increase' },
      { value: '29%', label: 'Day 1 lift' },
    ],
  },
  {
    client: 'BHP',
    logo: 'https://logo.clearbit.com/bhp.com',
    category: 'Enterprise · ASX 200',
    headline: '75,000 workers enabled globally',
    stats: [
      { value: '75k',    label: 'workers enabled' },
      { value: 'Global', label: 'rollout' },
    ],
  },
  {
    client: 'Petzyo',
    logo: 'https://logo.clearbit.com/petzyo.com.au',
    category: 'DTC Ecommerce',
    headline: '100% MRR increase in 90 days',
    stats: [
      { value: '100%', label: 'MRR increase' },
      { value: '90',   label: 'days' },
    ],
  },
  {
    client: 'Healthcare DTC',
    logo: null,
    category: 'Healthcare · Teeth Straightening',
    headline: 'Day 1 profitability',
    stats: [
      { value: 'Day 1', label: 'profitability' },
    ],
  },
  {
    client: 'Dating App',
    logo: null,
    category: 'Consumer App · MVP',
    headline: 'Market-ready MVP in 14 days',
    stats: [
      { value: '14', label: 'day delivery' },
    ],
  },
]

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

        {/* Cards — 3 per row */}
        <div className="grid sm:grid-cols-3 gap-5">
          {CASES.map((c) => (
            <div
              key={c.client}
              className="bg-white border border-neutral-200 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-shadow duration-200"
            >
              {/* Logo or client name */}
              <div className="h-8 flex items-center">
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={c.client}
                    width={120}
                    height={32}
                    className="h-7 w-auto object-contain"
                    unoptimized
                  />
                ) : (
                  <span className="font-display font-bold text-neutral-900 text-base">{c.client}</span>
                )}
              </div>

              {/* Category */}
              <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                {c.category}
              </p>

              {/* Headline badge */}
              <span className="self-start inline-flex items-center px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-xs font-bold text-green-700">
                {c.headline}
              </span>

              {/* Stats */}
              <div className="flex gap-6 pt-3 border-t border-neutral-100 mt-auto">
                {c.stats.map(s => (
                  <div key={s.label}>
                    <p
                      className="font-display font-bold text-neutral-900 leading-none mb-1"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                    >
                      {s.value}
                    </p>
                    <p className="text-xs text-neutral-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
