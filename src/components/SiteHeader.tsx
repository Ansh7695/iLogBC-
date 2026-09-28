import { useState } from 'react'
import type { Page } from '../data/siteData'

const menuItems: { page: Page; label: string; description: string }[] = [
  { page: 'home', label: 'Home', description: 'Corporate overview and global presence' },
  { page: 'industries', label: 'Industries Connected', description: 'Serving critical sectors worldwide' },
  { page: 'services', label: 'Services', description: 'Strategic and operational solutions' },
]

export function SiteHeader({ page, navigate }: { page: Page; navigate: (page: Page) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const goToPage = (nextPage: Page) => {
    setMenuOpen(false)
    navigate(nextPage)
  }

  return <>
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-[#C9A84C]/10 bg-[#0B0B14]/96 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-7">
        <button type="button" onClick={() => setMenuOpen(true)} className="flex items-center gap-3 text-[#C9A84C]" aria-label="Open navigation menu">
          <span className="flex w-6 flex-col gap-1"><i className="h-px bg-current" /><i className="h-px bg-current" /><i className="h-px bg-current" /></span>
          <span className="hidden text-[9px] font-mono tracking-[0.28em] uppercase sm:block">Menu</span>
        </button>
        <button type="button" onClick={() => goToPage('home')} className="absolute left-1/2 -translate-x-1/2 text-lg tracking-[0.3em] text-[#C9A84C]" style={{ fontFamily: "'Playfair Display', serif" }}>iLogBC</button>
        <div className="flex items-center gap-5"><span className="hidden text-[9px] font-mono tracking-[0.2em] text-[#8A8070] uppercase lg:block">Global Logistics & Consulting</span><button type="button" onClick={() => goToPage('home')} className="hidden border border-[#C9A84C]/35 px-4 py-2 text-[9px] font-mono tracking-[0.22em] text-[#C9A84C] uppercase sm:block">Contact</button></div>
      </div>
    </header>

    {menuOpen && <div className="fixed inset-0 z-40 bg-black/65" onClick={() => setMenuOpen(false)}>
      <aside className="h-full w-full max-w-[460px] border-r border-[#C9A84C]/10 bg-[#0C0C1B] px-8 py-8" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-[#C9A84C]/10 pb-6"><span className="text-[9px] font-mono tracking-[0.32em] text-[#C9A84C]/60 uppercase">Navigation</span><button type="button" onClick={() => setMenuOpen(false)} className="text-xl text-[#8A8070] hover:text-[#C9A84C]" aria-label="Close navigation menu">×</button></div>
        <nav className="py-8" aria-label="Main navigation">{menuItems.map((item, index) => <button type="button" key={item.page} onClick={() => goToPage(item.page)} className={`block w-full border-b border-[#C9A84C]/10 py-7 text-left ${page === item.page ? 'text-[#F0E8D5]' : 'text-[#8A8070] hover:text-[#C9A84C]'}`}><span className="mr-6 text-[10px] font-mono text-[#C9A84C]">0{index + 1}</span><span className="text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>{item.label}</span><span className="mt-2 block pl-10 text-[10px] font-mono text-[#8A8070]">{item.description}</span></button>)}</nav>
      </aside>
    </div>}
  </>
}
