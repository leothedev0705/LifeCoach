import { Metadata } from "next"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProgramsHero } from "@/components/sections/programs-hero"
import { ProgramsGrid } from "@/components/sections/programs-grid"
import { ProgramsComparison } from "@/components/sections/programs-comparison"
import { ProgramsCTA } from "@/components/sections/programs-cta"

export const metadata: Metadata = {
  title: "Soft Skills Training Programs | The Comeback Code",
  description: "Master essential soft skills with The Comeback Code's comprehensive training programs. Communication, leadership, confidence building, and career advancement.",
  keywords: ["soft skills training", "professional development", "career coaching", "communication skills", "leadership development"],
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-lavender-50">
      <NavBar />
      <ProgramsHero />
      <ProgramsGrid />
      <ProgramsComparison />
      <ProgramsCTA />
      <Footer />
    </main>
  )
} 