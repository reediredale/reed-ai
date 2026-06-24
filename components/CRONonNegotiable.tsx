import Link from 'next/link'

const ROWS = [
  { metric: 'Low Financial Cost',   reed: true,  media: false, creative: false },
  { metric: 'Minimal Guesswork',    reed: true,  media: false, creative: false },
  { metric: 'Quick Results',        reed: true,  media: false, creative: true  },
  { metric: 'Low Ongoing Costs',    reed: true,  media: false, creative: false },
  { metric: 'Easily Scalable',      reed: true,  media: true,  creative: true  },
  { metric: 'High ROI',             reed: true,  media: false, creative: false },
  { metric: 'No Traffic Dependency',reed: true,  media: false, creative: false },
]

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/15">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l3.5 3.5L13 4.5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

function Cross() {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 3l8 8M11 3l-8 8" stroke="#ffffff30" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    </span>
  )
}

export default function CRONonNegotiable() {
  return (
    <section className="bg-slate-900 py-24 px-6 sm:px-8">
      <div className="max-w-content mx-auto">

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-14">
          <p className="text-green-400 text-[11px] font-bold uppercase tracking-widest mb-5">
            The case for CRO
          </p>
          <h2
            className="font-display font-bold text-white tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Conversion rate optimisation<br className="hidden sm:block" /> is non-negotiable.
          </h2>
          <p className="text-white/50 text-lg">
            Maximise your existing traffic and scale profitably.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 pr-6 text-white/30 text-xs font-bold uppercase tracking-widest w-1/2">
                  Metric
                </th>
                <th className="py-4 px-4 text-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/25">
                    <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                    <span className="text-green-400 text-sm font-bold whitespace-nowrap">Reed Iredale</span>
                  </span>
                </th>
                <th className="py-4 px-4 text-center text-white/30 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  Media Buying
                </th>
                <th className="py-4 px-4 text-center text-white/30 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  New Ad Creatives
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {ROWS.map((row) => (
                <tr key={row.metric} className="group hover:bg-white/[0.03] transition-colors">
                  <td className="py-5 pr-6 text-white/70 font-medium" style={{ fontSize: '1.05rem' }}>
                    {row.metric}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.reed ? <Check /> : <Cross />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.media ? <Check /> : <Cross />}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {row.creative ? <Check /> : <Cross />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors duration-150 text-base shadow-lg shadow-green-500/20"
          >
            Get your free CRO audit →
          </Link>
        </div>

      </div>
    </section>
  )
}
