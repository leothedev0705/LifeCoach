import { Metadata } from "next"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/sections/about-hero"
import { AboutTimeline } from "@/components/sections/about-timeline"
import { AboutCertifications } from "@/components/sections/about-certifications"
import { AboutMedia } from "@/components/sections/about-media"
import { AboutCTA } from "@/components/sections/about-cta"

export const metadata: Metadata = {
  title: "About Anita J. D'Souza | The Comeback Code",
  description: "Meet Anita J. D'Souza, founder of The Comeback Code. With 20+ years of corporate experience and 15 years as a soft skills trainer, she helps professionals rediscover their confidence and excel in their careers.",
  keywords: ["about anita d'souza", "the comeback code", "soft skills trainer", "professional coaching", "career comeback"],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-lavender-50">
      <NavBar />
      <AboutHero />
      <AboutTimeline />
      <AboutCertifications />
      <AboutMedia />
      <AboutCTA />
      <Footer />
    </main>
  )
} 