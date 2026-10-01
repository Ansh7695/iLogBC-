import { useRef } from "react"

import type { Page } from "../data/siteData"

const cards = [
  {
    pill: "SUPPLY CHAIN",

    meta: "REASON 01",

    qualifier: "On-Time Delivery",

    title: "Built for movement at every step.",

    description:
      "We connect planning, freight, partners and operations so supply chains can move with fewer surprises and stronger control.",


    offset: "lg:translate-y-8",
  },

  {
    pill: "STRATEGY",

    meta: "REASON 02",

    qualifier: "Clear Decisions",

    title: "Advice grounded in the real market.",

    description:
      "Our specialists turn sector knowledge and commercial research into practical decisions for growth, investment and change.",


    offset: "lg:-translate-y-2",
  },

  {
    pill: "OPERATIONS",

    meta: "REASON 03",

    qualifier: "Specialist Expertise",

    title: "Experience that works beyond the plan.",

    description:
      "From ports and terminals to manufacturing networks, we help teams improve how work gets done across the physical flow.",


    offset: "lg:translate-y-12",
  },

  {
    pill: "GLOBAL REACH",

    meta: "REASON 04",

    qualifier: "India Growth",

    title: "A practical route into India.",

    description:
      "Market assessment, partner identification and implementation support for businesses entering and growing across India.",


    offset: "lg:translate-y-1",
  },
] as const

export default function OurServices({
  navigate,
}: {
  navigate: (page: Page) => void
}) {
  const servicesScrollerRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 })
  const isDraggingRef = useRef(false)
  const hasDraggedRef = useRef(false)

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return

    const scroller = servicesScrollerRef.current
    if (!scroller) return

    dragStartRef.current = { x: event.clientX, scrollLeft: scroller.scrollLeft }
    isDraggingRef.current = true
    hasDraggedRef.current = false
    scroller.setPointerCapture(event.pointerId)
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) return

    const scroller = servicesScrollerRef.current
    if (!scroller) return

    const distance = event.clientX - dragStartRef.current.x
    if (Math.abs(distance) > 4) hasDraggedRef.current = true
    scroller.scrollLeft = dragStartRef.current.scrollLeft - distance
  }

  function stopDragging(event: React.PointerEvent<HTMLDivElement>) {
    if (isDraggingRef.current && scrollerHasCapture(event)) {
      servicesScrollerRef.current?.releasePointerCapture(event.pointerId)
    }
    isDraggingRef.current = false
  }

  function onClick(event: React.MouseEvent<HTMLDivElement>) {
    if (!hasDraggedRef.current) return

    event.preventDefault()
    event.stopPropagation()
    hasDraggedRef.current = false
  }

  function scrollerHasCapture(event: React.PointerEvent<HTMLDivElement>) {
    return servicesScrollerRef.current?.hasPointerCapture(event.pointerId) ?? false
  }

  return (
    <section className="border-y border-[#C9A84C]/10 bg-[#0D0D1A] px-4 py-16 text-[#F0E8D5] sm:px-6 md:px-14 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5 md:mb-16">
          <div className="max-w-3xl">
            <div className="text-[10px] font-bold font-mono tracking-[0.35em] text-[#C9A84C] uppercase">
              Our Services
            </div>
            <h2
              className="mt-4 text-3xl leading-tight text-[#F0E8D5] sm:text-4xl md:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Built on precision,
              <br />
              <em className="text-[#C9A84C]">delivered with trust.</em>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigate("services")}
            className="w-full border border-[#C9A84C]/45 px-5 py-3 text-[9px] font-bold font-mono tracking-[0.18em] text-[#C9A84C] uppercase transition-colors hover:bg-[#C9A84C] hover:text-[#0D0D1A] sm:w-auto sm:tracking-[0.2em]"
          >
            View More Services ↗
          </button>
        </div>
        <div
          ref={servicesScrollerRef}
          className="-mx-4 flex cursor-grab snap-x gap-4 overflow-x-auto px-4 pb-3 active:cursor-grabbing md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 lg:items-start lg:gap-6 lg:cursor-default"
          style={{ touchAction: "pan-y" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onClick={onClick}
        >
          {cards.map((card) => (
            <article
              key={card.pill}
              tabIndex={0}
              className={`service-card group relative min-w-[82vw] snap-start aspect-[4/5] ${card.offset} overflow-hidden rounded-[18px] border border-[#C9A84C]/15 bg-[#252525] outline-none transition-transform duration-[350ms] focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0D0D1A] md:min-w-0`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(201,162,39,0.28),transparent_28%),linear-gradient(145deg,#34322b,#141414_70%)] transition-transform duration-[350ms] ease-in-out group-hover:scale-[1.03] group-focus:scale-[1.03]" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-[10px] font-mono tracking-[0.18em] text-[#F0E8D0]/35 uppercase">
                {card.image}
              </div>
              <div className="absolute left-5 top-5 rounded-full border border-[#C9A227]/70 bg-[#111111]/75 px-3 py-1.5 text-[9px] font-bold font-mono tracking-[0.15em] text-white uppercase">
                {card.pill}
              </div>
              <div className="service-panel absolute bottom-4 left-4 right-4 h-[170px] rounded-[14px] border border-[#C9A227]/20 bg-[rgba(240,232,213,0.96)] p-5 text-[#1A1A1A] shadow-[0_10px_25px_rgba(0,0,0,0.22)] transition-[height] duration-[350ms] ease-in-out group-hover:h-[calc(100%-2rem)] group-focus:h-[calc(100%-2rem)]">
                <div className="flex items-center gap-2 text-[9px] font-bold font-mono tracking-[0.12em] text-[#6F5A16] uppercase">
                  <span>{card.meta}</span>
                  <span className="text-[#8C711E]">·</span>
                  <span>{card.qualifier}</span>
                </div>
                <h3
                  className="mt-4 max-w-[17rem] text-2xl leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {card.title}
                </h3>
                <p className="service-description mt-5 max-w-[18rem] translate-y-3 text-[13px] leading-relaxed text-[#514D44] opacity-0 transition-[opacity,transform] delay-100 duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                  {card.description}
                </p>
                <button
                  type="button"
                  onClick={() => navigate("services")}
                  className="service-description mt-6 translate-y-3 text-[10px] font-bold font-mono tracking-[0.16em] text-[#6F5A16] uppercase opacity-0 transition-[opacity,transform] delay-100 duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100"
                >
                  Explore Service ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
