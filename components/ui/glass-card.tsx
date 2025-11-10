"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export function GlassCard({ 
  children, 
  className, 
  hover = true, 
  gradient = false 
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "glass-effect rounded-3xl p-8 shadow-xl",
        gradient && "gradient-border",
        className
      )}
    >
      {gradient ? (
        <div className="gradient-border-inner p-8">
          {children}
        </div>
      ) : (
        children
      )}
    </motion.div>
  )
} 