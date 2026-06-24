const FACTS = [
  { label: 'Brands worked with', value: '200+' },
  { label: 'Years experience',   value: '15+' },
  { label: 'Audit turnaround',   value: '< 48hr' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-white border-t border-neutral-100">
      <div className="max-w-content mx-auto section-animate">
        <div className="grid sm:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-green-500 text-xs font-bold uppercase tracking-widest mb-4">About Reed</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              15+ years turning<br className="hidden sm:block" /> data into growth.
            </h2>
            <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
              <p>
                Most businesses run advertising without optimising conversions. It&apos;s like
                turning on a tap without fixing the drain — you&apos;re spending more to fill the
                same leaky bucket.
              </p>
              <p>
                I design and run structured growth experiments that find the levers already in your
                data. Expert in marketing, design, and online behavioural economics. Trained Data
                Scientist. NN Group design award winner.
              </p>
              <p>
                Trained in Data Science at{' '}
                <span className="text-neutral-900 font-semibold">RMIT University</span> and{' '}
                <span className="text-neutral-900 font-semibold">UTS</span>. Based in Brisbane, Australia.
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-1 mb-8">
              {FACTS.map(item => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-4 border-b border-neutral-100"
                >
                  <span className="text-neutral-500 text-sm">{item.label}</span>
                  <span className="font-display font-bold text-neutral-900 text-2xl">{item.value}</span>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold rounded-xl transition-colors duration-150"
            >
              Get your free CRO audit →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
