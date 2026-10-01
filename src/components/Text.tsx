import type { ReactNode } from "react"

export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">
      <span className="h-px w-8 bg-[#C9A84C]" />
      {children}
    </div>
  )
}

export function Line() {
  return (
    <div className="my-2 flex items-center gap-3">
      <div className="h-px flex-1 bg-[#C9A84C]/20" />
      <div className="h-1 w-1 rotate-45 bg-[#C9A84C]/50" />
      <div className="h-px w-10 bg-[#C9A84C]/50" />
    </div>
  )
}

export function PageIntro({
  label,
  title,
  highlight,
  text,
}: {
  label: string
  title: string
  highlight: string
  text: string
}) {
  return (
    <section className="border-b border-[#C9A84C]/10 px-4 py-20 sm:px-6 sm:py-24 md:px-14 md:py-28">
      <div className="max-w-4xl">
        <Label>{label}</Label>
        <h1
          className="mt-6 mb-5 text-4xl leading-tight text-[#F0E8D5] sm:text-5xl md:text-[5rem]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
          <br />
          <em className="text-[#C9A84C]">{highlight}</em>
        </h1>
        <Line />
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#8A8070]">
          {text}
        </p>
      </div>
    </section>
  )
}
