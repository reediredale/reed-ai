// CRO: Social proof — Cialdini's most powerful lever. Zero social proof = zero trust.
// TODO for Reed: replace the testimonial quote + attribution with a real one.
// The stats below are defensible from what you told me — update if you want different numbers.

const stats = [
  { value: 'loads',    label: 'teams worked with' },
  { value: '500+',   label: 'tools integrated' },
  { value: '< 48hr', label: 'audit turnaround' },
]

// TODO: replace with a real testimonial
const testimonial = {
  quote:
    "Reed audited our HubSpot and GA4 setup in 48 hours and showed us exactly where we were losing qualified leads. We'd been sitting on the answer for months.",
  name:  '[Client name]',
  role:  '[Role, Company]',
}

export default function SocialProof() {
  return (
    <section className="px-6 pb-14">
      <div className="max-w-content mx-auto">

        {/* Testimonial — Cialdini: social proof from a peer > any claim you make about yourself */}
        <figure className="border border-neutral-200 rounded-xl p-5 bg-white">
          <blockquote className="text-sm text-neutral-700 leading-relaxed mb-4">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-neutral-200 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-neutral-900">{testimonial.name}</p>
              <p className="text-xs text-neutral-500">{testimonial.role}</p>
            </div>
          </figcaption>
        </figure>

      </div>
    </section>
  )
}
