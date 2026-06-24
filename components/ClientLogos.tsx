const CLIENTS = [
  'BHP',
  'Ladbrokes',
  'Australian Retirement Trust',
  'Oscar Wylee',
  'loans.com.au',
  'JB Racks',
  'Petzyo',
  'Savings.com.au',
  'InfoChoice',
  'X (Twitter)',
  'First Mac',
  'Flight Centre',
]

export default function ClientLogos() {
  return (
    <section className="py-14 px-6 sm:px-8 bg-white border-b border-neutral-100">
      <div className="max-w-content mx-auto">
        <p className="text-center text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-8">
          200+ brands trust Reed with their conversions, including
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {CLIENTS.map(client => (
            <span
              key={client}
              className="px-4 py-2 border border-neutral-200 rounded-full text-sm font-semibold text-neutral-600 bg-neutral-50 hover:border-neutral-300 hover:bg-white transition-colors"
            >
              {client}
            </span>
          ))}
          <span className="px-4 py-2 border border-dashed border-neutral-200 rounded-full text-sm font-semibold text-neutral-400">
            + 188 more
          </span>
        </div>
      </div>
    </section>
  )
}
