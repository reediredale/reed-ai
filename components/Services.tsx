const services = [
  {
    title: 'CRO Audit & Strategy',
    description:
      'A full funnel review — from landing page to checkout — identifying exactly where visitors drop off and why. You get a prioritised action list, not a 40-page PDF.',
  },
  {
    title: 'A/B Testing & Experimentation',
    description:
      'Hypothesis-driven test design, statistical analysis, and velocity. No gut-feel tests — every experiment is built to answer a specific question.',
  },
  {
    title: 'Analytics & Attribution',
    description:
      'Clean measurement so you know what\'s actually driving conversions. GA4 setup, funnel tracking, and attribution modelling that reflects reality.',
  },
  {
    title: 'AI-Powered Personalisation',
    description:
      'Machine learning that adapts your site experience to individual intent signals — so the right message reaches the right visitor at the right moment.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-14 px-6 border-t border-neutral-100">
      <div className="max-w-content mx-auto section-animate">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          What I do
        </p>
        <div className="space-y-6">
          {services.map((s) => (
            <div key={s.title} className="flex gap-4">
              <span className="text-neutral-300 mt-0.5 shrink-0">—</span>
              <div>
                <p className="font-display font-semibold text-neutral-900 text-sm mb-1">
                  {s.title}
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
