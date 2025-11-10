"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

const comparisonData = [
  {
    feature: "One-on-one coaching sessions",
    personal: true,
    group: false,
    corporate: "custom"
  },
  {
    feature: "Group coaching calls",
    personal: false,
    group: true,
    corporate: true
  },
  {
    feature: "24/7 text support",
    personal: true,
    group: false,
    corporate: "custom"
  },
  {
    feature: "Personalized action plans",
    personal: true,
    group: "basic",
    corporate: true
  },
  {
    feature: "Community access",
    personal: false,
    group: true,
    corporate: true
  },
  {
    feature: "Monthly group challenges",
    personal: false,
    group: true,
    corporate: false
  },
  {
    feature: "On-site delivery option",
    personal: false,
    group: false,
    corporate: true
  },
  {
    feature: "Leadership assessments",
    personal: "advanced",
    group: "basic",
    corporate: true
  },
  {
    feature: "Follow-up support (3 months)",
    personal: true,
    group: true,
    corporate: true
  }
]

const programs = [
  {
    name: "1-on-1 Coaching",
    type: "personal",
    price: "$297",
    period: "/month",
    description: "Personalized transformation",
    popular: false
  },
  {
    name: "Group Mastermind",
    type: "group", 
    price: "$97",
    period: "/month",
    description: "Community-driven growth",
    popular: true
  },
  {
    name: "Corporate Workshops",
    type: "corporate",
    price: "Custom",
    period: "pricing",
    description: "Team & organizational development",
    popular: false
  }
]

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-500" />
  } else if (value === false) {
    return <X className="w-5 h-5 text-slate-300" />
  } else if (value === "custom") {
    return <span className="text-xs font-medium text-amethyst-600 px-2 py-1 bg-amethyst-50 rounded">Custom</span>
  } else if (value === "basic") {
    return <span className="text-xs font-medium text-slate-600 px-2 py-1 bg-slate-100 rounded">Basic</span>
  } else if (value === "advanced") {
    return <span className="text-xs font-medium text-amethyst-600 px-2 py-1 bg-amethyst-50 rounded">Advanced</span>
  }
  return null
}

export function ProgramsComparison() {
  return (
    <section className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Compare <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the coaching experience that best fits your goals, schedule, 
              and preferred learning style.
            </p>
          </div>
        </Reveal>

        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-8">
          {programs.map((program, index) => (
            <Reveal key={program.type} delay={index * 0.1}>
              <GlassCard className={program.popular ? "border-2 border-amethyst-200" : ""}>
                {program.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-amethyst-500 to-rose-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-playfair font-bold text-slate-800 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{program.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-amethyst-600">{program.price}</span>
                    <span className="text-slate-500 ml-1">{program.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {comparisonData.map((item) => {
                    const value = item[program.type as keyof typeof item]
                    return (
                      <div key={item.feature} className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">{item.feature}</span>
                        <FeatureIcon value={value} />
                      </div>
                    )
                  })}
                </div>

                <Button variant={program.popular ? "gradient" : "outline"} className="w-full">
                  Choose {program.name}
                </Button>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <Reveal delay={0.3}>
            <GlassCard className="overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 gap-6 p-6 border-b border-slate-100">
                <div className="font-semibold text-slate-800">Features</div>
                {programs.map((program) => (
                  <div key={program.type} className="text-center">
                    {program.popular && (
                      <div className="mb-2">
                        <span className="bg-gradient-to-r from-amethyst-500 to-rose-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="font-playfair font-bold text-lg text-slate-800 mb-1">
                      {program.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">{program.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl font-bold text-amethyst-600">{program.price}</span>
                      <span className="text-slate-500 text-sm ml-1">{program.period}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="divide-y divide-slate-100">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={item.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-4 gap-6 p-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="font-medium text-slate-700">{item.feature}</div>
                    <div className="flex justify-center">
                      <FeatureIcon value={item.personal} />
                    </div>
                    <div className="flex justify-center">
                      <FeatureIcon value={item.group} />
                    </div>
                    <div className="flex justify-center">
                      <FeatureIcon value={item.corporate} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-4 gap-6 p-6 border-t border-slate-100">
                <div></div>
                {programs.map((program) => (
                  <div key={`cta-${program.type}`} className="text-center">
                    <Button 
                      variant={program.popular ? "gradient" : "outline"} 
                      className="w-full"
                    >
                      Choose Plan
                    </Button>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
} 