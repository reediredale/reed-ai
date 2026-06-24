const services = [
  {
    icon: '🔍',
    title: 'CRO Audit & Strategy',
    description:
      'A full funnel review — from landing page to checkout — identifying exactly where visitors drop off and why. You get a prioritised action list, not a 40-page PDF.',
  },
  {
    icon: '🧪',
    title: 'A/B Testing & Experimentation',
    description:
      'Hypothesis-driven test design, statistical analysis, and velocity. No gut-feel tests — every experiment is built to answer a specific question.',
  },
  {
    icon: '📊',
    title: 'Analytics & Attribution',
    description:
      'Clean measurement so you know what\'s actually driving conversions. GA4 setup, funnel tracking, and attribution modelling that reflects reality.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Personalisation',
    description:
      'Machine learning that adapts your site experience to individual intent signals — so the right message reaches the right visitor at the right moment.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-8 bg-white border-t border-neutral-100">
      <div className="max-w-content mx-auto section-animate">
        <div className="text-center mb-12">
          <p className="text-green-500 text-xs font-bold uppercase tracking-widest mb-3">What I do</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900">
            How I grow your conversions
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-7 border border-neutral-200 rounded-2xl bg-white hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-green-50 rounded-xl mb-5 text-xl">
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-neutral-900 text-base mb-2">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
