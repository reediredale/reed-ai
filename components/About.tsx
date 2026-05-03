export default function About() {
  return (
    <section id="about" className="py-14 px-6 border-t border-neutral-100">
      <div className="max-w-content mx-auto section-animate">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
          About
        </p>
        <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
          <p>
            Most sales and marketing teams are sitting on a goldmine of customer data — but
            their tools don&apos;t talk to each other, their playbooks don&apos;t adapt, and
            their reps spend more time on admin than on actually selling.
          </p>
          <p>
            I build AI systems that change that. Systems that ingest your CRM data, call
            transcripts, and email threads — and turn them into models that learn who buys,
            why they buy, and when they&apos;re ready.
          </p>
          <p>
            Trained in Data Science at <span className="text-neutral-900 font-medium">RMIT University</span> and{' '}
            <span className="text-neutral-900 font-medium">UTS</span>. Based in Australia.
          </p>
        </div>
      </div>
    </section>
  )
}
