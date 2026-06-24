'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePostHog } from 'posthog-js/react'
import ContactModal from './ContactModal'

export default function Hero() {
  const posthog = usePostHog()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    posthog?.capture('cta_clicked', { cta: 'hero' })
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="bg-slate-900 pt-28 sm:pt-36 pb-24 px-6 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto">

          {/* Avatar */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white/20 mx-auto mb-5 shadow-2xl shadow-black/40">
            <Image
              src="/reed-iredale-thumb.png"
              alt="Reed Iredale"
              width={112}
              height={112}
              className="object-cover object-top w-full h-full"
              priority
            />
          </div>

          {/* Identity */}
          <p className="text-white/55 text-sm font-semibold tracking-wide mb-12">
            Reed Iredale &nbsp;·&nbsp; Growth Experimentation Consultant &nbsp;·&nbsp; Brisbane, AU
          </p>

          {/* Headline */}
          <h1 className="font-display font-bold text-white tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
            Double your conversions<br className="hidden sm:block" /> without doubling{' '}
            <span className="text-green-400">your budget.</span>
          </h1>

          {/* Sub */}
          <p className="text-white/50 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            I run structured growth experiments that find the revenue hiding in your funnel —
            the leaks your analytics aren&apos;t showing you. No extra ad spend required.
          </p>

          {/* CTA */}
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl text-base transition-colors duration-150 shadow-lg shadow-green-500/25"
          >
            Get your free CRO audit
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Trust strip */}
          <div className="mt-12 flex flex-col items-center gap-2.5">
            <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest">Trusted by</p>
            <p className="text-white/55 text-sm font-semibold leading-relaxed">
              BHP &nbsp;·&nbsp; Ladbrokes &nbsp;·&nbsp; Australian Retirement Trust &nbsp;·&nbsp; Oscar Wylee &nbsp;·&nbsp; Petzyo &nbsp;·&nbsp; InfoChoice &nbsp;·&nbsp; 200+ others
            </p>
          </div>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
