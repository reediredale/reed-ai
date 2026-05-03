import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-28 pb-10 px-6">
      <div className="max-w-content mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shrink-0">
            <Image
              src="/reed-iredale-headshot.webp"
              alt="Reed Iredale"
              width={44}
              height={44}
              className="object-cover object-top w-full h-full"
              priority
            />
          </div>
          <div>
            <p className="font-display font-semibold text-neutral-900 text-sm leading-tight">
              Reed Iredale
            </p>
            <p className="text-neutral-500 text-xs mt-0.5">
              AI for sales &amp; marketing teams · RMIT &amp; UTS
            </p>
          </div>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 leading-snug tracking-tight mb-4">
          I build AI that learns your customers.
        </h1>
        <p className="text-neutral-500 text-base leading-relaxed max-w-md">
          Self-learning systems for sales and marketing teams — built on your data,
          tuned to your pipeline, and designed to get sharper over time.
        </p>
      </div>
    </section>
  )
}
