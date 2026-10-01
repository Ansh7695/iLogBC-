import { useState } from "react"

import { services } from "../data/siteData"

import { Line } from "./Text"

export default function ServiceList() {
  const [active, setActive] = useState(0)

  const service = services[active]

  return (
    <section className="border-b border-[#C9A84C]/10">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-5">
        <div className="border-b border-[#C9A84C]/10 lg:col-span-2 lg:border-b-0 lg:border-r">
          {services.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setActive(index)}
                className={`flex w-full items-center gap-4 border-b border-[#C9A84C]/10 px-5 py-5 text-left sm:gap-7 sm:px-9 sm:py-7 ${
                active === index ? "bg-[#11111E]" : "hover:bg-[#0D0D1A]"
              }`}
            >
              <span className="text-[10px] font-mono text-[#C9A84C]">
                {item.number}
              </span>
              <span
                className="text-base text-[#F0E8D5] sm:text-[1.1rem]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.name}
              </span>
              {active === index && (
                <span className="ml-auto text-[#C9A84C]">-&gt;</span>
              )}
            </button>
          ))}
        </div>
        <div className="px-5 py-10 sm:px-8 md:px-14 md:py-14 lg:col-span-3">
          <div className="mb-2 text-[9px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">
            Service {service.number}
          </div>
          <h2
            className="mb-2 text-2xl leading-tight text-[#F0E8D5] sm:text-3xl md:text-[2.4rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.name}
          </h2>
          <div className="mb-5 text-sm italic text-[#C9A84C]/80">
            {service.short}
          </div>
          <Line />
          <p className="mt-6 mb-8 text-sm leading-relaxed text-[#8A8070]">
            {service.description}
          </p>
          <div className="mb-4 text-[9px] font-mono tracking-[0.3em] text-[#C9A84C]/60 uppercase">
            Capabilities
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 text-[12px] text-[#8A8070]"
              >
                <span className="h-4 w-px bg-[#C9A84C]/40" />
                {capability}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-10 border border-[#C9A84C]/40 px-6 py-3 text-[9px] font-mono tracking-[0.22em] text-[#C9A84C] uppercase hover:bg-[#C9A84C]/10"
          >
            Request a Briefing
          </button>
        </div>
      </div>
    </section>
  )
}
