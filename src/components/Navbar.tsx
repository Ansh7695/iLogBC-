import { useState } from "react"

import type { Page } from "../data/siteData"

const links: { page: Page; name: string; note: string }[] = [
  {
    page: "home",
    name: "Home",
    note: "Corporate overview and global presence",
  },

  {
    page: "industries",
    name: "Industries Connected",
    note: "Critical sectors worldwide",
  },

  {
    page: "services",
    name: "Services",
    note: "Strategic and operational solutions",
  },
]

export default function Navbar({
  page,
  navigate,
}: {
  page: Page
  navigate: (page: Page) => void
}) {
  const [open, setOpen] = useState(false)

  const go = (nextPage: Page) => {
    setOpen(false)
    navigate(nextPage)
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-[#C9A84C]/10 bg-[#0B0B14]/95 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 sm:px-7">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 text-[#C9A84C]"
            aria-label="Open navigation menu"
          >
            <span className="flex w-6 flex-col gap-1">
              <i className="h-px bg-current" />
              <i className="h-px bg-current" />
              <i className="h-px bg-current" />
            </span>
            <span className="hidden text-[9px] font-mono tracking-[0.28em] uppercase sm:block">
              Menu
            </span>
          </button>
          <button
            type="button"
            onClick={() => go("home")}
            className="absolute left-1/2 -translate-x-1/2 text-lg tracking-[0.3em] text-[#C9A84C]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            iLogBC
          </button>
          <span className="hidden text-[9px] font-mono tracking-[0.2em] text-[#8A8070] uppercase lg:block">
            Global Logistics & Consulting
          </span>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70"
          onClick={() => setOpen(false)}
        >
          <aside
            className="h-full w-full max-w-[460px] border-r border-[#C9A84C]/10 bg-[#0C0C1B] px-5 py-6 sm:px-8 sm:py-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#C9A84C]/10 pb-6">
              <span className="text-[9px] font-mono tracking-[0.32em] text-[#C9A84C]/60 uppercase">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xl text-[#8A8070] hover:text-[#C9A84C]"
                aria-label="Close navigation menu"
              >
                x
              </button>
            </div>
            <nav className="py-8" aria-label="Main navigation">
              {links.map((link, index) => (
                <button
                  type="button"
                  key={link.page}
                  onClick={() => go(link.page)}
                  className={`block w-full border-b border-[#C9A84C]/10 py-7 text-left ${
                    page === link.page
                      ? "text-[#F0E8D5]"
                      : "text-[#8A8070] hover:text-[#C9A84C]"
                  }`}
                >
                  <span className="mr-6 text-[10px] font-mono text-[#C9A84C]">
                    0{index + 1}
                  </span>
                  <span
                    className="text-xl sm:text-2xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.name}
                  </span>
                  <span className="mt-2 block pl-10 text-[10px] font-mono text-[#8A8070]">
                    {link.note}
                  </span>
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
