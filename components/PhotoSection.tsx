import Link from 'next/link'
import Image from 'next/image'

export default function PhotoSection() {
  return (
    <section className="flex flex-col sm:flex-row min-h-[600px] sm:min-h-[700px]">

      {/* Text side */}
      <div className="bg-slate-900 flex flex-col justify-center px-10 py-16 sm:px-16 sm:w-1/2 order-2 sm:order-1">
        <p className="text-green-400 text-[11px] font-bold uppercase tracking-widest mb-6">
          Growth Experimentation Consultant
        </p>
        <h2
          className="font-display font-bold text-white tracking-tight mb-6 leading-[1.05]"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          I find the revenue<br /> hiding in your funnel.
        </h2>
        <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
          15+ years in CRO, experimentation, and growth strategy. Trained data scientist.
          NN Group design award winner. Worked with BHP, Ladbrokes, Australian Retirement Trust,
          and 200+ others.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-colors duration-150 text-base shadow-lg shadow-green-500/20"
          >
            Get your free audit →
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold rounded-xl transition-colors duration-150 text-base"
          >
            About Reed
          </Link>
        </div>
      </div>

      {/* Photo side */}
      <div className="relative sm:w-1/2 h-72 sm:h-auto order-1 sm:order-2 overflow-hidden">
        <Image
          src="/reed-iredale-headshot.webp"
          alt="Reed Iredale"
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

    </section>
  )
}
