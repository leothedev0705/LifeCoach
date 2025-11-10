"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Download, Star, Users, BookOpen, Headphones, Video } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const featuredResources = [
  {
    title: "The Transformation Blueprint",
    type: "ebook",
    description: "A comprehensive 50-page guide that walks you through the exact framework I use with my high-achieving clients to create lasting change.",
    downloadCount: "12,500+",
    rating: 4.9,
    size: "PDF, 3.2 MB",
    icon: BookOpen,
    featured: true,
    color: "from-amethyst-500 to-purple-600"
  },
  {
    title: "Daily Success Meditation Series",
    type: "audio",
    description: "10 guided meditations designed to prime your mindset for success, clarity, and peak performance each morning.",
    downloadCount: "8,200+",
    rating: 4.8,
    size: "MP3, 45 min total",
    icon: Headphones,
    featured: true,
    color: "from-rose-400 to-pink-500"
  },
  {
    title: "Goal Breakthrough Workshop",
    type: "video",
    description: "A 90-minute masterclass revealing the psychology behind why most goals fail and the system that guarantees success.",
    downloadCount: "5,900+",
    rating: 4.9,
    size: "MP4, 1.2 GB",
    icon: Video,
    featured: true,
    color: "from-blue-500 to-cyan-500"
  }
]

const quickWins = [
  {
    title: "The 5-Minute Energy Reset",
    description: "Quick technique to instantly boost your energy and focus",
    downloads: "3,400+"
  },
  {
    title: "Confidence Affirmations Pack",
    description: "25 powerful affirmations to build unshakeable self-belief",
    downloads: "2,800+"
  },
  {
    title: "Weekly Planning Template",
    description: "The exact template I use to plan productive, balanced weeks",
    downloads: "4,100+"
  },
  {
    title: "Stress Release Breathwork",
    description: "3 breathing techniques to release tension and anxiety",
    downloads: "3,600+"
  }
]

export function ResourcesFeatured() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Featured <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              High-impact tools, guides, and training materials to accelerate your 
              personal and professional transformation journey.
            </p>
          </div>
        </Reveal>

        {/* Featured Resources Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {featuredResources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <Reveal key={resource.title} delay={index * 0.2}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <GlassCard className="h-full flex flex-col relative overflow-hidden group cursor-pointer">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-amethyst-500 to-rose-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {resource.rating}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {resource.downloadCount} downloads
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col relative">
                      <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-3 group-hover:text-amethyst-600 transition-colors">
                        {resource.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                        {resource.description}
                      </p>

                      {/* Meta Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500">Type:</span>
                          <span className="font-medium text-slate-700 capitalize">{resource.type}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500">Size:</span>
                          <span className="font-medium text-slate-700">{resource.size}</span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <Button variant="gradient" className="w-full group-hover:shadow-lg transition-shadow">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* Quick Wins Section */}
        <Reveal delay={0.6}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-playfair font-bold text-slate-800 mb-4">
                Quick Wins Collection
              </h3>
              <p className="text-lg text-slate-600">
                Bite-sized resources you can implement immediately for instant results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {quickWins.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <GlassCard className="cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amethyst-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Download className="w-6 h-6 text-amethyst-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-playfair font-bold text-slate-800 mb-1 group-hover:text-amethyst-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">
                            {item.downloads} downloads
                          </span>
                          <span className="text-xs font-medium text-amethyst-600">
                            Free →
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal delay={0.8}>
          <div className="text-center mt-16">
            <GlassCard className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                Want More Exclusive Resources?
              </h3>
              <p className="text-slate-600 mb-6">
                Join my newsletter to get access to premium guides, early releases, 
                and transformation strategies delivered weekly.
              </p>
              <Link href="/contact">
                <Button variant="gradient" size="lg">
                  Join the Newsletter
                </Button>
              </Link>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 