import { Metadata } from "next"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookHero } from "@/components/sections/book-hero"
import { BookPreview } from "@/components/sections/book-preview"
import { BookTestimonials } from "@/components/sections/book-testimonials"
import { BookCTA } from "@/components/sections/book-cta"

export const metadata: Metadata = {
  title: "Unlock Your Extraordinary | Anita D'Souza's New Book",
  description: "Pre-order Anita D'Souza's transformational new book 'Unlock Your Extraordinary' - a comprehensive guide to creating the life and success you truly desire.",
  keywords: ["anita d'souza book", "unlock your extraordinary", "success book", "personal development book", "transformation guide"],
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-lavender-50">
      <NavBar />
      <BookHero />
      <BookPreview />
      <BookTestimonials />
      <BookCTA />
      <Footer />
    </main>
  )
} 