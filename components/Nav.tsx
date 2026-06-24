'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'

const NAV_LINKS = [
  { label: 'AI Consulting', href: '/ai-consulting' },
  { label: 'About',         href: '/about' },
  { label: 'Case Studies',  href: '/case-studies' },
]

export default function Nav() {
  const posthog   = usePostHog()
  const pathname  = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dark = isHome && !scrolled

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      dark ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-b border-neutral-100'
    }`}>
      <div className="max-w-content mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display font-bold text-sm tracking-tight transition-colors duration-300 hover:opacity-70 ${
            dark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          Reed Iredale
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-5">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium transition-colors duration-150 ${
                  dark
                    ? 'text-white/60 hover:text-white'
                    : pathname === link.href
                      ? 'text-neutral-900'
                      : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => posthog?.capture('cta_clicked', { cta: 'nav' })}
            className="text-xs font-semibold px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-lg transition-colors duration-150 whitespace-nowrap"
          >
            Free CRO audit
          </Link>
        </div>
      </div>
    </nav>
  )
}
