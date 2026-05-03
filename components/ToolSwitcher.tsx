'use client'

import { useState, useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'
import ContactModal from './ContactModal'
import {
  siHubspot, siStripe, siShopify,
  siMailchimp, siBrevo, siIntercom,
  siGoogleanalytics, siMixpanel, siLooker,
  siMeta, siGoogleads, siInstagram,
  siZapier, siMake, siN8n,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

function displayColor(hex: string): string {
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6 ? '#374151' : `#${hex}`
}

function BrandIcon({ icon, size = 22 }: { icon: SimpleIcon; size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={displayColor(icon.hex)}
      aria-label={icon.title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  )
}

const toolGroups = [
  {
    label: 'CRM',
    tools: [
      { name: 'HubSpot', icon: siHubspot },
      { name: 'Stripe',  icon: siStripe },
      { name: 'Shopify', icon: siShopify },
    ],
  },
  {
    label: 'Email',
    tools: [
      { name: 'Mailchimp', icon: siMailchimp },
      { name: 'Brevo',     icon: siBrevo },
      { name: 'Intercom',  icon: siIntercom },
    ],
  },
  {
    label: 'Analytics',
    tools: [
      { name: 'Google Analytics', icon: siGoogleanalytics },
      { name: 'Mixpanel',         icon: siMixpanel },
      { name: 'Looker',           icon: siLooker },
    ],
  },
  {
    label: 'Ads',
    tools: [
      { name: 'Meta',       icon: siMeta },
      { name: 'Google Ads', icon: siGoogleads },
      { name: 'Instagram',  icon: siInstagram },
    ],
  },
  {
    label: 'Automation',
    tools: [
      { name: 'Zapier', icon: siZapier },
      { name: 'Make',   icon: siMake },
      { name: 'n8n',    icon: siN8n },
    ],
  },
]

const cyclingWords = ['company', 'sales team', 'marketing team', 'revenue team', 'startup']

type Tool  = { name: string; icon: SimpleIcon }
type Group = { label: string; tools: Tool[] }

function ToolSlot({ group, staggerIndex }: { group: Group; staggerIndex: number }) {
  const [toolIdx, setToolIdx] = useState(staggerIndex % group.tools.length)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setVisible(false)
        setTimeout(() => {
          setToolIdx((prev) => (prev + 1) % group.tools.length)
          setVisible(true)
        }, 220)
      }, 2400)
    }, staggerIndex * 480)
    return () => { clearTimeout(timeout); clearInterval(interval) }
  }, [group.tools.length, staggerIndex])

  const tool = group.tools[toolIdx]

  return (
    <div className="flex flex-col items-center gap-2 shrink-0">
      <div
        title={tool.name}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center"
      >
        <span className={`transition-all duration-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <BrandIcon icon={tool.icon} size={22} />
        </span>
      </div>
      <span className="text-[9px] font-semibold text-neutral-400 uppercase tracking-widest whitespace-nowrap">
        {group.label}
      </span>
    </div>
  )
}

function Connector() {
  return (
    <div className="relative flex items-center w-5 sm:w-8 pb-5 overflow-hidden shrink-0">
      <div className="w-full border-t border-dashed border-neutral-200" />
      <div
        className="absolute h-0.5 rounded-full pointer-events-none"
        style={{
          width: '55%',
          background: 'linear-gradient(to right, transparent, #a3a3a3, transparent)',
          animation: 'connectorFlow 2.2s linear infinite',
        }}
      />
    </div>
  )
}

export default function ToolSwitcher() {
  const posthog = usePostHog()
  const [wordIdx, setWordIdx]         = useState(0)
  const [wordFading, setWordFading]   = useState(false)
  const [cursorOn, setCursorOn]       = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Cycle the placeholder word
  useEffect(() => {
    const interval = setInterval(() => {
      setWordFading(true)
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % cyclingWords.length)
        setWordFading(false)
      }, 280)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  // Blink the fake cursor
  useEffect(() => {
    const interval = setInterval(() => setCursorOn((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  const openModal = () => {
    posthog?.capture('cta_clicked', { cta: 'tool_switcher_input' })
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="contact" className="px-6 pb-24 border-t border-neutral-100">
        <div className="max-w-content mx-auto pt-16">

          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-5">
            What&apos;s your stack?
          </p>

          {/* Fake input — clicking opens the modal */}
          <button
            onClick={openModal}
            aria-label="Tell me what your company does"
            className="w-full flex items-center gap-3 px-4 py-3.5 bg-white border border-neutral-200 rounded-xl text-left hover:border-neutral-400 hover:shadow-sm transition-all duration-150 group cursor-text mb-6"
          >
            {/* Placeholder text with cycling word */}
            <span className="flex-1 text-sm text-neutral-400 select-none">
              Tell me what your{' '}
              <span
                className={`text-neutral-700 transition-all duration-[250ms] inline-block ${
                  wordFading ? 'opacity-0 -translate-y-0.5' : 'opacity-100 translate-y-0'
                }`}
              >
                {cyclingWords[wordIdx]}
              </span>
              {' '}does
              {/* Blinking cursor */}
              <span
                className={`inline-block w-px h-3.5 bg-neutral-700 ml-0.5 align-middle transition-opacity duration-75 ${
                  cursorOn ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </span>

            {/* Arrow */}
            <span className="text-neutral-300 group-hover:text-neutral-500 transition-colors text-base shrink-0">
              ↗
            </span>
          </button>

          {/* Icon row below the input */}
          <div className="flex items-end overflow-x-auto pb-1 -mx-1 px-1">
            {toolGroups.map((group, i) => (
              <div key={group.label} className="flex items-end">
                <ToolSlot group={group} staggerIndex={i} />
                {i < toolGroups.length - 1 && <Connector />}
              </div>
            ))}
          </div>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
