"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Book, Headphones, FileText, Download, Play } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const resources = [
  {
    type: "ebook",
    title: "The Success Mindset Blueprint",
    description: "A comprehensive guide to developing the mental framework for extraordinary achievement.",
    icon: Book,
    image: "📚",
    color: "amethyst",
    actionIcon: Download
  },
  {
    type: "podcast",
    title: "Transform Your Life Podcast",
    description: "Weekly episodes featuring success stories, expert interviews, and actionable insights.",
    icon: Headphones,
    image: "🎙️",
    color: "rose",
    actionIcon: Play
  },
  {
    type: "guide",
    title: "Goal Achievement Workbook",
    description: "Step-by-step exercises to clarify your vision and create an actionable success plan.",
    icon: FileText,
    image: "📝",
    color: "amethyst",
    actionIcon: Download
  }
]

export function ResourcesPreview() {
  return (
    <section className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Free <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kickstart your transformation journey with these powerful, 
              completely free resources designed to help you succeed.
            </p>
          </div>
        </Reveal>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon
            const ActionIcon = resource.actionIcon
            return (
              <Reveal key={resource.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, rotateY: 5 }}
                  className="h-full perspective-1000"
                >
                  <GlassCard className="h-full flex flex-col group cursor-pointer relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                      resource.color === 'amethyst' 
                        ? 'bg-gradient-to-br from-amethyst-500 to-amethyst-600' 
                        : 'bg-gradient-to-br from-rose-400 to-rose-500'
                    }`} />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-4 ${
                          resource.color === 'amethyst' ? 'bg-amethyst-100' : 'bg-rose-100'
                        }`}>
                          <span className="text-4xl">{resource.image}</span>
                        </div>
                        <h3 className="text-xl font-playfair font-bold text-slate-800 mb-2">
                          {resource.title}
                        </h3>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          resource.color === 'amethyst' 
                            ? 'bg-amethyst-100 text-amethyst-700' 
                            : 'bg-rose-100 text-rose-700'
                        }`}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {resource.type.toUpperCase()}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-6 text-center leading-relaxed flex-grow">
                        {resource.description}
                      </p>

                      {/* Access Indicator */}
                      <div className="text-center">
                        <span className={`inline-flex items-center text-sm font-medium ${
                          resource.color === 'amethyst' ? 'text-amethyst-600' : 'text-rose-600'
                        }`}>
                          <ActionIcon className="w-4 h-4 mr-2" />
                          Free Access →
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* Explore All Resources CTA */}
        <Reveal delay={0.4}>
          <div className="text-center">
            <Link href="/resources">
              <Button variant="gradient" size="xl">
                Explore Freebies
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 