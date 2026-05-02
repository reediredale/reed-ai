const services = [
  {
    icon: '⚡',
    title: 'Sales Intelligence AI',
    description:
      'Predictive models that score leads, surface next-best-actions, and tell your reps exactly which deals to prioritise — based on your historical win data.',
  },
  {
    icon: '🎯',
    title: 'Marketing Automation AI',
    description:
      'Self-optimising campaign logic that learns which messages, channels, and timing convert — and continuously improves without manual A/B testing overhead.',
  },
  {
    icon: '🔗',
    title: 'Data Pipeline Architecture',
    description:
      'Custom pipelines that unify your CRM, ad platforms, product data, and call transcripts into a single intelligence layer your AI can actually learn from.',
  },
  {
    icon: '🧠',
    title: 'Self-Learning Systems',
    description:
      "Models that don't just run — they adapt. As your team closes deals and your market shifts, the AI updates its understanding without you touching a thing.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto section-animate">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">
            What I build
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xl">
            AI that does the work, not just the reporting.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-[#111] border border-white/8 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-[#131313] transition-all duration-200"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-display font-semibold text-white text-base mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
