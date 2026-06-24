const STATS = [
  { value: '200+',   label: 'brands worked with' },
  { value: '15+',    label: 'years experience' },
  { value: '2×',     label: 'avg industry conversion rate' },
  { value: '< 48hr', label: 'audit turnaround' },
]

const testimonial = {
  quote: "We didn't trust anyone other than Reed to work on our first ever sales funnel project.",
  name:  'BHP',
  role:  'UX Executive, ASX 200',
}

export default function SocialProof() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-100 py-20 px-8 section-animate">
      <div className="max-w-content mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-4xl sm:text-5xl text-neutral-900 mb-2">
                {stat.value}
              </p>
              <p className="text-neutral-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <figure className="border border-neutral-200 rounded-2xl p-8 bg-white max-w-2xl mx-auto text-center shadow-sm">
          <blockquote className="font-display font-medium text-neutral-700 text-lg leading-relaxed mb-6">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-200 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
              <p className="text-xs text-neutral-500">{testimonial.role}</p>
            </div>
          </figcaption>
        </figure>

      </div>
    </section>
  )
}
