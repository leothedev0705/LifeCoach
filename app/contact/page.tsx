import { Metadata } from "next"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"

export const metadata: Metadata = {
  title: "Contact The Comeback Code | Start Your Career Comeback Today",
  description: "Ready to rediscover your professional confidence? Contact Anita J. D'Souza for personalized soft skills training and career comeback guidance.",
  keywords: ["contact career coach", "career comeback consultation", "professional coaching contact", "soft skills training inquiry"],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-lavender-50">
      <NavBar />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-16 container mx-auto px-4 lg:px-8 py-16">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </main>
  )
} 