"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-amethyst-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-rose-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-amethyst-300/40 rounded-full blur-lg"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/assets/photos/main.jpg"
                  alt="The Comeback Code - Empowering Professionals"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </motion.div>
          </Reveal>

          {/* Content Side */}
          <div className="text-center lg:text-left">
            <Reveal>
              <motion.h1 
                className="text-5xl md:text-7xl font-playfair font-bold text-slate-800 mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gradient">The Comeback Code</span>
                <br />
                <span className="text-slate-700">Empowering Professionals</span>
              </motion.h1>
            </Reveal>

            <Reveal delay={0.4}>
              <motion.p 
                className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Confidence | Growth | Success
                <br />
                <span className="text-lg text-slate-500 mt-2 block">
                  Rediscover your professional power and excel in your career comeback journey.
                </span>
              </motion.p>
            </Reveal>

            <Reveal delay={0.6}>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/programs">
                  <Button 
                    variant="gradient" 
                    size="xl"
                    className="group"
                  >
                    <span className="mr-2">Start Your Comeback Journey Today</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    variant="glass" 
                    size="xl"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </Reveal>

            {/* Floating Stats */}
            <Reveal delay={1.0}>
              <motion.div 
                className="mt-16 grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-cc-blue-royal mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    500+
                  </motion.div>
                  <div className="text-cc-slate font-medium text-sm">Professionals Helped</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-cc-blue-royal mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    20+
                  </motion.div>
                  <div className="text-cc-slate font-medium text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-cc-blue-royal mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    15+
                  </motion.div>
                  <div className="text-cc-slate font-medium text-sm">Years Training</div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cc-blue-royal rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cc-blue-royal rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
} 