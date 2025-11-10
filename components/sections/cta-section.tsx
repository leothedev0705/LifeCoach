"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amethyst-600 via-amethyst-500 to-rose-400">
        {/* Animated Background Elements */}
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
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Ready to <span className="text-white/90">Transform</span> Your Life?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards your extraordinary future. 
              Get exclusive insights and a free consultation call.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-slate-800 mb-6">
                Start Your Journey Today
              </h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-amethyst-500 focus:border-transparent outline-none text-lg bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="gradient"
                    size="xl"
                    className="w-full group"
                  >
                    <span className="mr-2">Get Your Free Consultation</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-slate-600">
                    I'll be in touch within 24 hours to schedule your free consultation.
                  </p>
                </motion.div>
              )}
              
              <div className="mt-6 text-sm text-slate-500 text-center">
                <p>🔒 Your information is secure and will never be shared.</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Trust Indicators */}
        <Reveal delay={0.6}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center text-white">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">500+</div>
              <div className="text-sm text-white/80">Success Stories</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">98%</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">12+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">24hr</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 