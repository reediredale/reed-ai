export default function About() {
  const credentials = [
    { label: 'RMIT University', sub: 'Data Science Program' },
    { label: 'UTS', sub: 'Data Science Program' },
  ]

  return (
    <section id="about" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto section-animate">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">
              About
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              The engineer behind the model.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I help sales and marketing teams stop leaving intelligence on the table.
                Most teams are sitting on a goldmine of customer data — but their tools
                don't talk to each other, their playbooks don't adapt, and their reps
                spend more time on admin than on actually selling.
              </p>
              <p>
                I build AI systems that change that. Systems that ingest your CRM data,
                your call transcripts, your email threads — and turn them into models
                that actually learn who buys, why they buy, and when they're ready.
              </p>
              <p>
                Trained in Data Science at RMIT and UTS, I combine rigorous ML
                foundations with real-world commercial deployments. No fluff, no
                dashboards for dashboards' sake — just AI that drives pipeline.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex gap-4 mt-10">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex-1 bg-[#111] border border-white/8 rounded-xl px-4 py-3"
                >
                  <p className="text-xs text-gray-500 mb-1">{c.sub}</p>
                  <p className="text-sm font-semibold text-white">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Full body photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-b from-violet-600/15 to-blue-600/10 rounded-3xl blur-2xl" />
              <div className="relative w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/reed-iredale-full-body.png"
                  alt="Reed Iredale"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
