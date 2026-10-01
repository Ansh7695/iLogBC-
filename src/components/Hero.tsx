import type { Page } from "../data/siteData"

import { assets } from "../assets/assets"

import { Label } from "./Text"

export default function Hero({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden py-24 sm:min-h-[680px] sm:py-28 lg:min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${assets.heroBackground}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06060F]/95 via-[#06060F]/75 to-[#06060F]/35" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-14">
        <div className="max-w-xl rounded-2xl border border-[#C9A84C]/20 bg-[#06060F]/50 p-8 backdrop-blur-md sm:p-10 md:p-12" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(201,168,76,0.12)" }}>
          <Label>India & International Markets</Label>
          <h1
            className="mt-6 mb-7 text-4xl leading-[0.95] text-[#F0E8D5] sm:text-5xl md:mt-7 md:mb-8 md:text-6xl lg:text-[4.5rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            One Sector.
            <br />
            <em className="text-[#C9A84C] not-italic">Every Stakeholder.</em>
            <br />
            Every Mode.
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-[#D0C7B5] sm:text-[0.95rem] md:mb-10">
            Specialist advisory for shipping, logistics, infrastructure,
            manufacturing and supply-chain businesses navigating complex
            commercial decisions, investments and growth opportunities in India.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              type="button"
              onClick={() => navigate("services")}
              className="w-full bg-[#C9A84C] px-6 py-3.5 text-[9px] font-bold font-mono tracking-[0.2em] text-[#0B0B14] uppercase hover:bg-[#E8C96A] sm:w-auto sm:px-8 sm:tracking-[0.25em]"
            >
              Explore Our Services ↓
            </button>
            <button
              type="button"
              onClick={() => navigate("services")}
              className="w-full border border-[#C9A84C]/40 px-6 py-3.5 text-[9px] font-mono tracking-[0.2em] text-[#C9A84C] uppercase hover:bg-[#C9A84C]/10 sm:w-auto sm:px-8 sm:tracking-[0.25em]"
            >
              Request a Consultation ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
