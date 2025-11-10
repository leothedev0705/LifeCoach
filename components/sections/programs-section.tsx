"use client"

import { motion } from "framer-motion"
import { User, Users, Building2, Clock, Target, Heart } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

const programs = [
  {
    title: "1-on-1 Transformation",
    subtitle: "Personal Coaching",
    icon: User,
    price: "from $297/month",
    description: "Personalized coaching sessions designed to unlock your unique potential and accelerate your personal growth journey.",
    features: [
      "Weekly 60-minute sessions",
      "Personalized action plans",
      "24/7 WhatsApp support",
      "Progress tracking tools",
      "Breakthrough strategies"
    ],
    color: "amethyst",
    popular: false
  },
  {
    title: "Group Mastermind",
    subtitle: "Collective Growth",
    icon: Users,
    price: "from $97/month",
    description: "Join a community of like-minded individuals on a shared journey of transformation and mutual support.",
    features: [
      "Bi-weekly group sessions",
      "Peer accountability",
      "Exclusive community access",
      "Monthly challenges",
      "Guest expert sessions"
    ],
    color: "rose",
    popular: true
  },
  {
    title: "Corporate Workshops",
    subtitle: "Team Development",
    icon: Building2,
    price: "Custom pricing",
    description: "Transform your organization with powerful workshops focused on leadership development and team synergy.",
    features: [
      "Custom program design",
      "On-site or virtual delivery",
      "Leadership assessments",
      "Team building activities",
      "Ongoing support"
    ],
    color: "amethyst",
    popular: false
  }
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Signature <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the perfect pathway for your transformation journey. 
              Each program is carefully designed to deliver extraordinary results.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <Reveal key={program.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative h-full"
                >
                  {program.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-amethyst-500 to-rose-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <GlassCard 
                    className="h-full flex flex-col relative overflow-hidden"
                    gradient={program.popular}
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                        program.color === 'amethyst' ? 'bg-amethyst-100' : 'bg-rose-100'
                      }`}>
                        <IconComponent className={`w-8 h-8 ${
                          program.color === 'amethyst' ? 'text-amethyst-600' : 'text-rose-600'
                        }`} />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-lg text-slate-600 mb-4">{program.subtitle}</p>
                      <div className={`text-3xl font-bold mb-2 ${
                        program.color === 'amethyst' ? 'text-amethyst-600' : 'text-rose-600'
                      }`}>
                        {program.price}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 text-center leading-relaxed">
                      {program.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {program.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            program.color === 'amethyst' ? 'bg-amethyst-500' : 'bg-rose-500'
                          }`} />
                          <span className="text-slate-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      variant={program.popular ? "gradient" : "default"}
                      size="lg"
                      className="w-full"
                      onClick={() => scrollToSection("contact")}
                    >
                      Get Started
                    </Button>
                  </GlassCard>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 text-amethyst-600 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              <Heart className="w-5 h-5" />
              <span className="font-medium">Not sure which program is right for you? Let's chat!</span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
} 