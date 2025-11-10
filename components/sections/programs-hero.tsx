"use client"

import { motion } from "framer-motion"
import { Star, Target, Users } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export function ProgramsHero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-lavender-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 bg-amethyst-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-rose-200/30 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-slate-800 mb-8 leading-tight">
              Master the <span className="text-gradient">Soft Skills</span> That Drive Career Success
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
              Rediscover your professional confidence and excel in your career comeback journey 
              with our comprehensive soft skills training programs.
            </p>

            {/* Program Benefits */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cc-sky rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-cc-blue-royal" />
                </div>
                <h3 className="text-lg font-semibold text-cc-charcoal mb-2">Professional Confidence</h3>
                <p className="text-cc-slate text-sm">
                  Build unshakeable self-belief and professional presence
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cc-gold-light rounded-2xl flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-cc-gold-metal" />
                </div>
                <h3 className="text-lg font-semibold text-cc-charcoal mb-2">Communication Excellence</h3>
                <p className="text-cc-slate text-sm">
                  Master speaking, listening, and presentation skills
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cc-sky rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-cc-blue-royal" />
                </div>
                <h3 className="text-lg font-semibold text-cc-charcoal mb-2">Leadership & Teamwork</h3>
                <p className="text-cc-slate text-sm">
                  Develop influence, collaboration, and team management skills
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 