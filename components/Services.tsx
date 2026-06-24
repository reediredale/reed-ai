import Link from 'next/link'

const SERVICES = [
  {
    num: '01',
    title: 'Conversion Rate Optimisation',
    description:
      'A full funnel review from ad click to checkout — identifying exactly where visitors drop off and why. You get a prioritised action list and a Loom walkthrough, not a 40-page PDF.',
    tag: 'Most popular',
  },
  {
    num: '02',
    title: 'Landing Pages',
    description:
      'High-converting landing pages built around your customer\'s intent. Designed, written, and tested — with conversion baked in from the first pixel, not bolted on at the end.',
    tag: null,
  },
  {
    num: '03',
    title: 'A/B Testing & Experimentation',
    description:
      'Hypothesis-driven test design, statistical analysis, and velocity. No gut-feel tests — every experiment is built to answer a specific question about your funnel.',
    tag: null,
  },
  {
    num: '04',
    title: 'Email Marketing',
    description:
      'Flows, campaigns, and segmentation that turn your list into a revenue channel. Welcome sequences, abandoned cart recovery, post-purchase nurture — built to compound.',
    tag: null,
  },
  {
    num: '05',
    title: 'AI & Data Science for Ecommerce',
    description:
      'Machine learning and AI applied directly to your revenue levers — predictive churn models, personalisation engines, customer segmentation, and data pipelines that turn raw behaviour into compounding growth.',
    tag: null,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 sm:px-8 bg-white border-t border-neutral-100">
      <div className="max-w-content mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-green-500 text-[11px] font-bold uppercase tracking-widest mb-4">Services</p>
            <h2
              className="font-display font-bold text-neutral-900 tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Everything you need<br className="hidden sm:block" /> to grow conversions.
            </h2>
          </div>
          <Link
            href="/contact"
            className="self-start sm:self-end text-sm font-semibold text-neutral-500 hover:text-neutral-900 underline underline-offset-4 transition-colors shrink-0"
          >
            Contact me →
          </Link>
        </div>

        <div className="divide-y divide-neutral-100">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 py-10 hover:bg-neutral-50 -mx-6 px-6 sm:-mx-8 sm:px-8 transition-colors duration-150 rounded-xl"
            >
              {/* Number */}
              <span className="font-display font-bold text-green-500 shrink-0 sm:w-10 text-base mt-1">
                {s.num}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3
                    className="font-display font-bold text-neutral-900 tracking-tight group-hover:text-neutral-700 transition-colors"
                    style={{ fontSize: 'clamp(1.35rem, 3vw, 1.875rem)', lineHeight: 1.2 }}
                  >
                    {s.title}
                  </h3>
                  {s.tag && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 border border-green-200 text-[11px] font-bold uppercase tracking-widest text-green-600">
                      {s.tag}
                    </span>
                  )}
                </div>
                <p className="text-neutral-500 leading-relaxed max-w-2xl" style={{ fontSize: '1.05rem' }}>
                  {s.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex items-start pt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <svg width="20" height="20" viewBox="0 0 12 12" fill="none" className="text-neutral-400">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
