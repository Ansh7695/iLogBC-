import type { Page } from "../data/siteData"

export default function Footer({
  navigate,
}: {
  navigate: (page: Page) => void
}) {
  const links: { page: Page; name: string }[] = [
    { page: "home", name: "Home" },
    { page: "industries", name: "Industries Connected" },
    { page: "services", name: "Services" },
  ]

  return (
    <footer className="border-t border-[#C9A84C]/10 bg-[#080810] px-4 py-12 sm:px-8 sm:py-16 md:px-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
        <div className="sm:col-span-2 md:col-span-1">
          <div
            className="mb-4 text-2xl tracking-[0.22em] text-[#C9A84C]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            iLogBC
          </div>
          <p className="max-w-[190px] text-[11px] leading-relaxed text-[#8A8070]">
            iLogBC advises shipping, logistics, supply chain, infrastructure,
            manufacturing and investment businesses across India and
            international markets.
          </p>
        </div>
        <div>
          <div className="mb-5 text-[9px] font-mono tracking-[0.3em] text-[#C9A84C]/50 uppercase">
            Company
          </div>
          {links.map((link) => (
            <button
              type="button"
              key={link.page}
              onClick={() => navigate(link.page)}
              className="block py-1.5 text-[11px] font-mono text-[#8A8070] hover:text-[#C9A84C]"
            >
              {link.name}
            </button>
          ))}
          <div className="mt-4 text-[9px] font-mono text-[#8A8070]">
            About iLogBC · Contact Us
          </div>
        </div>
        <div>
          <div className="mb-5 text-[9px] font-mono tracking-[0.3em] text-[#C9A84C]/50 uppercase">
            Contact
          </div>
          <div className="space-y-1.5 text-[11px] font-mono text-[#8A8070]">
            <div>Email</div>
            <div>contact@ilogbc.com</div>
            <div className="pt-2">Phone</div>
            <div>+91 9871040256</div>
          </div>
        </div>
        <div>
          <div className="mb-5 text-[9px] font-mono tracking-[0.3em] text-[#C9A84C]/50 uppercase">
            Coverage
          </div>
          <div className="space-y-1.5 text-[11px] font-mono text-[#8A8070]">
            <div>Monday–Friday</div>
            <div>09:00 AM–06:00 PM</div>
            <div className="pt-2">India & International Markets</div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-[#C9A84C]/10 pt-8 text-[9px] font-mono text-[#8A8070]/35 sm:mt-16">
        © 2024 iLogBC. All rights reserved.
      </div>
    </footer>
  )
}
