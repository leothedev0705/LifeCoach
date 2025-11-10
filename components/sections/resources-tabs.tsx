"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Video, Headphones, FileText, Download, Star } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const tabs = [
  { id: "ebooks", label: "E-Books", icon: BookOpen },
  { id: "videos", label: "Video Courses", icon: Video },
  { id: "audio", label: "Audio Programs", icon: Headphones },
  { id: "templates", label: "Templates", icon: FileText }
]

const resources = {
  ebooks: [
    {
      title: "The Mindset Mastery Manual",
      description: "Complete guide to developing a success-oriented mindset",
      rating: 4.8,
      downloads: "8,500+",
      size: "PDF, 2.8 MB"
    },
    {
      title: "Leadership in the Digital Age",
      description: "Modern leadership strategies for remote and hybrid teams",
      rating: 4.7,
      downloads: "6,200+",
      size: "PDF, 3.1 MB"
    }
  ],
  videos: [
    {
      title: "Productivity Masterclass Series",
      description: "6-part video series on optimizing your workflow and time",
      rating: 4.9,
      downloads: "4,300+",
      size: "MP4, 2.5 GB"
    },
    {
      title: "Public Speaking Confidence",
      description: "Transform your fear into confidence with proven techniques",
      rating: 4.6,
      downloads: "3,800+",
      size: "MP4, 1.8 GB"
    }
  ],
  audio: [
    {
      title: "Success Visualization Sessions",
      description: "Guided visualizations for achieving your biggest goals",
      rating: 4.8,
      downloads: "7,100+",
      size: "MP3, 180 MB"
    },
    {
      title: "Confidence Building Affirmations",
      description: "Daily affirmation practice for unshakeable self-belief",
      rating: 4.7,
      downloads: "5,900+",
      size: "MP3, 120 MB"
    }
  ],
  templates: [
    {
      title: "Goal Planning Workbook",
      description: "Step-by-step templates for setting and achieving goals",
      rating: 4.9,
      downloads: "9,200+",
      size: "PDF, 1.5 MB"
    },
    {
      title: "Weekly Review Template",
      description: "Reflect, plan, and optimize your weekly performance",
      rating: 4.8,
      downloads: "7,600+",
      size: "PDF, 800 KB"
    }
  ]
}

export function ResourcesTabs() {
  const [activeTab, setActiveTab] = useState("ebooks")

  return (
    <section className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Resource <span className="text-gradient">Library</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse our comprehensive collection of transformation tools organized 
              by format to find exactly what you need.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-amethyst-500 text-white shadow-lg"
                      : "bg-white/80 text-slate-600 hover:bg-white"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {resources[activeTab as keyof typeof resources]?.map((resource, index) => (
              <Reveal key={resource.title} delay={index * 0.1}>
                <motion.div whileHover={{ y: -4 }}>
                  <GlassCard className="cursor-pointer group">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-playfair font-bold text-slate-800 group-hover:text-amethyst-600 transition-colors">
                        {resource.title}
                      </h3>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {resource.rating}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                      <span>{resource.downloads} downloads</span>
                      <span>{resource.size}</span>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                  </GlassCard>
                </motion.div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 