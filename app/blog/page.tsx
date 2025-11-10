import { Metadata } from "next"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/sections/blog-hero"
import { BlogGrid } from "@/components/sections/blog-grid"
import { BlogFeatured } from "@/components/sections/blog-featured"

export const metadata: Metadata = {
  title: "Success Blog | Personal Development Insights & Strategies",
  description: "Discover practical wisdom, actionable strategies, and inspiring stories to fuel your personal growth journey. Expert insights on mindset, goals, habits, and success.",
  keywords: ["personal development blog", "success strategies", "mindset tips", "goal achievement", "life coaching insights"],
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-lavender-50">
      <NavBar />
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <Footer />
    </main>
  )
} 