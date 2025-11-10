"use client"

import { motion } from "framer-motion"
import { Download, Star, Users, Gift } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const stats = [
  { label: "Free Resources", value: "50+", icon: Gift },
  { label: "Total Downloads", value: "25K+", icon: Download },
  { label: "Happy Users", value: "12K+", icon: Users },
  { label: "Average Rating", value: "4.9", icon: Star }
]

export function ResourcesHero() {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-lavender-50 via-white to-amethyst-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-amethyst-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-rose-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-amethyst-200/30 mb-6">
                <Gift className="w-4 h-4 text-amethyst-600" />
                <span className="text-sm font-medium text-amethyst-700">Free Transformation Tools</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-slate-800 mb-6 leading-tight">
                Accelerate Your <span className="text-gradient">Growth</span><br />
                with Expert Resources
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Access a comprehensive library of proven tools, templates, and training materials 
                designed to fast-track your personal and professional transformation.
              </p>
            </div>
          </Reveal>

          {/* Stats Grid */}
          <Reveal delay={0.4}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/60 backdrop-blur-sm border border-amethyst-200/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-amethyst-600" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
} 