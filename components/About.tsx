export default function About() {
  return (
    <section id="about" className="py-14 px-6 border-t border-neutral-100">
      <div className="max-w-content mx-auto section-animate">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
          About
        </p>
        <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
          <p>
            Most businesses run advertising without optimising conversions. It&apos;s like turning on
            a tap without fixing the drain — you&apos;re spending more to fill the same leaky bucket.
          </p>
          <p>
            I design and run structured growth experiments that find the levers already in your data.
            Every recommendation is hypothesis-driven. Every outcome is measured.
          </p>
          <p>
            Trained in Data Science at{' '}
            <span className="text-neutral-900 font-medium">RMIT University</span> and{' '}
            <span className="text-neutral-900 font-medium">UTS</span>. 15+ years in marketing,
            design, and behavioural economics. Based in Brisbane, Australia.
          </p>
        </div>
      </div>
    </section>
  )
}
