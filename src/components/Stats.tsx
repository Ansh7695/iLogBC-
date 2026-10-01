import { marketStats } from "../data/homeData"

export default function Stats() {
  return (
    <section className="border-y border-[#C9A84C]/10 bg-[#0B0B14] px-4 py-16 sm:px-6 md:px-14 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="text-[10px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">
            The Market We Work In
          </div>
          <h2
            className="mt-4 text-3xl leading-tight text-[#F0E8D5] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            India's Logistics Economy{" "}
            <em className="text-[#C9A84C]">by the Numbers</em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#8A8070]">
            India’s logistics sector is being reshaped by infrastructure
            development, manufacturing growth, multimodal freight networks and
            expanding domestic and international trade.
          </p>
        </div>
        <div className="grid gap-px bg-[#C9A84C]/10 sm:grid-cols-2 lg:grid-cols-3">
          {marketStats.map((stat) => (
            <article key={stat.label} className="bg-[#0B0B14] p-7">
              <div className="text-[9px] font-mono tracking-[0.2em] text-[#C9A84C] uppercase">
                {stat.label}
              </div>
              <div
                className="mt-4 text-3xl text-[#F0E8D5] sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <p className="mt-3 min-h-10 text-[12px] leading-relaxed text-[#8A8070]">
                {stat.detail}
              </p>
              <div className="mt-6 border-t border-[#C9A84C]/10 pt-4 text-[10px] font-mono text-[#C9A84C]">
                <span className="text-[#8A8070]">{stat.note}: </span>
                {stat.noteValue}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
