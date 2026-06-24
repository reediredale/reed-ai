import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies — Reed Iredale',
  description:
    'Real CRO and growth experimentation results with Australian and international brands including BHP, Ladbrokes, Australian Retirement Trust, and Petzyo.',
}

const CASE_STUDIES = [
  {
    client: 'Australian Retirement Trust',
    category: 'Superannuation · Financial Services',
    headline: '2× industry-average conversion rate',
    description:
      'The merger of QSuper and SunSuper required rapid experimentation capability to match stakeholder ambitions. Optimised user journey touchpoints, simplified forms, and implemented a multi-funnel approach that doubled the industry average conversion rate for superannuation acquisition — expanding from a Queensland focus to a national presence.',
    stats: [
      { value: '2×', label: 'industry avg conversion rate' },
      { value: 'National', label: 'reach from QLD-only start' },
    ],
  },
  {
    client: 'Ladbrokes',
    category: 'Gaming · Sports Betting',
    headline: '36% revenue increase',
    description:
      'A struggling product category needed viability demonstration fast. Streamlined user flows aligned with customer intent and betting behaviour turned a loss-making category into a proven revenue driver — contributing directly to a successful business sale.',
    stats: [
      { value: '36%', label: 'category revenue increase' },
      { value: '29%', label: 'Day 1 improvement' },
    ],
  },
  {
    client: 'BHP',
    category: 'Enterprise · ASX 200',
    headline: '75,000 workers\' productivity enhanced',
    description:
      'Fragmented information systems across a global workforce created significant operational drag. Designed and delivered a unified digital network with improved user interfaces — reducing operational expenses and enabling 75,000 workers globally.',
    stats: [
      { value: '75k', label: 'workers enabled' },
      { value: 'Global', label: 'digital network rollout' },
    ],
  },
  {
    client: 'Petzyo',
    category: 'B2C Ecommerce · DTC',
    headline: '100% MRR increase in 90 days',
    description:
      'A direct-to-consumer dog food brand needed to scale quickly while enabling leadership to step back from day-to-day decisions. Reduced marketing spend, redesigned conversion pathways, implemented email automation, and strengthened partner channel performance — doubling monthly recurring revenue.',
    stats: [
      { value: '100%', label: 'MRR increase' },
      { value: '90', label: 'day project' },
    ],
  },
  {
    client: 'Healthcare DTC',
    category: 'Healthcare · Teeth Straightening',
    headline: 'Day 1 profitability',
    description:
      'Optimised purchase processes for a DTC teeth-straightening brand — achieving profitability from the very first day of campaign launch through precision funnel design and conversion-led creative direction.',
    stats: [
      { value: 'Day 1', label: 'profitability achieved' },
    ],
  },
  {
    client: 'Dating App',
    category: 'Consumer App · MVP',
    headline: 'Market-ready MVP in 14 days',
    description:
      'Designed and delivered a market-ready dating app MVP in 14 days — fully aligned with brand positioning and optimised for early conversion from the first cohort of users.',
    stats: [
      { value: '14', label: 'day delivery' },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-content mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">Case Studies</p>

          <h1 className="font-display text-3xl sm:text-[2.4rem] font-bold text-neutral-900 leading-[1.15] tracking-tight mb-4">
            Real results.
            <span className="text-neutral-400 font-normal"> No fluff.</span>
          </h1>
          <p className="text-neutral-500 text-base leading-relaxed mb-12">
            A selection of projects across ecommerce, financial services, gaming, and enterprise.
          </p>

          <div className="space-y-6">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.client} className="border border-neutral-200 rounded-xl p-6 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <p className="font-display font-bold text-neutral-900 text-base">{cs.client}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{cs.category}</p>
                  </div>
                  <span className="self-start inline-flex items-center px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral-700 whitespace-nowrap">
                    {cs.headline}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-5">{cs.description}</p>
                <div className="flex gap-8">
                  {cs.stats.map(stat => (
                    <div key={stat.label}>
                      <p className="font-display font-bold text-neutral-900 text-xl">{stat.value}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-100">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold rounded-xl transition-colors duration-150"
            >
              Get your free CRO audit →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
