'use client'

import { useState } from 'react'
import type { SimpleIcon } from 'simple-icons'
import {
  // AI & Intelligence
  siClaude, siAnthropic, siHuggingface, siGooglegemini, siMistralai,
  siPerplexity, siLangchain, siCrewai, siReplicate, siGithubcopilot, siDataiku,
  // CRM & Customer Success
  siHubspot, siZoho, siIntercom, siZendesk, siExpensify,
  // Email & Marketing
  siMailchimp, siBrevo, siMailgun, siCampaignmonitor, siGmail,
  // Analytics & BI
  siGoogleanalytics, siMixpanel, siLooker, siGrafana, siDatadog,
  siMetabase, siPlausibleanalytics, siSimpleanalytics, siHotjar,
  // Social & Ads
  siMeta, siGoogleads, siFacebook, siInstagram, siTiktok,
  siX, siYoutube, siPinterest, siSnapchat, siReddit,
  // Data & Integration
  siGooglebigquery, siSnowflake, siDatabricks, siAirbyte,
  siGoogletagmanager, siGooglesearchconsole, siGooglemarketingplatform,
  // Automation
  siZapier, siMake, siN8n, siIfttt, siApacheairflow,
  // E-commerce & Payments
  siShopify, siWoocommerce, siBigcommerce, siStripe, siPaypal, siSquare,
  // Productivity & PM
  siNotion, siAirtable, siAsana, siTrello, siClickup, siJira, siConfluence,
  // Website & CMS
  siWebflow, siWordpress, siWix, siSquarespace, siFramer, siContentful,
  // Meetings & Forms
  siZoom, siLoom, siCalendly, siTypeform, siGooglemeet,
  // Design & Docs
  siFigma, siGooglesheets, siGoogledocs,
  // Other
  siSemrush, siDropbox,
} from 'simple-icons'

// Icons with hex luminance > 0.6 are invisible on white — fall back to neutral-700
function displayColor(hex: string): string {
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return lum > 0.6 ? '#374151' : `#${hex}`
}

function BrandIcon({ icon, size = 20 }: { icon: SimpleIcon; size?: number }) {
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

type IconEntry = { name: string; icon: SimpleIcon }

const ALL_ICONS: IconEntry[] = [
  // row 1 (first half)
  { name: 'Claude',               icon: siClaude },
  { name: 'HubSpot',              icon: siHubspot },
  { name: 'Google Analytics',     icon: siGoogleanalytics },
  { name: 'Meta',                 icon: siMeta },
  { name: 'Zapier',               icon: siZapier },
  { name: 'Shopify',              icon: siShopify },
  { name: 'Notion',               icon: siNotion },
  { name: 'Anthropic',            icon: siAnthropic },
  { name: 'Mailchimp',            icon: siMailchimp },
  { name: 'Mixpanel',             icon: siMixpanel },
  { name: 'Google Ads',           icon: siGoogleads },
  { name: 'Make',                 icon: siMake },
  { name: 'Stripe',               icon: siStripe },
  { name: 'Airtable',             icon: siAirtable },
  { name: 'Hugging Face',         icon: siHuggingface },
  { name: 'Intercom',             icon: siIntercom },
  { name: 'Looker',               icon: siLooker },
  { name: 'Instagram',            icon: siInstagram },
  { name: 'n8n',                  icon: siN8n },
  { name: 'WooCommerce',          icon: siWoocommerce },
  { name: 'Asana',                icon: siAsana },
  { name: 'Mistral AI',           icon: siMistralai },
  { name: 'Brevo',                icon: siBrevo },
  { name: 'Datadog',              icon: siDatadog },
  { name: 'TikTok',               icon: siTiktok },
  { name: 'Apache Airflow',       icon: siApacheairflow },
  { name: 'Webflow',              icon: siWebflow },
  { name: 'Jira',                 icon: siJira },
  { name: 'Google Gemini',        icon: siGooglegemini },
  { name: 'Gmail',                icon: siGmail },
  { name: 'Snowflake',            icon: siSnowflake },
  { name: 'Facebook',             icon: siFacebook },
  { name: 'Airbyte',              icon: siAirbyte },
  { name: 'Trello',               icon: siTrello },
  { name: 'LangChain',            icon: siLangchain },
  { name: 'Zendesk',              icon: siZendesk },
  { name: 'Grafana',              icon: siGrafana },
  { name: 'YouTube',              icon: siYoutube },
  { name: 'Framer',               icon: siFramer },
  { name: 'ClickUp',              icon: siClickup },
  // row 2 (second half)
  { name: 'Perplexity',           icon: siPerplexity },
  { name: 'Zoho',                 icon: siZoho },
  { name: 'Hotjar',               icon: siHotjar },
  { name: 'X',                    icon: siX },
  { name: 'IFTTT',                icon: siIfttt },
  { name: 'BigCommerce',          icon: siBigcommerce },
  { name: 'Confluence',           icon: siConfluence },
  { name: 'CrewAI',               icon: siCrewai },
  { name: 'Mailgun',              icon: siMailgun },
  { name: 'Metabase',             icon: siMetabase },
  { name: 'Pinterest',            icon: siPinterest },
  { name: 'Databricks',           icon: siDatabricks },
  { name: 'WordPress',            icon: siWordpress },
  { name: 'GitHub Copilot',       icon: siGithubcopilot },
  { name: 'Campaign Monitor',     icon: siCampaignmonitor },
  { name: 'Plausible Analytics',  icon: siPlausibleanalytics },
  { name: 'Snapchat',             icon: siSnapchat },
  { name: 'Google BigQuery',      icon: siGooglebigquery },
  { name: 'Wix',                  icon: siWix },
  { name: 'Replicate',            icon: siReplicate },
  { name: 'Expensify',            icon: siExpensify },
  { name: 'Simple Analytics',     icon: siSimpleanalytics },
  { name: 'Reddit',               icon: siReddit },
  { name: 'Google Tag Manager',   icon: siGoogletagmanager },
  { name: 'Squarespace',          icon: siSquarespace },
  { name: 'Dataiku',              icon: siDataiku },
  { name: 'PayPal',               icon: siPaypal },
  { name: 'Google Meet',          icon: siGooglemeet },
  { name: 'Semrush',              icon: siSemrush },
  { name: 'Figma',                icon: siFigma },
  { name: 'Google Search Console',icon: siGooglesearchconsole },
  { name: 'Square',               icon: siSquare },
  { name: 'Zoom',                 icon: siZoom },
  { name: 'Contentful',           icon: siContentful },
  { name: 'Google Mktg Platform', icon: siGooglemarketingplatform },
  { name: 'Loom',                 icon: siLoom },
  { name: 'Typeform',             icon: siTypeform },
  { name: 'Google Sheets',        icon: siGooglesheets },
  { name: 'Calendly',             icon: siCalendly },
  { name: 'Google Docs',          icon: siGoogledocs },
  { name: 'Dropbox',              icon: siDropbox },
]

const ROW1 = ALL_ICONS.slice(0, 41)
const ROW2 = ALL_ICONS.slice(41)

function IconCard({ entry }: { entry: IconEntry }) {
  return (
    <div
      title={entry.name}
      className="shrink-0 w-10 h-10 rounded-xl bg-white border border-neutral-150 shadow-sm flex items-center justify-center"
      style={{ border: '1px solid #e5e7eb' }}
    >
      <BrandIcon icon={entry.icon} size={20} />
    </div>
  )
}

function MarqueeRow({ icons, reverse = false, duration }: { icons: IconEntry[]; reverse?: boolean; duration: number }) {
  const [paused, setPaused] = useState(false)
  const doubled = [...icons, ...icons]

  return (
    <div
      className="overflow-hidden"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-3 py-1"
        style={{
          animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          width: 'max-content',
        }}
      >
        {doubled.map((entry, i) => (
          <IconCard key={`${entry.name}-${i}`} entry={entry} />
        ))}
      </div>
    </div>
  )
}

export default function ToolSwitcher() {
  return (
    <section id="contact" className="pb-16 border-t border-neutral-100">
      <div className="space-y-3 pt-10">
        <p className="text-xs text-neutral-400 text-center px-6 mb-3">
          500+ tools integrated — probably know yours already
        </p>
        <MarqueeRow icons={ROW1} reverse={false} duration={55} />
        <MarqueeRow icons={ROW2} reverse={true}  duration={45} />
      </div>
    </section>
  )
}
