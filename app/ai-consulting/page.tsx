import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Consulting — Reed Iredale',
  description:
    'AI marketing consulting to maximise your team\'s outcomes. Data-driven automation, AI integration, and growth systems for sales and marketing teams.',
}

const SERVICES = [
  {
    title: 'AI Stack Audit',
    description:
      'A full review of your current tools and data flows — identifying where AI can have the highest impact, fastest. Delivered as a prioritised roadmap, not a 40-page slide deck.',
  },
  {
    title: 'AI Implementation',
    description:
      'Building and integrating AI into your sales, marketing, and customer support workflows end-to-end. From prototype to production.',
  },
  {
    title: 'Data Pipeline Architecture',
    description:
      'Unifying your CRM, ad platforms, and operational data into a single layer your AI can actually learn from. No more siloed tools.',
  },
  {
    title: 'Team Enablement',
    description:
      'Upskilling your team to work alongside AI — so adoption sticks and the system compounds over time rather than collecting dust.',
  },
]

const MATURITY_STAGES = [
  { label: 'Analog',                        description: 'Manual processes, spreadsheets, gut feel.' },
  { label: 'Cloud-based Silos',             description: 'Tools in place but disconnected. Data lives in separate platforms.' },
  { label: 'Integratable Cloud',            description: 'Tools can talk to each other but haven\'t been set up to.' },
  { label: 'Unified Data Layer',            description: 'A single source of truth your tools all feed into.' },
  { label: 'Automated Workflow',            description: 'Workflows that run themselves with a human in the loop.' },
  { label: 'AI-Driven Automation',          description: 'Systems that learn, adapt, and compound over time.' },
]

export default function AIConsultingPage() {
  return (
    <main>
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-content mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">AI Consulting</p>

          <h1 className="font-display text-3xl sm:text-[2.4rem] font-bold text-neutral-900 leading-[1.15] tracking-tight mb-4">
            Maximise your team&apos;s outcomes<br className="hidden sm:block" /> with AI.
          </h1>
          <p className="text-neutral-500 text-base leading-relaxed mb-12">
            Trained in Data Science at Institute of Data (RMIT &amp; UTS). Consulted with BHP,
            Ladbrokes, Australian Retirement Trust, First Mac, Flight Centre Group, and 200+ others.
          </p>

          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">What I do</p>
            <div className="space-y-6">
              {SERVICES.map(s => (
                <div key={s.title} className="flex gap-4">
                  <span className="text-neutral-300 mt-0.5 shrink-0">—</span>
                  <div>
                    <p className="font-display font-semibold text-neutral-900 text-sm mb-1">{s.title}</p>
                    <p className="text-neutral-500 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">The AI maturity framework</p>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Most businesses sit between stages 2 and 3. Stages 5 and 6 are where compounding
              returns begin. Stages can be skipped when the foundations are right.
            </p>
            <div className="space-y-4">
              {MATURITY_STAGES.map((stage, i) => (
                <div key={stage.label} className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-500 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-neutral-900 text-sm">{stage.label}</p>
                    <p className="text-neutral-500 text-xs mt-0.5">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-100 pt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold rounded-xl transition-colors duration-150"
            >
              Get your free audit →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
