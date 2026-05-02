'use client'

import { useState, useRef } from 'react'
import { usePostHog } from 'posthog-js/react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const posthog = usePostHog()
  const [formState, setFormState] = useState<FormState>('idle')
  const [started, setStarted] = useState(false)
  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    tools: '',
    challenge: '',
  })
  const submitterName = useRef('')

  const handleFirstFocus = () => {
    if (!started) {
      setStarted(true)
      posthog?.capture('contact_form_started')
    }
  }

  const set = (field: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    submitterName.current = fields.name

    posthog?.capture('contact_form_submitted', {
      has_company: !!fields.company,
      tools_char_count: fields.tools.length,
      challenge_char_count: fields.challenge.length,
      $set: {
        name: fields.name,
        email: fields.email,
        company: fields.company || undefined,
      },
    })
    posthog?.identify(fields.email, {
      name: fields.name,
      email: fields.email,
      company: fields.company || undefined,
    })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      if (res.ok) {
        posthog?.capture('contact_form_success', { name: fields.name })
        setFormState('success')
      } else {
        throw new Error('Non-2xx response')
      }
    } catch {
      posthog?.capture('contact_form_error')
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <section id="contact" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center section-animate visible">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-violet-500/15 border border-violet-500/30 text-2xl mb-6">
            ✓
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Thanks, {submitterName.current}.
          </h2>
          <p className="text-gray-400 text-lg">
            I'll read through what you've shared and get back to you shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-2xl mx-auto section-animate">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">
            Get in touch
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Tell me what you're working on.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Share what tools you're using and where the friction is. I'll come back to you
            with thoughts on what's actually worth building.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs text-gray-500 mb-2 font-medium">
                Name <span className="text-violet-400">*</span>
              </label>
              <input
                type="text"
                required
                value={fields.name}
                onChange={set('name')}
                onFocus={handleFirstFocus}
                placeholder="Your name"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-2 font-medium">
                Email <span className="text-violet-400">*</span>
              </label>
              <input
                type="email"
                required
                value={fields.email}
                onChange={set('email')}
                onFocus={handleFirstFocus}
                placeholder="you@company.com"
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2 font-medium">
              Company
            </label>
            <input
              type="text"
              value={fields.company}
              onChange={set('company')}
              onFocus={handleFirstFocus}
              placeholder="Where do you work?"
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2 font-medium">
              What tools and tech are you currently using?{' '}
              <span className="text-violet-400">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={fields.tools}
              onChange={set('tools')}
              onFocus={handleFirstFocus}
              placeholder="e.g. HubSpot, Salesforce, GA4, some homegrown scripts, Zapier..."
              className="input-field resize-none"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2 font-medium">
              What's your biggest challenge right now?{' '}
              <span className="text-violet-400">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={fields.challenge}
              onChange={set('challenge')}
              onFocus={handleFirstFocus}
              placeholder="What's not working? What does 'fixed' look like for you?"
              className="input-field resize-none"
            />
          </div>

          {formState === 'error' && (
            <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              Something went wrong. Please try again or email me directly at reed@reediredale.com
            </p>
          )}

          <button
            type="submit"
            disabled={formState === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl shadow-lg shadow-violet-500/20 transition-all duration-200"
          >
            {formState === 'loading' ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>Send →</>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
