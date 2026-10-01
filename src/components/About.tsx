import type { Page } from '../data/siteData'
import { assets } from '../assets/assets'

const points = [
  {
    eyebrow: 'SPECIALIST EXPERTISE',
    title: 'Specialists, not generalists.',
    button: 'MEET THE SPECIALISTS',
    text: 'Exclusive focus on shipping, logistics, supply chain and infrastructure.',
    style: 'bg-gradient-to-br from-[#24231F] via-[#2D291E] to-[#8C711E]/70',
    lines: false,
  },
  {
    eyebrow: 'SECTOR FOCUS',
    title: '100% focused on the physical flow.',
    button: 'SEE OUR FOCUS',
    text: 'Every engagement is centred on logistics, freight, ports and the decisions around them.',
    style: 'bg-[#11111A]',
    lines: true,
  },
  {
    eyebrow: 'INDIA EXPERTISE',
    title: 'Built for the Indian market.',
    button: 'EXPLORE INDIA ADVISORY',
    text: "Frameworks designed for India's regulations and commercial realities.",
    style: 'bg-gradient-to-br from-[#1B1A1C] via-[#171515] to-[#4A3D1A]',
    lines: false,
  },
] as const

export default function About({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="border-y border-[#C9A84C]/10 bg-[#0D0D1A] px-4 py-7 sm:px-6 md:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5">
          <div className="text-[10px] font-bold font-mono tracking-[0.4em] text-[#C9A84C] uppercase">
            Why iLogBC
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#8A8070]">
            Focused expertise for shipping, logistics, supply chain, ports,
            infrastructure and the Indian market.
          </p>
        </div>

        <div className="grid gap-3 lg:min-h-[360px] lg:grid-cols-2 lg:grid-rows-3">
          <article className="group relative min-h-[300px] overflow-hidden rounded-[20px] lg:row-span-3">
            <video
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              src={assets.whyVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Why iLogBC specialist advisory"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06060F] via-[#06060F]/45 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-5 sm:p-6 md:p-7">
              <div className="text-[10px] font-bold font-mono tracking-[0.3em] text-[#E8C96A] uppercase">
                FROM AMBITION TO OUTCOMES
              </div>
              <h2
                className="mt-3 max-w-xl text-3xl leading-tight text-[#F0E8D5] sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Logistics, built on trust.
              </h2>
              <button
                type="button"
                onClick={() => navigate('services')}
                className="mt-5 w-fit rounded-full bg-[#C9A227] px-4 py-2.5 text-[8px] font-bold font-mono tracking-[0.14em] text-[#11111A] shadow-[0_0_0_rgba(201,162,39,0)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(201,162,39,0.28)]"
              >
                DISCOVER THE DIFFERENCE →
              </button>
            </div>
          </article>

          <div className="grid gap-5 lg:row-span-3 lg:grid-rows-3">
            {points.map((point) => (
              <article
                key={point.eyebrow}
                className={`group relative min-h-[150px] overflow-hidden rounded-[18px] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.24)] sm:min-h-[130px] md:p-5 lg:min-h-[100px] ${point.style}`}
              >
                {point.lines && (
                  <div className="pointer-events-none absolute inset-0 opacity-40">
                    <div className="absolute left-[-10%] top-1/2 h-px w-[120%] rotate-12 bg-[#C9A84C]/60" />
                    <div className="absolute left-[-10%] top-1/2 h-px w-[120%] -rotate-12 bg-[#F0E8D5]/25" />
                    <div className="absolute left-1/2 top-[-20%] h-[140%] w-px rotate-[28deg] bg-[#C9A84C]/25" />
                  </div>
                )}
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="text-[9px] font-bold font-mono tracking-[0.25em] text-[#E8C96A] uppercase">
                      {point.eyebrow}
                    </div>
                    <h3
                      className="mt-2 max-w-md text-xl leading-tight text-[#F0E8D5] md:text-2xl"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {point.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[11px] leading-relaxed text-[#D0C7B5]/75">
                      {point.text}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('services')}
                    className="mt-4 w-fit rounded-full border border-[#C9A227]/70 bg-[#C9A227] px-3 py-2 text-[8px] font-bold font-mono tracking-[0.11em] text-[#11111A] transition duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(201,162,39,0.25)]"
                  >
                    {point.button} →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
