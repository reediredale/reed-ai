const services = [
  {
    title: 'Sales Intelligence AI',
    description:
      'Predictive models that score leads and tell your reps which deals to prioritise — trained on your historical win data.',
  },
  {
    title: 'Marketing Automation AI',
    description:
      "Self-optimising campaign logic that learns which messages and timing convert — without constant manual A/B testing.",
  },
  {
    title: 'Data Pipeline Architecture',
    description:
      'Custom pipelines that unify your CRM, ad platforms, and call data into a single layer your AI can actually learn from.',
  },
  {
    title: 'Self-Learning Systems',
    description:
      "Models that adapt as your team closes deals and your market shifts — no retraining required.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-14 px-6 border-t border-neutral-100">
      <div className="max-w-content mx-auto section-animate">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          What I build
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
