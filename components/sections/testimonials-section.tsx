"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "👩‍💼",
    rating: 5,
    text: "Anita's coaching transformed not just my career, but my entire outlook on life. Her insights helped me land my dream job and build unshakeable confidence.",
    achievement: "Promoted to Director in 6 months"
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    image: "👨‍💼",
    rating: 5,
    text: "Working with Anita was a game-changer. She helped me overcome limiting beliefs and scale my business to 7 figures. Her approach is both practical and transformational.",
    achievement: "Scaled business to $1M+ revenue"
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "👩‍🎨",
    rating: 5,
    text: "I was stuck in a creative rut and feeling unfulfilled. Anita's guidance helped me rediscover my passion and launch my own design studio. I'm finally living my purpose!",
    achievement: "Launched successful design agency"
  },
  {
    name: "David Thompson",
    role: "Executive Coach",
    image: "👨‍🏫",
    rating: 5,
    text: "Even as a coach myself, I needed guidance to reach the next level. Anita's mentorship helped me develop advanced skills and attract high-level clients.",
    achievement: "Increased rates by 300%"
  },
  {
    name: "Lisa Park",
    role: "Wellness Consultant",
    image: "👩‍⚕️",
    rating: 5,
    text: "Anita helped me transition from corporate burnout to building a thriving wellness practice. Her support was invaluable during my career pivot.",
    achievement: "Built 6-figure wellness practice"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real transformations from real people. Here&apos;s what our clients say 
              about their journey to extraordinary success.
            </p>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <GlassCard className="h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-amethyst-400" />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-slate-700 leading-relaxed mb-6 flex-grow italic">
                    &quot;{testimonial.text}&quot;
                  </blockquote>

                  {/* Achievement */}
                  <div className="mb-4 p-3 bg-amethyst-50 rounded-2xl">
                    <div className="text-sm font-semibold text-amethyst-700">
                      🎯 {testimonial.achievement}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amethyst-100 to-rose-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Stats */}
        <Reveal delay={0.6}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-amethyst-600 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                500+
              </motion.div>
              <div className="text-sm text-slate-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-amethyst-600 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                98%
              </motion.div>
              <div className="text-sm text-slate-600">Success Rate</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-amethyst-600 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                4.9/5
              </motion.div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-amethyst-600 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                12+
              </motion.div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 