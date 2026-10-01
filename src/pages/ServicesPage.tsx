import { assets } from "../assets/assets"

import MarketEntry from "../components/MarketEntry"
import ServiceList from "../components/ServiceList"

import type { Page } from "../data/siteData"
import { PageIntro as Intro } from "../components/Text"

export default function ServicesPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <main className="pt-16">
      <section className="border-b border-[#C9A84C]/10 px-4 py-16 sm:px-6 md:px-14 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
          <div>
            <Intro
              label="Our Expertise"
              title="Enter and grow"
              highlight="in India"
              text="Specialist advisory for shipping, logistics, infrastructure, manufacturing and supply-chain businesses navigating complex commercial decisions, investments and growth opportunities in India."
            />
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={assets.servicesHero}
              alt="iLogBC services"
              className="w-full max-w-[420px] object-contain sm:max-w-[520px]"
            />
          </div>
        </div>
      </section>
      <MarketEntry navigate={navigate} />
      <ServiceList />
    </main>
  )
}
