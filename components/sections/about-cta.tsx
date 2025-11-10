"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

export function AboutCTA() {
  return (
    <section className="py-16 md:py-24 luxury-glow">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Ready to <span className="text-gradient">Start Your Comeback?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don&apos;t let career breaks or challenges hold you back. Join hundreds of professionals 
              who have rediscovered their confidence and achieved career success with The Comeback Code.
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <Reveal delay={0.2}>
            <GlassCard className="text-center p-8 md:p-12">
              <div className="space-y-8">
                {/* Personal Introduction */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-slate-800">
                    Hi, I&apos;m Anita J. D&apos;Souza
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    I come from a long line of high-achieving professionals, but after choosing to focus 
                    on family for over a decade, I faced the challenge of returning to a professional 
                    life with confidence and clarity.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    With over 20 years of corporate experience, including 15 years as a soft skills 
                    trainer and leadership mentor, I&apos;ve guided hundreds of professionals to rediscover 
                    their confidence, enhance their communication, and excel in their careers.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    I created The Comeback Code because I believe no career journey is over—and every 
                    professional deserves a second chance to shine. My mission is to help you embrace 
                    your potential, master the soft skills that matter, and step into your best professional self.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="gold-shine text-cc-blue-royal px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Your Comeback Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-cc-blue-royal text-cc-blue-royal hover:bg-cc-sky px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    Book Free Consultation
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-slate-600 font-medium ml-2">500+ Success Stories</span>
                  </div>
                  <div className="text-slate-500 text-sm">
                    ✓ 20+ Years Experience ✓ 15+ Years Training ✓ Proven Results
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
