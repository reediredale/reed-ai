import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Consulting — Reed Iredale',
  description:
    "AI marketing consulting to maximise your team's outcomes. Data-driven automation, AI integration, and growth systems for sales and marketing teams.",
}

const SERVICES = [
  {
    icon: '🔬',
    title: 'AI Stack Audit',
    description:
      'A full review of your current tools and data flows — identifying where AI can have the highest impact, fastest. Delivered as a prioritised roadmap, not a 40-page slide deck.',
  },
  {
    icon: '⚙️',
    title: 'AI Implementation',
    description:
      'Building and integrating AI into your sales, marketing, and customer support workflows end-to-end. From prototype to production.',
  },
  {
    icon: '🗄️',
    title: 'Data Pipeline Architecture',
    description:
      'Unifying your CRM, ad platforms, and operational data into a single layer your AI can actually learn from. No more siloed tools.',
  },
  {
    icon: '🎓',
    title: 'Team Enablement',
    description:
      'Upskilling your team to work alongside AI — so adoption sticks and the system compounds over time rather than collecting dust.',
  },
]

const MATURITY_STAGES = [
  { label: 'Analog',               description: 'Manual processes, spreadsheets, gut feel.' },
  { label: 'Cloud-based Silos',    description: 'Tools in place but disconnected. Data lives in separate platforms.' },
  { label: 'Integratable Cloud',   description: "Tools can talk to each other but haven't been set up to." },
  { label: 'Unified Data Layer',   description: 'A single source of truth your tools all feed into.' },
  { label: 'Automated Workflow',   description: 'Workflows that run themselves with a human in the loop.' },
  { label: 'AI-Driven Automation', description: 'Systems that learn, adapt, and compound over time.' },
]

export default function AIConsultingPage() {
  return (
    <main>
      {/* Page header */}
      <section className="pt-28 pb-16 px-6 sm:px-8 text-center border-b border-neutral-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-500 text-[11px] font-bold uppercase tracking-widest mb-6">AI Consulting</p>
          <h1
            className="font-display font-bold text-neutral-900 tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Maximise your team&apos;s<br /> outcomes with AI.
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed max-w-2xl mx-auto">
            Trained in Data Science at Institute of Data (RMIT &amp; UTS). Consulted with BHP,
            Ladbrokes, Australian Retirement Trust, First Mac, Flight Centre Group, and 200+ others.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 sm:px-8 border-b border-neutral-100">
        <div className="max-w-content mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-10 text-center">What I do</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="p-8 border border-neutral-200 rounded-2xl bg-white hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 flex items-center justify-center bg-green-50 rounded-xl mb-5 text-2xl">
                  {s.icon}
                </div>
                <h3
                  className="font-display font-bold text-neutral-900 mb-3"
                  style={{ fontSize: '1.25rem' }}
                >
                  {s.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed" style={{ fontSize: '1.05rem' }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maturity framework */}
      <section className="py-20 px-6 sm:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-content mx-auto">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">The AI maturity framework</p>
            <h2
              className="font-display font-bold text-neutral-900 tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.1 }}
            >
              Where does your business sit?
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-10">
              Most businesses sit between stages 2 and 3. Stages 5 and 6 are where compounding
              returns begin. Stages can be skipped when the foundations are right.
            </p>
            <div className="space-y-4">
              {MATURITY_STAGES.map((stage, i) => (
                <div key={stage.label} className="flex gap-5 items-start p-5 bg-white border border-neutral-200 rounded-xl">
                  <span className="w-8 h-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-sm font-bold text-green-600 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display font-bold text-neutral-900 text-base mb-1">{stage.label}</p>
                    <p className="text-neutral-500" style={{ fontSize: '1.05rem' }}>{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2
            className="font-display font-bold text-neutral-900 tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.1 }}
          >
            Ready to see where AI fits?
          </h2>
          <p className="text-neutral-500 text-lg mb-8">
            I&apos;ll be in touch within 48 hours. No pitch — ever.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors duration-150 text-base"
          >
            Contact me →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
