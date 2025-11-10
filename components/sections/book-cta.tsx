"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Gift, Clock, Users, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const bonuses = [
  {
    title: "Breakthrough Workbook",
    value: "$47",
    description: "Interactive exercises and reflection prompts",
    icon: Gift
  },
  {
    title: "Private Reader Community",
    value: "$97", 
    description: "Exclusive access to like-minded transformation seekers",
    icon: Users
  },
  {
    title: "Monthly Live Q&A",
    value: "$97",
    description: "Direct access to ask questions and get guidance",
    icon: Clock
  }
]

export function BookCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amethyst-600 via-amethyst-500 to-rose-400 relative overflow-hidden">
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
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
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
          className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Your <span className="text-white/90">Transformation</span> Starts Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Don't wait another day to start living the extraordinary life you deserve. 
              Get your copy now and begin your breakthrough journey.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <Reveal delay={0.2}>
            <GlassCard className="text-center mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left: Book & Pricing */}
                <div>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-slate-800 mb-2">
                      Get Your Copy Today
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <span className="text-2xl text-slate-500 line-through">$29.99</span>
                      <span className="text-4xl font-bold text-amethyst-600">$19.99</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">
                      Limited time launch price • Save $10
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button variant="gradient" size="lg" className="w-full">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Buy on Amazon
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Read Free Sample
                    </Button>
                  </div>

                  <p className="text-xs text-slate-500 mt-4">
                    Also available on Kindle, Audible, and major bookstores
                  </p>
                </div>

                {/* Right: Bonuses */}
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-6">
                    Exclusive Bonuses Worth $241
                  </h3>
                  <div className="space-y-4">
                    {bonuses.map((bonus, index) => {
                      const IconComponent = bonus.icon
                      return (
                        <motion.div
                          key={bonus.title}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl"
                        >
                          <div className="w-12 h-12 bg-amethyst-100 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-amethyst-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-800">
                              {bonus.title}
                            </div>
                            <div className="text-sm text-slate-600">
                              {bonus.description}
                            </div>
                          </div>
                          <div className="text-lg font-bold text-amethyst-600">
                            {bonus.value}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* Urgency & Guarantee */}
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.4}>
              <GlassCard className="text-center">
                <Clock className="w-16 h-16 text-amethyst-600 mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                  Launch Week Special
                </h3>
                <p className="text-slate-600 mb-6">
                  Save $10 and get exclusive bonuses. This offer ends when 
                  the first 1,000 copies are sold.
                </p>
                <div className="text-sm text-slate-500">
                  <strong>743 copies remaining</strong>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.6}>
              <GlassCard className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                  100% Satisfaction Guarantee
                </h3>
                <p className="text-slate-600 mb-6">
                  If you don't love the book and see real results within 30 days, 
                  get your money back—no questions asked.
                </p>
                <div className="text-sm text-slate-500">
                  <strong>99.2% satisfaction rate</strong>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Final CTA */}
          <Reveal delay={0.8}>
            <div className="text-center mt-12">
              <p className="text-white/90 text-lg mb-6">
                Join thousands of readers who are already transforming their lives
              </p>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  Have Questions? Contact Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
} 