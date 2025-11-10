"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, Phone } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export function ContactHero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-lavender-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-slate-800 mb-8 leading-tight">
              Start Your <span className="text-gradient">Comeback</span> Today
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
              Ready to rediscover your professional confidence? Let&apos;s discuss your career goals 
              and find the perfect soft skills training program for your comeback journey.
            </p>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20"
              >
                <div className="w-16 h-16 bg-cc-sky rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-cc-blue-royal" />
                </div>
                <h3 className="text-lg font-semibold text-cc-charcoal mb-2">Send a Message</h3>
                <p className="text-cc-slate text-sm">
                  Share your career goals and I&apos;ll get back to you within 24 hours
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20"
              >
                <div className="w-16 h-16 bg-cc-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-cc-gold-metal" />
                </div>
                <h3 className="text-lg font-semibold text-cc-charcoal mb-2">Book Free Consultation</h3>
                <p className="text-cc-slate text-sm">
                  Schedule a free 30-minute discovery call to explore your options
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20"
              >
                <div className="w-16 h-16 bg-cc-sky rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cc-blue-royal" />
                </div>
                <h3 className="text-lg font-semibold text-cc-charcoal mb-2">Quick Response</h3>
                <p className="text-cc-slate text-sm">
                  Get personalized guidance for your career comeback journey
                </p>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 