"use client"

import { motion } from "framer-motion"
import { Tv, Newspaper, Radio, BookOpen } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

const mediaFeatures = [
  {
    outlet: "Corporate Training Today",
    title: "The Art of Professional Comebacks",
    type: "Feature Article",
    icon: Newspaper
  },
  {
    outlet: "Professional Development Summit", 
    title: "Soft Skills for Career Success",
    type: "Keynote Speaker",
    icon: Tv
  },
  {
    outlet: "Career Comeback Podcast",
    title: "Rediscovering Professional Confidence",
    type: "Guest Expert",
    icon: Radio
  },
  {
    outlet: "HR Today Magazine",
    title: "Supporting Professionals Through Career Transitions",
    type: "Expert Column",
    icon: BookOpen
  },
  {
    outlet: "Women in Business",
    title: "From Sabbatical to Success",
    type: "Cover Story",
    icon: Newspaper
  },
  {
    outlet: "Leadership Excellence",
    title: "Building Confidence in Professional Settings",
    type: "Training Guide",
    icon: BookOpen
  }
]

export function AboutMedia() {
  return (
    <section className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Professional <span className="text-gradient">Recognition</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sharing expertise in professional development and career comeback strategies 
              through industry publications and professional development platforms.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {mediaFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Reveal key={`${feature.outlet}-${index}`} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="h-full"
                >
                  <GlassCard className="h-full flex flex-col text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amethyst-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-amethyst-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-playfair font-bold text-slate-800 mb-2">
                        {feature.outlet}
                      </h3>
                      <p className="text-slate-600 mb-3 leading-relaxed">
                        {feature.title}
                      </p>
                      <span className="inline-block px-3 py-1 bg-amethyst-50 text-amethyst-700 text-xs font-medium rounded-full">
                        {feature.type}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* Recognition Summary */}
        <Reveal delay={0.8}>
          <div className="text-center">
            <GlassCard className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-6">
                Industry Impact
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-amethyst-600 mb-2">500+</div>
                  <div className="text-slate-600 font-medium">Professionals Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amethyst-600 mb-2">20+</div>
                  <div className="text-slate-600 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amethyst-600 mb-2">15+</div>
                  <div className="text-slate-600 font-medium">Years Soft Skills Training</div>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                Anita's expertise in professional development and career comeback strategies 
                has been recognized across industry publications, helping professionals worldwide 
                rediscover their confidence and excel in their careers.
              </p>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 