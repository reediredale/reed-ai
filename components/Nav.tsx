'use client'

import { usePostHog } from 'posthog-js/react'

export default function Nav() {
  const posthog = usePostHog()

  const scrollToContact = () => {
    posthog?.capture('cta_clicked', { cta: 'nav' })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-display font-semibold text-neutral-900 text-sm tracking-tight">
          Reed Iredale
        </span>
        <button
          onClick={scrollToContact}
          className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-150"
        >
          Get in touch ↓
        </button>
      </div>
    </nav>
  )
}
