"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, Award, Users, BookOpen, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const bookStats = [
  { label: "Amazon Rating", value: "4.8/5", icon: Star },
  { label: "Copies Sold", value: "50K+", icon: Users },
  { label: "Award Winner", value: "2023", icon: Award },
  { label: "Pages", value: "280", icon: BookOpen }
]

const chapters = [
  "The Psychology of Transformation",
  "Breaking Through Limiting Beliefs", 
  "The Power of Intentional Living",
  "Building Unshakeable Confidence",
  "Mastering Your Inner Dialogue",
  "Creating Lasting Change",
  "The Success Blueprint",
  "Living Your Extraordinary Life"
]

export function BookPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* Book Cover & Stats */}
          <Reveal>
            <div className="text-center lg:text-left">
              {/* Book Cover */}
              <div className="relative mb-8">
                <motion.div
                  whileHover={{ y: -8, rotateY: 15 }}
                  className="relative mx-auto lg:mx-0 w-80 h-96 bg-gradient-to-br from-amethyst-600 via-amethyst-500 to-rose-400 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
                  style={{ perspective: "1000px" }}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10 text-center p-8">
                    <h3 className="text-3xl font-playfair font-bold text-white mb-4 leading-tight">
                      BREAKTHROUGH<br />TO<br />EXTRAORDINARY
                    </h3>
                    <div className="w-16 h-0.5 bg-white/60 mx-auto mb-4" />
                    <p className="text-white/90 text-lg font-medium">
                      ANITA D'SOUZA
                    </p>
                  </div>
                  
                  {/* Shine effect */}
                  <motion.div
                    animate={{
                      x: [-100, 400],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                  />
                </motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {bookStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <GlassCard className="text-center">
                        <IconComponent className="w-8 h-8 text-amethyst-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-800 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-600">
                          {stat.label}
                        </div>
                      </GlassCard>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* Book Content */}
          <Reveal delay={0.3}>
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-6">
                <span className="text-gradient">Breakthrough</span> to Extraordinary
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A transformational guide that reveals the exact strategies successful people 
                use to overcome obstacles, silence self-doubt, and create the extraordinary 
                life they've always dreamed of.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amethyst-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong>Proven Framework:</strong> The exact 8-step system I've used with 1000+ clients
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amethyst-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong>Real Results:</strong> Case studies from people who transformed their lives
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amethyst-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong>Practical Tools:</strong> Worksheets, exercises, and action plans included
                  </p>
                </div>
              </div>

              {/* Chapter Preview */}
              <div className="mb-8">
                <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                  What You'll Learn
                </h3>
                <div className="grid gap-2">
                  {chapters.slice(0, 4).map((chapter, index) => (
                    <div key={index} className="flex items-center space-x-3 text-slate-600">
                      <span className="text-amethyst-500 font-medium">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <span>{chapter}</span>
                    </div>
                  ))}
                  <div className="text-slate-500 text-sm mt-2">
                    + 4 more transformational chapters
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gradient" size="lg" className="flex-1">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Get on Amazon
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Read Free Chapter
                </Button>
              </div>

              {/* Bonus */}
              <div className="mt-6 p-4 bg-amethyst-50 rounded-2xl border border-amethyst-100">
                <p className="text-sm text-slate-600">
                  <strong className="text-amethyst-700">Bonus:</strong> Readers get exclusive access to 
                  companion workbook and private community (worth $197)
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
} 