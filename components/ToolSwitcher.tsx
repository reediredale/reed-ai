'use client'

import { useState, useEffect } from 'react'
import { usePostHog } from 'posthog-js/react'
import ContactModal from './ContactModal'

// Each slot cycles through tools in its category independently, staggered in time
const toolGroups = [
  {
    label: 'CRM',
    tools: [
      { name: 'HubSpot',     slug: 'hubspot' },
      { name: 'Salesforce',  slug: 'salesforce' },
      { name: 'Pipedrive',   slug: 'pipedrive' },
    ],
  },
  {
    label: 'Email',
    tools: [
      { name: 'Mailchimp',        slug: 'mailchimp' },
      { name: 'Klaviyo',          slug: 'klaviyo' },
      { name: 'ActiveCampaign',   slug: 'activecampaign' },
    ],
  },
  {
    label: 'Analytics',
    tools: [
      { name: 'Google Analytics', slug: 'googleanalytics' },
      { name: 'Mixpanel',         slug: 'mixpanel' },
      { name: 'Amplitude',        slug: 'amplitude' },
    ],
  },
  {
    label: 'Ads',
    tools: [
      { name: 'Meta',     slug: 'meta' },
      { name: 'LinkedIn', slug: 'linkedin' },
      { name: 'TikTok',   slug: 'tiktok' },
    ],
  },
  {
    label: 'Automation',
    tools: [
      { name: 'Zapier', slug: 'zapier' },
      { name: 'Make',   slug: 'make' },
      { name: 'n8n',    slug: 'n8n' },
    ],
  },
]

const cyclingWords = ['company', 'sales team', 'marketing team', 'revenue team', 'startup']

type Tool  = { name: string; slug: string }
type Group = { label: string; tools: Tool[] }

function ToolSlot({ group, staggerIndex }: { group: Group; staggerIndex: number }) {
  const [toolIdx, setToolIdx] = useState(staggerIndex % group.tools.length)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    // Stagger start time so slots don't all flip at once
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setVisible(false)
        setTimeout(() => {
          setToolIdx((prev) => (prev + 1) % group.tools.length)
          setVisible(true)
        }, 220)
      }, 2400)
    }, staggerIndex * 480)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [group.tools.length, staggerIndex])

  const tool = group.tools[toolIdx]

  return (
    <div className="flex flex-col items-center gap-2 shrink-0">
      {/* Icon card */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${tool.slug}`}
          alt={tool.name}
          title={tool.name}
          width={26}
          height={26}
          className={`transition-all duration-200 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ width: 26, height: 26, objectFit: 'contain' }}
        />
      </div>
      {/* Category label */}
      <span className="text-[9px] sm:text-[10px] font-semibold text-neutral-400 uppercase tracking-widest whitespace-nowrap">
        {group.label}
      </span>
    </div>
  )
}

// Animated dashed line with a pulse travelling across it
function Connector() {
  return (
    <div className="relative flex items-center w-6 sm:w-10 pb-5 overflow-hidden shrink-0">
      {/* Static dotted line */}
      <div className="w-full border-t border-dashed border-neutral-200" />
      {/* Travelling glow */}
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
  const [wordIdx, setWordIdx]     = useState(0)
  const [wordFading, setWordFading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Cycle the headline word
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

  const openModal = () => {
    posthog?.capture('cta_clicked', { cta: 'tool_switcher' })
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="contact" className="px-6 pb-24 border-t border-neutral-100">
        <div className="max-w-content mx-auto pt-16">

          {/* Cycling headline */}
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900 leading-snug mb-3">
            Tell me what your{' '}
            <span
              className={`inline-block transition-all duration-[250ms] ${
                wordFading
                  ? 'opacity-0 -translate-y-1'
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {cyclingWords[wordIdx]}
            </span>
            {' '}does.
          </h2>
          <p className="text-neutral-500 text-sm mb-12">
            Whatever your stack looks like, I'll help you make it smarter.
          </p>

          {/* Animated icon row */}
          <div className="flex items-end overflow-x-auto pb-1 -mx-1 px-1">
            {toolGroups.map((group, i) => (
              <div key={group.label} className="flex items-end">
                <ToolSlot group={group} staggerIndex={i} />
                {i < toolGroups.length - 1 && <Connector />}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg transition-colors duration-150"
            >
              Tell me about your setup →
            </button>
          </div>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
