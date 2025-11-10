import Link from "next/link"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutPreview } from "@/components/sections/about-preview"
import { ProgramsPreview } from "@/components/sections/programs-preview"
import { TestimonialsPreview } from "@/components/sections/testimonials-preview"
import { ResourcesPreview } from "@/components/sections/resources-preview"
import { BlogPreview } from "@/components/sections/blog-preview"
import { NewsletterBanner } from "@/components/sections/newsletter-banner"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Comeback Code | Empowering Professionals to Shine Again",
  description: "Rediscover your professional confidence with The Comeback Code. Expert soft skills training for career comebacks. Confidence, Growth, Success.",
  keywords: ["career comeback", "soft skills training", "professional confidence", "career coaching", "professional development"],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-lavender-50">
      <NavBar />
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <TestimonialsPreview />
      <ResourcesPreview />
      <BlogPreview />
      <NewsletterBanner />
      <Footer />
    </main>
  )
} 