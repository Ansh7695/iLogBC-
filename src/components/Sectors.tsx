import type { Page } from "../data/siteData"

import { network } from "../data/homeData"

export default function Sectors({
  navigate,
}: {
  navigate: (page: Page) => void
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-14 md:py-28">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-2">
          <div className="text-[10px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">
            Connected Industries
          </div>
          <h2
            className="mt-5 mb-6 text-4xl leading-tight text-[#F0E8D5] sm:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Live Industry
            <br />
            <em className="text-[#C9A84C]">Network</em>
          </h2>
          <p className="mb-9 max-w-sm text-sm leading-relaxed text-[#8A8070]">
            Explore the sectors where iLogBC supports logistics, infrastructure,
            supply-chain transformation, market entry, transactions and
            investment.
          </p>
          <button
            type="button"
            onClick={() => navigate("industries")}
            className="border border-[#C9A84C]/40 px-6 py-3 text-[9px] font-mono tracking-[0.22em] text-[#C9A84C] uppercase hover:bg-[#C9A84C]/10"
          >
            Explore Industries ↗
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3 lg:col-span-3">
          {network.map((item, index) => (
            <button
              type="button"
              key={item}
              onClick={() => navigate("industries")}
              className="flex items-center justify-between border border-[#C9A84C]/10 px-5 py-4 text-left text-[12px] text-[#F0E8D5] hover:border-[#C9A84C]/45"
            >
              <span>
                <span className="mr-4 text-[9px] font-mono text-[#C9A84C]/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </span>
              <span className="text-[#C9A84C]">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
