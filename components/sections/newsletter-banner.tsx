"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Send, CheckCircle } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

export function NewsletterBanner() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Join the <span className="text-white/90">Journey</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get weekly inspiration, success strategies, and exclusive content 
              delivered straight to your inbox.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-slate-800 mb-6">
                Weekly Success Newsletter
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
                    <span className="mr-2">Join Now</span>
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
                    Welcome to the Community!
                  </h4>
                  <p className="text-slate-600">
                    Check your inbox for a special welcome gift.
                  </p>
                </motion.div>
              )}
              
              <div className="mt-6 text-sm text-slate-500 text-center">
                <p>🔒 No spam, unsubscribe anytime. Join 10,000+ growth-minded individuals.</p>
              </div>

              {/* Or Contact Directly */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-slate-600 mb-4">
                  Ready to start your transformation journey today?
                </p>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get Your Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 