import Link from 'next/link'

const FEATURED = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    iconBg: 'bg-green-50 text-green-600',
    label: 'Done-for-you optimisation',
    title: 'Conversion Rate Optimisation',
    description: 'A full funnel review from ad click to checkout — identifying exactly where visitors drop off and why. You get a prioritised action list and Loom walkthrough, not a 40-page PDF.',
    tag: 'Most popular',
    href: '/contact',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    iconBg: 'bg-slate-100 text-slate-700',
    label: 'Done-for-you builds',
    title: 'Landing Pages',
    description: 'High-converting landing pages built around your customer\'s intent. Designed, written, and tested — with conversion baked in from the first pixel, not bolted on at the end.',
    tag: null,
    href: '/contact',
  },
]

const SECONDARY = [
  {
    icon: '🧪',
    title: 'A/B Testing & Experimentation',
    description: 'Hypothesis-driven tests that answer specific questions about your funnel — not gut-feel guesses.',
  },
  {
    icon: '✉️',
    title: 'Email Marketing',
    description: 'Flows and campaigns that turn your list into a compounding revenue channel.',
  },
  {
    icon: '🤖',
    title: 'AI & Data Science for Ecommerce',
    description: 'Predictive models, personalisation engines, and data pipelines applied directly to your revenue levers.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 sm:px-8 bg-white border-t border-neutral-100">
      <div className="max-w-content mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-500 text-[11px] font-bold uppercase tracking-widest mb-4">Services</p>
          <h2
            className="font-display font-bold text-neutral-900 tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Post-Click Growth
          </h2>
        </div>

        {/* Featured 2-up */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {FEATURED.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative flex flex-col gap-6 p-8 sm:p-10 border border-neutral-200 rounded-2xl bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-200"
            >
              {s.tag && (
                <span className="absolute top-6 right-6 inline-flex items-center px-3 py-1 rounded-full bg-green-50 border border-green-200 text-[10px] font-bold uppercase tracking-widest text-green-600">
                  {s.tag}
                </span>
              )}

              <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${s.iconBg}`}>
                {s.icon}
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2">{s.label}</p>
                <h3
                  className="font-display font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-green-600 transition-colors"
                  style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', lineHeight: 1.2 }}
                >
                  {s.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed" style={{ fontSize: '1.05rem' }}>
                  {s.description}
                </p>
              </div>

              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-green-600 group-hover:gap-3 transition-all duration-150">
                Get in touch
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary 3-up */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {SECONDARY.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-3 p-7 border border-neutral-100 rounded-2xl bg-neutral-50"
            >
              <span className="text-2xl">{s.icon}</span>
              <h4 className="font-display font-bold text-neutral-900 text-base leading-snug">{s.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Discovery CTA strip */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-8 py-6 rounded-2xl bg-neutral-50 border border-neutral-100">
          <p className="font-display font-semibold text-neutral-700 text-lg">
            Not sure which is right for you?
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors duration-150 text-sm"
          >
            Contact me →
          </Link>
        </div>

      </div>
    </section>
  )
}
