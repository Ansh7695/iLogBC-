import { useState } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import type { Page } from './data/siteData'
import HomePage from './pages/HomePage'
import IndustriesPage from './pages/IndustriesPage'
import ServicesPage from './pages/ServicesPage'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const navigate = (nextPage: Page) => {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0B0B14] text-[#F0E8D5]">
      <SiteHeader page={page} navigate={navigate} />
      {page === 'home' && <HomePage navigate={navigate} />}
      {page === 'industries' && <IndustriesPage />}
      {page === 'services' && <ServicesPage />}
      <SiteFooter navigate={navigate} />
    </div>
  )
}
