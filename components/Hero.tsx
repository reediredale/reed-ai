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
      <section className="bg-slate-900 min-h-[calc(100vh-0px)] flex flex-col sm:flex-row overflow-hidden">

        {/* Text side */}
        <div className="flex flex-col justify-center px-8 sm:px-16 pt-32 pb-16 sm:pt-0 sm:pb-0 sm:w-[52%] shrink-0 z-10">

          {/* Identity */}
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-8">
            Reed Iredale &nbsp;·&nbsp; Growth Experimentation Consultant &nbsp;·&nbsp; Brisbane, AU
          </p>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white tracking-tight leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Double your conversions<br /> without doubling{' '}
            <span className="text-green-400">your budget.</span>
          </h1>

          {/* Sub */}
          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
            I run structured growth experiments that find the revenue hiding in your funnel —
            the leaks your analytics aren&apos;t showing you. No extra ad spend required.
          </p>

          {/* CTA */}
          <div>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl text-base transition-colors duration-150 shadow-lg shadow-green-500/25"
            >
              Contact Me
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Trust strip
          <div className="mt-12 flex flex-col gap-2.5">
            <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest">Trusted by</p>
            <p className="text-white/50 text-sm font-semibold leading-relaxed">
              BHP &nbsp;·&nbsp; Ladbrokes &nbsp;·&nbsp; Australian Retirement Trust &nbsp;·&nbsp; Oscar Wylee &nbsp;·&nbsp; Petzyo &nbsp;·&nbsp; InfoChoice &nbsp;·&nbsp; 200+ others
            </p>
          </div>
 */}
        </div>

        {/* Photo side */}
        <div className="relative h-72 sm:h-auto sm:flex-1 order-first sm:order-last">
          <Image
            src="/reed-iredale-headshot.webp"
            alt="Reed Iredale"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority
          />
          {/* Gradient fade into dark bg on desktop */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent hidden sm:block" />
        </div>

      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
