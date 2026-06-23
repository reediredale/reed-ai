'use client'

import { useState, useRef } from 'react'
import { usePostHog } from 'posthog-js/react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const VALUE_ITEMS = [
  'A full review of your biggest conversion leak',
  'Prioritised quick-win recommendations for this week',
  'An honest take — even if traffic is the real problem',
]

export default function CROAuditForm() {
  const posthog = usePostHog()
  const [formState, setFormState] = useState<FormState>('idle')
  const [fields, setFields] = useState({
    name: '', email: '', website: '', monthlyVisitors: '', challenge: '',
  })
  const submitterName = useRef('')

  const set = (field: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    submitterName.current = fields.name

    posthog?.identify(fields.email, { name: fields.name, email: fields.email })
    posthog?.capture('cro_audit_requested', {
      website: fields.website,
      monthly_visitors: fields.monthlyVisitors,
      challenge_char_count: fields.challenge.length,
      source: 'contact_page',
      $set: { name: fields.name, email: fields.email },
    })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          website: fields.website,
          monthlyVisitors: fields.monthlyVisitors,
          tools: fields.challenge,
          challenge: fields.challenge,
        }),
      })
      if (!res.ok) throw new Error()
      posthog?.capture('cro_audit_success', { name: fields.name, source: 'contact_page' })
      setFormState('success')
    } catch {
      posthog?.capture('cro_audit_error', { source: 'contact_page' })
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div className="py-12 text-center">
        <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4 text-green-600 text-xl">
          ✓
        </div>
        <p className="font-display text-2xl font-semibold text-neutral-900 mb-2">
          You&apos;re in, {submitterName.current}.
        </p>
        <p className="text-neutral-500 text-sm leading-relaxed">
          I&apos;ll review your site and send a Loom walkthrough within 48 hours.
          Keep an eye on your inbox.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-5 mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-3">
          What you&apos;ll get
        </p>
        <ul className="space-y-2.5">
          {VALUE_ITEMS.map(item => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
              <span className="text-green-500 shrink-0 mt-px font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            required
            value={fields.name}
            onChange={set('name')}
            placeholder="Your name"
            className="input-field"
            autoFocus
          />
          <input
            type="email"
            required
            value={fields.email}
            onChange={set('email')}
            placeholder="your@email.com"
            className="input-field"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="url"
            required
            value={fields.website}
            onChange={set('website')}
            placeholder="https://yoursite.com"
            className="input-field"
          />
          <input
            type="text"
            value={fields.monthlyVisitors}
            onChange={set('monthlyVisitors')}
            placeholder="Monthly visitors (optional)"
            className="input-field"
          />
        </div>
        <textarea
          required
          rows={4}
          value={fields.challenge}
          onChange={set('challenge')}
          placeholder="What's your biggest conversion challenge? (e.g. lots of traffic but poor checkout rate, high bounce on landing pages, ad spend not converting...)"
          className="input-field resize-none"
        />

        {formState === 'error' && (
          <p className="text-xs text-red-500">
            Something went wrong — email me at{' '}
            <a href="mailto:reed@reediredale.com" className="underline">reed@reediredale.com</a>
          </p>
        )}

        <button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-900 hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors duration-150"
        >
          {formState === 'loading' ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            'Claim my free audit →'
          )}
        </button>

        <p className="text-center text-xs text-neutral-400 pt-1">
          I audit ~3 sites a week.&nbsp; No pitch — ever. Just a straight answer.
        </p>
      </form>
    </>
  )
}
