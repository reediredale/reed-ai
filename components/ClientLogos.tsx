'use client'

import { useState } from 'react'

const LOGO_CLIENTS = [
  { name: 'Australian Retirement Trust', src: '/logos/art-logo.svg',        maxW: 140 },
  { name: 'Ladbrokes',                   src: '/logos/ladbrokes-logo.svg',   maxW: 110 },
  { name: 'BHP',                         src: '/logos/bhp-logo.svg',         maxW: 70  },
  { name: 'Petzyo',                      src: '/logos/petzyo-logo.svg',      maxW: 90  },
  { name: 'Oscar Wylee',                 src: '/logos/oscarwylee-logo.svg',  maxW: 140  },
  { name: 'loans.com.au',               src: '/logos/loans-logo.svg',       maxW: 110 },
]

const TEXT_CLIENTS = [
  'JB Racks', 'Savings.com.au', 'InfoChoice', 'X (Twitter)', 'First Mac', 'Flight Centre',
]

function LogoItem({ name, src, maxW }: { name: string; src: string; maxW: number }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <span className="text-sm font-semibold text-neutral-400">{name}</span>
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      style={{ height: '32px', width: 'auto', maxWidth: `${maxW}px`, objectFit: 'contain', filter: 'brightness(0) opacity(0.4)' }}
      onError={() => setFailed(true)}
    />
  )
}

export default function ClientLogos() {
  return (
    <section className="py-14 px-6 sm:px-8 bg-white border-b border-neutral-100">
      <div className="max-w-content mx-auto">
        <p className="text-center text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-10">
          200+ brands have trusted Reed with their conversions, including
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-7">
          {LOGO_CLIENTS.map(c => (
            <LogoItem key={c.name} name={c.name} src={c.src} maxW={c.maxW} />
          ))}
          {TEXT_CLIENTS.map(client => (
            <span key={client} className="text-sm font-semibold text-neutral-400">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
