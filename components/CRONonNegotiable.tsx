import Link from 'next/link'

const TRUTHS = [
  {
    stat: '97%',
    label: 'of your visitors leave without converting',
    detail:
      'The average website converts less than 3% of traffic. That means 97 of every 100 people you\'ve paid to acquire — leave empty-handed.',
  },
  {
    stat: '10×',
    label: 'average return for every $1 spent on CRO',
    detail:
      'Forrester research puts the average ROI on CRO investment at 10:1. Yet most businesses spend 90% of their budget on traffic and almost nothing on converting it.',
  },
  {
    stat: '0',
    label: 'extra ad spend required',
    detail:
      'CRO works on the traffic you already have. Fix the funnel first — then scale. Every dollar you spend acquiring traffic is worth more once your conversion rate improves.',
  },
]

export default function CRONonNegotiable() {
  return (
    <section className="bg-slate-900 py-24 px-6 sm:px-8">
      <div className="max-w-content mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-green-400 text-[11px] font-bold uppercase tracking-widest mb-6">
            The case for CRO
          </p>
          <h2
            className="font-display font-bold text-white tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4rem)', lineHeight: 1.05 }}
          >
            CRO is{' '}
            <span className="italic text-white/40">non‑negotiable.</span>
          </h2>
          <p className="text-white/55 leading-relaxed" style={{ fontSize: '1.2rem' }}>
            You&apos;re not losing to your competitors. You&apos;re losing to your own funnel.
            Most businesses throw money at traffic while their conversion rate stays broken.
            The businesses that win fix the leak before they open the tap.
          </p>
        </div>

        {/* Stats / truths */}
        <div className="grid sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden mb-16">
          {TRUTHS.map((t) => (
            <div
              key={t.stat}
              className="bg-slate-900 p-8 sm:p-10 flex flex-col gap-4"
            >
              <p
                className="font-display font-bold text-green-400 leading-none"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              >
                {t.stat}
              </p>
              <p className="text-white font-display font-bold text-lg leading-snug">
                {t.label}
              </p>
              <p className="text-white/45 leading-relaxed text-sm">
                {t.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 border-t border-white/10 pt-12">
          <p
            className="font-display font-bold text-white/80 max-w-lg leading-snug"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
          >
            &ldquo;Every visitor you&apos;re not converting is money you&apos;ve already paid for.&rdquo;
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors duration-150 text-base shadow-lg shadow-green-500/20"
          >
            Fix my funnel →
          </Link>
        </div>

      </div>
    </section>
  )
}
