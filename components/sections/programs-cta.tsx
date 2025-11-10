"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, MessageCircle, Phone, Star } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

export function ProgramsCTA() {
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
              Ready to <span className="text-white/90">Transform</span> Your Life?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Take the first step toward your extraordinary future. Let&apos;s find the perfect 
              program to unlock your full potential.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Free Consultation */}
          <Reveal delay={0.2}>
            <motion.div whileHover={{ y: -8 }}>
              <GlassCard className="text-center h-full">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                  Free Discovery Call
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  30-minute consultation to discuss your goals, challenges, and find 
                  the perfect coaching program for your journey.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    No sales pressure, just guidance
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Personalized recommendations
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Clear next steps outlined
                  </div>
                </div>
                <Link href="/contact">
                  <Button variant="gradient" className="w-full">
                    Book Free Call
                  </Button>
                </Link>
              </GlassCard>
            </motion.div>
          </Reveal>

          {/* Quick Questions */}
          <Reveal delay={0.4}>
            <motion.div whileHover={{ y: -8 }}>
              <GlassCard className="text-center h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                  Have Questions?
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Send me a message with your questions about the programs, 
                  pricing, or anything else. I&apos;ll respond within 24 hours.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Quick response guaranteed
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Honest, detailed answers
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    No obligation to enroll
                  </div>
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Ask Questions
                  </Button>
                </Link>
              </GlassCard>
            </motion.div>
          </Reveal>

          {/* Urgent Support */}
          <Reveal delay={0.6}>
            <motion.div whileHover={{ y: -8 }}>
              <GlassCard className="text-center h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                  Ready to Start?
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  If you know which program you want and you&apos;re ready to begin 
                  your transformation journey, let&apos;s get you enrolled today.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Same-day enrollment available
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Flexible payment options
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Start your journey this week
                  </div>
                </div>
                <Link href="/contact">
                  <Button variant="gradient" className="w-full">
                    Enroll Now
                  </Button>
                </Link>
              </GlassCard>
            </motion.div>
          </Reveal>
        </div>

        {/* Bottom Guarantee */}
        <Reveal delay={0.8}>
          <div className="text-center">
            <GlassCard className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-4">
                100% Satisfaction Guarantee
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                I&apos;m so confident in the value of my coaching programs that I offer a 
                30-day money-back guarantee. If you&apos;re not completely satisfied with 
                your experience, I&apos;ll refund your investment in full.
              </p>
              <div className="flex justify-center items-center space-x-2 text-sm text-slate-500">
                <span>🛡️ Risk-free enrollment</span>
                <span>•</span>
                <span>💯 Full satisfaction guarantee</span>
                <span>•</span>
                <span>⭐ 98% client satisfaction rate</span>
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 