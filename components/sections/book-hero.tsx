"use client"

import { motion } from "framer-motion"
import { BookOpen, Award, Star, Users } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const accolades = [
  { label: "Amazon Bestseller", icon: Award },
  { label: "4.8/5 Rating", icon: Star },
  { label: "50K+ Copies Sold", icon: Users },
  { label: "280 Pages", icon: BookOpen }
]

export function BookHero() {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-amethyst-50 via-white to-rose-50 relative overflow-hidden">
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
                <Award className="w-4 h-4 text-amethyst-600" />
                <span className="text-sm font-medium text-amethyst-700">Amazon Bestseller</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-slate-800 mb-6 leading-tight">
                <span className="text-gradient">Breakthrough</span> to<br />
                Extraordinary
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                The transformational guide that reveals the exact strategies successful people 
                use to overcome obstacles, silence self-doubt, and create the extraordinary life 
                they&apos;ve always dreamed of.
              </p>
            </div>
          </Reveal>

          {/* Author Credit */}
          <Reveal delay={0.2}>
            <div className="mb-12">
              <p className="text-lg text-slate-600 mb-2">by</p>
              <h2 className="text-3xl font-playfair font-bold text-slate-800">
                Anita D&apos;Souza
              </h2>
              <p className="text-slate-600">Life & Success Coach, Transformation Expert</p>
            </div>
          </Reveal>

          {/* Book Accolades */}
          <Reveal delay={0.4}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {accolades.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/60 backdrop-blur-sm border border-amethyst-200/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-amethyst-600" />
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                      {item.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </Reveal>

          {/* Testimonial Quote */}
          <Reveal delay={0.6}>
            <div className="mt-16 max-w-2xl mx-auto">
              <blockquote className="text-lg italic text-slate-600 mb-4">
                &quot;This book completely transformed my perspective on what&apos;s possible. 
                Within 6 months, I doubled my income and found the confidence to start my dream business.&quot;
              </blockquote>
              <cite className="text-sm font-medium text-slate-700">
                - Sarah Chen, Entrepreneur
              </cite>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
} 