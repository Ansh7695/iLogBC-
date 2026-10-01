import { useRef, useState } from "react"

import { network } from "../data/homeData"

import { assets } from "../assets/assets"

export default function IndustriesPage() {
  const gridRef = useRef<HTMLDivElement>(null)
  const industryScrollerRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 })
  const isDraggingRef = useRef(false)
  const hasDraggedRef = useRef(false)
  const [spot, setSpot] = useState({ x: 0, y: 0, on: false })
  const [active, setActive] = useState<number | null>(null)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, on: true })
  }

  function onLeave() {
    setSpot((s) => ({ ...s, on: false }))
    setActive(null)
  }

  function onIndustryPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return

    const scroller = industryScrollerRef.current
    if (!scroller) return

    dragStartRef.current = { x: event.clientX, scrollLeft: scroller.scrollLeft }
    isDraggingRef.current = true
    hasDraggedRef.current = false
    scroller.setPointerCapture(event.pointerId)
  }

  function onIndustryPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) return

    const scroller = industryScrollerRef.current
    if (!scroller) return

    const distance = event.clientX - dragStartRef.current.x
    if (Math.abs(distance) > 4) hasDraggedRef.current = true
    scroller.scrollLeft = dragStartRef.current.scrollLeft - distance
  }

  function stopIndustryDragging(event: React.PointerEvent<HTMLDivElement>) {
    if (isDraggingRef.current && industryScrollerRef.current?.hasPointerCapture(event.pointerId)) {
      industryScrollerRef.current.releasePointerCapture(event.pointerId)
    }
    isDraggingRef.current = false
  }

  function preventIndustryClick(event: React.MouseEvent<HTMLDivElement>) {
    if (!hasDraggedRef.current) return

    event.preventDefault()
    event.stopPropagation()
    hasDraggedRef.current = false
  }

  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-28 md:min-h-[560px] md:px-14">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={assets.industriesVideo}
          autoPlay muted loop playsInline
          aria-label="Connected industries network"
        />
        <div className="absolute inset-0 bg-[#06060F]/70" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="text-[10px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">
            Connected Industries
          </div>
          <h1
            className="mt-6 text-4xl leading-tight text-[#F0E8D5] sm:text-5xl md:text-[5rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Market We<br />
            <em className="text-[#C9A84C]">Work In</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#D0C7B5]">
            Explore the sectors where iLogBC supports logistics, infrastructure,
            supply-chain transformation, market entry, transactions and investment.
          </p>
        </div>
      </section>

      {/* Live Industry Network — full-width spotlight grid */}
      <section className="bg-[#080810] py-12">

        {/* Section header — centered */}
        <div className="mx-auto mb-10 px-4 text-center sm:px-6 md:px-14">
          <div className="text-[10px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">
            Live Industry Network
          </div>
          <h2
            className="mt-4 text-3xl text-[#F0E8D5] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Industry Network
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#8A8070]">
            The sectors where iLogBC advises, invests and operates.
          </p>
        </div>

        {/* Full-width interactive grid with spotlight */}
        <div
          ref={gridRef}
          className="relative w-full overflow-hidden px-6"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {/* Spotlight overlay */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 10,
              background: spot.on
                ? `radial-gradient(circle 420px at ${spot.x}px ${spot.y}px, rgba(201,168,76,0.13) 0%, rgba(201,168,76,0.04) 45%, transparent 72%)`
                : "transparent",
              transition: spot.on ? "none" : "background 0.55s ease",
            }}
          />

          {/* Rectangle grid — 4 cols, gapped */}
          <div
            ref={industryScrollerRef}
            className="-mx-6 flex cursor-grab snap-x gap-4 overflow-x-auto overflow-y-hidden px-6 pb-3 active:cursor-grabbing md:mx-0 md:grid md:w-full md:grid-cols-4 md:cursor-crosshair md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:gap-5"
            style={{ touchAction: "pan-y" }}
            onPointerDown={onIndustryPointerDown}
            onPointerMove={onIndustryPointerMove}
            onPointerUp={stopIndustryDragging}
            onPointerCancel={stopIndustryDragging}
            onClick={preventIndustryClick}
          >
            {network.map((label, i) => {
              const isActive = active === i
              return (
                <div
                  key={label}
                  className="relative flex min-w-[82vw] snap-start flex-col justify-between p-5 text-left md:min-w-0"
                  style={{
                    aspectRatio: "3 / 2",
                    backgroundImage: `linear-gradient(rgba(9,9,26,${isActive ? "0.35" : "0.62"}), rgba(9,9,26,${isActive ? "0.35" : "0.62"})), url("${assets.connectedIndustries[label]}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    border: isActive ? "1px solid rgba(201,168,76,0.55)" : "1px solid rgba(201,168,76,0.14)",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  {/* Sector number */}
                  <span
                    className="font-mono text-[9px] tracking-[0.28em] uppercase"
                    style={{ color: isActive ? "rgba(201,168,76,0.9)" : "rgba(201,168,76,0.35)", transition: "color 0.2s" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Full industry name */}
                  <span
                    className="text-[12px] font-medium leading-snug sm:text-[14px]"
                    style={{
                      color: isActive ? "#F0E8D5" : "#A8A090",
                      fontFamily: "'Inter', sans-serif",
                      transition: "color 0.2s",
                    }}
                  >
                    {label}
                  </span>

                  {/* Arrow indicator when active */}
                  {isActive && (
                    <span
                      className="absolute bottom-4 right-5 text-[11px]"
                      style={{ color: "rgba(201,168,76,0.8)" }}
                    >
                      →
                    </span>
                  )}

                  {/* Corner ticks */}
                  <span className="absolute top-2 left-2 h-2 w-2 border-t border-l" style={{ borderColor: isActive ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.15)" }} />
                  <span className="absolute top-2 right-2 h-2 w-2 border-t border-r" style={{ borderColor: isActive ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.15)" }} />
                  <span className="absolute bottom-2 left-2 h-2 w-2 border-b border-l" style={{ borderColor: isActive ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.15)" }} />
                  <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r" style={{ borderColor: isActive ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.15)" }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing detail */}
      <section className="border-y border-[#C9A84C]/10 bg-[#0D0D1A] px-4 py-16 sm:px-6 md:px-14 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <div className="text-[10px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">Manufacturing</div>
            <h2
              className="mt-4 text-4xl text-[#F0E8D5]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Manufacturing — Auto, Industrial & FMCG
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#8A8070]">
              Manufacturers managing complex inbound and outbound supply chains across India.
            </p>
          </div>
          <div>
            <div className="mb-5 text-[9px] font-mono tracking-[0.3em] text-[#C9A84C]/60 uppercase">Advisory Area</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Supply Chain Design",
                "Transport & Partner Optimisation",
                "Shipping & Carrier Strategy",
                "Export–Import Logistics",
                "Multimodal Network Design",
                "Rail Logistics & Operations",
                "Transportation Optimisation",
              ].map((item) => (
                <div key={item} className="border-l border-[#C9A84C]/40 pl-4 text-[12px] text-[#8A8070]">
                  {item} →
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
