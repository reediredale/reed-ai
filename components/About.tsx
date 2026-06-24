const FACTS = [
  { label: 'Brands worked with', value: '200+' },
  { label: 'Years experience',   value: '15+' },
  { label: 'Audit turnaround',   value: '< 48hr' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-8 bg-white border-t border-neutral-100">
      <div className="max-w-content mx-auto section-animate">
        <div className="grid sm:grid-cols-2 gap-14 sm:gap-20 items-start">

          <div>
            <p className="text-green-500 text-[11px] font-bold uppercase tracking-widest mb-5">About Reed</p>
            <h2 className="font-display font-bold text-neutral-900 tracking-tight mb-7"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              15+ years turning<br /> data into growth.
            </h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed" style={{ fontSize: '1.05rem' }}>
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
                <span className="text-neutral-900 font-bold">RMIT University</span> and{' '}
                <span className="text-neutral-900 font-bold">UTS</span>. Based in Brisbane, Australia.
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-0 mb-10">
              {FACTS.map(item => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-5 border-b border-neutral-100"
                >
                  <span className="text-neutral-500 text-base">{item.label}</span>
                  <span className="font-display font-bold text-neutral-900"
                        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors duration-150 text-base"
            >
              Get your free CRO audit →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
