"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, Star } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

const certifications = [
  {
    name: "Soft Skills Training Institute",
    credential: "Certified Soft Skills Trainer",
    description: "Specialized certification in communication, emotional intelligence, and leadership development",
    icon: Award
  },
  {
    name: "Corporate Training Academy",
    credential: "Professional Development Specialist",
    description: "Advanced training in workplace skills, team building, and professional growth strategies",
    icon: GraduationCap
  },
  {
    name: "Leadership Development Institute",
    credential: "Executive Leadership Coach",
    description: "Specialized training for coaching high-level professionals and career advancement",
    icon: Star
  },
  {
    name: "Professional Communication Institute",
    credential: "Communication Excellence Certification",
    description: "Expert-level training in presentation skills, negotiation, and professional communication",
    icon: Award
  }
]

export function AboutCertifications() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Professional <span className="text-gradient">Credentials</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With over 20 years of corporate experience and 15 years as a soft skills trainer, 
              Anita brings deep expertise in helping professionals excel in their careers.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <Reveal key={cert.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <GlassCard className="h-full flex flex-col">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-amethyst-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-amethyst-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-playfair font-bold text-slate-800 mb-2">
                          {cert.credential}
                        </h3>
                        <p className="text-amethyst-600 font-medium mb-3">
                          {cert.name}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* Additional Info */}
        <Reveal delay={0.6}>
          <div className="text-center mt-16">
            <GlassCard className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                Soft Skills Expertise
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Anita specializes in the most in-demand soft skills that drive career success: 
                communication, emotional intelligence, adaptability, leadership, teamwork, 
                and professional confidence building.
              </p>
              <div className="flex justify-center space-x-8 text-sm text-slate-500">
                <span>💬 Communication Skills</span>
                <span>🧠 Emotional Intelligence</span>
                <span>🎯 Leadership Development</span>
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 