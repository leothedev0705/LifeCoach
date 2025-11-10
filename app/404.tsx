import Link from "next/link"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-lavender-50">
      <NavBar />
      
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* 404 Illustration */}
            <div className="text-9xl md:text-[12rem] font-bold text-amethyst-200 mb-8">
              404
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-800 mb-6">
              Page Not Found
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Looks like you&apos;ve wandered off the path to transformation. 
              Don&apos;t worry, even the most successful people take detours sometimes!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/">
                <Button variant="gradient" size="lg" className="group">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              
              <Link href="/programs">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Explore Programs
                </Button>
              </Link>
            </div>
            
            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600 mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/about" className="text-amethyst-600 hover:text-amethyst-700 transition-colors">
                  About Anita
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/programs" className="text-amethyst-600 hover:text-amethyst-700 transition-colors">
                  Coaching Programs
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/blog" className="text-amethyst-600 hover:text-amethyst-700 transition-colors">
                  Success Blog
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/resources" className="text-amethyst-600 hover:text-amethyst-700 transition-colors">
                  Free Resources
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/contact" className="text-amethyst-600 hover:text-amethyst-700 transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 