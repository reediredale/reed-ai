'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePostHog } from 'posthog-js/react'
import ContactModal from './ContactModal'

const CYCLING_WORDS = ['company', 'sales team', 'marketing team', 'revenue team', 'startup']

export default function Hero() {
  const posthog = usePostHog()
  const [wordIdx, setWordIdx]         = useState(0)
  const [wordFading, setWordFading]   = useState(false)
  const [cursorOn, setCursorOn]       = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const iv = setInterval(() => {
      setWordFading(true)
      setTimeout(() => { setWordIdx(p => (p + 1) % CYCLING_WORDS.length); setWordFading(false) }, 280)
    }, 2800)
    return () => clearInterval(iv)
  }, [])

  useEffect(() => {
    const iv = setInterval(() => setCursorOn(v => !v), 530)
    return () => clearInterval(iv)
  }, [])

  const openModal = () => {
    posthog?.capture('cta_clicked', { cta: 'hero_input' })
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="pt-20 pb-10 px-6">
        <div className="max-w-content mx-auto">

          {/* Identity + scarcity badge */}
          <div className="flex items-center gap-4 mb-7">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200 shrink-0">
              <Image
                src="/reed-iredale-thumb.png"
                alt="Reed Iredale"
                width={48}
                height={48}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="font-display font-semibold text-neutral-900 text-sm leading-tight">
                Reed Iredale
              </p>
              <p className="text-neutral-500 text-xs mt-0.5">
                AI for sales &amp; marketing teams · RMIT &amp; UTS Data Science
              </p>
            </div>
            {/*
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-200 bg-green-50">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
               <span className="text-xs font-medium text-green-700 whitespace-nowrap">Taking new projects</span> 
            </div>*/}
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-[2.6rem] font-bold text-neutral-900 leading-[1.15] tracking-tight mb-4">
            Your sales data already knows<br className="hidden sm:block" /> who&apos;ll buy next.
            <span className="text-neutral-400 font-normal"> I build the AI that reads it.</span>
          </h1>

          {/* Sub */}
          <p className="text-neutral-500 text-base leading-relaxed  mb-6">
            Most B2B teams have 12+ months of buying signals sitting in their CRM, calls, and
            email threads — but their tools can&apos;t decode them. I build self-learning AI that
            connects your stack and turns that data into closed deals.
          </p>

          {/* CTA — dark high-contrast input above the fold */}
          <button
            onClick={openModal}
            aria-label="Tell me what your company does"
            className="w-full flex items-center gap-4 pl-5 pr-2 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-2xl text-left transition-colors duration-150 group cursor-text mb-4"
          >
            <span className="flex-1 text-sm text-neutral-500 select-none py-2">
              Tell me what your{' '}
              <span className={`text-white font-medium transition-all duration-[250ms] inline-block ${wordFading ? 'opacity-0 -translate-y-0.5' : 'opacity-100 translate-y-0'}`}>
                {CYCLING_WORDS[wordIdx]}
              </span>
              {' '}does
              <span className={`inline-block w-px h-3.5 bg-white ml-0.5 align-middle transition-opacity duration-75 ${cursorOn ? 'opacity-100' : 'opacity-0'}`} />
            </span>
            <span className="shrink-0 flex items-center gap-1.5 bg-white text-neutral-900 text-xs font-semibold px-4 py-2.5 rounded-xl group-hover:bg-neutral-100 transition-colors duration-150 whitespace-nowrap">
              Get in touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>

          {/* Authority micro-copy — reassurance directly under CTA */}
          <p className="text-xs text-neutral-400">
            Data Science · RMIT University &amp; UTS &nbsp;·&nbsp; Worked with loads of sales &amp; marketing teams
          </p>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
