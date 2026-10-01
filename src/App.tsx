import { useEffect, useState } from "react"

import Footer from "./components/Footer"

import Navbar from "./components/Navbar"

import type { Page } from "./data/siteData"

import HomePage from "./pages/HomePage"

import IndustriesPage from "./pages/IndustriesPage"

import ServicesPage from "./pages/ServicesPage"

function pageFromPath(pathname: string): Page {
  if (pathname === "/industries") return "industries"

  if (pathname === "/services") return "services"

  return "home"
}

function pathForPage(page: Page) {
  return page === "home" ? "/" : `/${page}`
}

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    pageFromPath(window.location.pathname),
  )

  useEffect(() => {
    const handleBackForward = () =>
      setPage(pageFromPath(window.location.pathname))

    window.addEventListener("popstate", handleBackForward)

    return () => window.removeEventListener("popstate", handleBackForward)
  }, [])

  const navigate = (nextPage: Page) => {
    const nextPath = pathForPage(nextPage)

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath)
    }

    setPage(nextPage)

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#0B0B14] text-[#F0E8D5]">
      <Navbar page={page} navigate={navigate} />
      {page === "home" && <HomePage navigate={navigate} />}
      {page === "industries" && <IndustriesPage />}
      {page === "services" && <ServicesPage navigate={navigate} />}
      <Footer navigate={navigate} />
    </div>
  )
}
