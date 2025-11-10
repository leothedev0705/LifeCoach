"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react"

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About Anita", href: "/about" },
      { name: "Programs", href: "/programs" },
      { name: "Blog", href: "/blog" },
      { name: "Resources", href: "/resources" },
      { name: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Programs",
    links: [
      { name: "1-on-1 Coaching", href: "/programs" },
      { name: "Group Mastermind", href: "/programs" },
      { name: "Corporate Workshops", href: "/programs" },
      { name: "Book Landing", href: "/book" },
      { name: "Free Resources", href: "/resources" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Podcast", href: "/resources" },
      { name: "Free Downloads", href: "/resources" },
      { name: "Book Preview", href: "/book" },
      { name: "Community", href: "/contact" }
    ]
  }
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" }
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-playfair text-3xl font-bold text-amethyst-400 mb-4 cursor-pointer"
              >
                Anita D'Souza
              </motion.div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transforming lives through purpose-driven coaching. 
              Helping you unlock your potential and create extraordinary success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amethyst-400" />
                <span>hello@anitadsouza.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amethyst-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amethyst-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: linkIndex * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-amethyst-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-lg mb-4 text-white">
                Follow the Journey
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-amethyst-400 hover:bg-slate-700 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-lg mb-4 text-white">
                Stay Inspired
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Get weekly inspiration and success tips
              </p>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-amethyst-400 text-white placeholder-slate-500"
                />
                <button className="px-6 py-2 bg-amethyst-500 hover:bg-amethyst-600 text-white rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Anita D'Souza Life Coaching. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-rose-400 fill-current" />
              <span>for your transformation</span>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex justify-center space-x-6 mt-4 text-xs">
            <button className="hover:text-amethyst-400 transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="hover:text-amethyst-400 transition-colors duration-300">
              Terms of Service
            </button>
            <button className="hover:text-amethyst-400 transition-colors duration-300">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 