import type { ReactNode } from 'react'

export function Label({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase"><span className="w-8 h-px bg-[#C9A84C]" />{children}</div>
}

export function GoldDivider() {
  return <div className="flex items-center gap-3 my-2"><div className="h-px flex-1 bg-[#C9A84C]/20" /><div className="w-1 h-1 rotate-45 bg-[#C9A84C]/50" /><div className="h-px w-10 bg-[#C9A84C]/50" /></div>
}

export function ExperienceMarquee() {
  const clients = ['Kuehne + Nagel', 'HPH Trust', 'MOL', 'ZIM', 'Maersk Line', 'ABP', 'Adani', 'DP World', 'NYK Group', 'AET', 'Stolt-Nielsen', 'Matson', 'P&O Nedlloyd']
  const list = [...clients, ...clients]
  return <section className="overflow-hidden border-y border-[#C9A84C]/10 bg-[#0B0B14] py-20"><div className="mb-12 px-8 text-center"><div className="mb-3 text-[9px] font-mono tracking-[0.4em] text-[#C9A84C] uppercase">Track Record</div><h2 className="text-3xl text-[#F0E8D5] md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>Our Team's Experience Includes</h2><GoldDivider /></div><div className="flex w-max animate-marquee">{list.map((client, index) => <div key={`${client}-${index}`} className="flex shrink-0 items-center"><span className="px-10 text-xl text-[#F0E8D5]/45 transition-colors hover:text-[#C9A84C] md:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>{client}</span><span className="text-sm text-[#C9A84C]/25">◆</span></div>)}</div><p className="mt-10 px-8 text-center text-[10px] font-mono tracking-[0.2em] text-[#8A8070]/50 uppercase">Representing the collective career experience of the iLogBC leadership team</p></section>
}
