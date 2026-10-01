import type { Page } from '../data/siteData'

const offerings = [
  {
    icon: '01',
    title: 'Regulatory & Compliance Guidance',
    text: 'Navigate registration, licensing and legal requirements for market entry.',
  },
  {
    icon: '02',
    title: 'Market Research & Feasibility',
    text: 'Assess demand, competition and viability before committing resources.',
  },
  {
    icon: '03',
    title: 'Local Partner & Vendor Identification',
    text: 'Source and vet trusted partners, suppliers and distributors.',
  },
  {
    icon: '04',
    title: 'Ongoing Operational Advisory',
    text: 'Stay supported as your business scales, from tax structure to supply chain setup.',
  },
]

const additionalServices = [
  'Tax Advisory',
  'Legal Documentation',
  'Cultural & Negotiation Coaching',
  'Local Recruitment Support',
]

export default function MarketEntry({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="border-y border-[#C9A84C]/10 bg-[#0D0D1A] px-4 py-14 text-[#F0E8D5] sm:px-6 md:px-14 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div>
            <div className="text-[10px] font-bold font-mono tracking-[0.35em] text-[#C9A84C] uppercase">
              Expansion Advisory
            </div>
            <h2
              className="mt-4 max-w-3xl text-4xl leading-tight text-[#F0E8D5] md:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Market Entry &amp; India Advisory
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#8A8070]">
              End-to-end guidance for businesses entering or scaling in the Indian market.
            </p>
            <button
              type="button"
              onClick={() => navigate('services')}
              className="mt-7 rounded-full bg-[#C9A227] px-5 py-3 text-[9px] font-bold font-mono tracking-[0.15em] text-[#11111A] shadow-[0_0_0_rgba(201,162,39,0)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(201,162,39,0.28)]"
            >
              REQUEST A CONSULTATION →
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {offerings.map((offering) => (
            <article key={offering.title} className="group p-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A227]/20 text-[11px] font-bold font-mono text-[#E8C96A] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#C9A227]/35">
                {offering.icon}
              </div>
              <h3
                className="mt-5 text-xl leading-tight text-[#F0E8D5]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {offering.title}
              </h3>
              <p className="mt-3 text-[12px] leading-relaxed text-[#8A8070]">
                {offering.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#C9A84C]/15 pt-6 md:mt-16 md:flex-row md:items-center">
          <div className="shrink-0 text-[9px] font-bold font-mono tracking-[0.2em] text-[#8A8070] uppercase">
            Additional Services
          </div>
          <div className="flex flex-wrap gap-2">
            {additionalServices.map((service) => (
              <span
                key={service}
                className="rounded-full border border-[#C9A84C]/35 px-3 py-2 text-[10px] text-[#D0C7B5] transition-colors hover:bg-[#C9A227]/20"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
