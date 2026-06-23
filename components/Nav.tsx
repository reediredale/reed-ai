'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'

const NAV_LINKS = [
  { label: 'AI Consulting', href: '/ai-consulting' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
]

export default function Nav() {
  const posthog = usePostHog()
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-semibold text-neutral-900 text-sm tracking-tight hover:opacity-70 transition-opacity"
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
                  pathname === link.href
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
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-150 whitespace-nowrap"
          >
            Free CRO audit →
          </Link>
        </div>
      </div>
    </nav>
  )
}
