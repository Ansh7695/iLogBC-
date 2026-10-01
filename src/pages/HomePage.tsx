import type { Page } from "../data/siteData"

import About from "../components/About"

import CallToAction from "../components/CallToAction"

import Hero from "../components/Hero"

import OurServices from "../components/OurServices"

import Sectors from "../components/Sectors"

import Stats from "../components/Stats"

import Team from "../components/Team"

export default function HomePage({
  navigate,
}: {
  navigate: (page: Page) => void
}) {
  return (
    <main>
      <Hero navigate={navigate} />
      <Stats />
      <About navigate={navigate} />
      <OurServices navigate={navigate} />
      <Sectors navigate={navigate} />
      <Team />
      <CallToAction />
    </main>
  )
}
