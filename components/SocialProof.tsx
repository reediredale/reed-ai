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
    <section className="bg-neutral-50 border-y border-neutral-100 py-20 px-6 sm:px-8 section-animate">
      <div className="max-w-content mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mb-20">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-neutral-900 mb-2"
                 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                {stat.value}
              </p>
              <p className="text-neutral-500 text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Blockquote */}
        <figure className="bg-white rounded-2xl p-10 sm:p-16 max-w-4xl mx-auto text-center shadow-sm border border-neutral-200">
          <div className="font-serif text-green-500 leading-none mb-6 select-none"
               style={{ fontSize: '6rem', lineHeight: 0.8 }}>
            &ldquo;
          </div>
          <blockquote className="font-display font-bold text-neutral-900 leading-tight mb-10"
                      style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
            {testimonial.quote}
          </blockquote>
          <figcaption className="flex items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-200 shrink-0" />
            <div className="text-left">
              <p className="text-base font-bold text-neutral-900">{testimonial.name}</p>
              <p className="text-sm text-neutral-500">{testimonial.role}</p>
            </div>
          </figcaption>
        </figure>

      </div>
    </section>
  )
}
