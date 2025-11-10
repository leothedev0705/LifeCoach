import { Metadata } from "next"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ResourcesHero } from "@/components/sections/resources-hero"
import { ResourcesTabs } from "@/components/sections/resources-tabs"
import { ResourcesFeatured } from "@/components/sections/resources-featured"

export const metadata: Metadata = {
  title: "Free Resources | E-books, Podcasts & Success Tools",
  description: "Access our library of free resources including e-books, podcast episodes, workbooks, and guides designed to accelerate your personal growth and success journey.",
  keywords: ["free resources", "personal development ebooks", "success podcast", "transformation tools", "growth guides"],
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-lavender-50">
      <NavBar />
      <ResourcesHero />
      <ResourcesFeatured />
      <ResourcesTabs />
      <Footer />
    </main>
  )
} 