"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Laptop, MenuIcon, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <motion.header style={{ backgroundColor }} className="fixed top-0 left-0 right-0 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Laptop className="h-8 w-8 text-[oklch(0.6_0.2_240)]" />
              <span className="font-bold text-xl">Spark Health</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Button className="bg-[oklch(0.6_0.2_240)] hover:bg-[oklch(0.5_0.2_240)] text-white ml-2">
              Get Started
            </Button>
          </nav>
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="md:hidden bg-black/90 backdrop-blur-md absolute top-16 inset-x-0 h-screen"
        >
          <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
            <Link
              href="#features"
              className="text-lg font-medium p-2 hover:bg-white/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-lg font-medium p-2 hover:bg-white/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-lg font-medium p-2 hover:bg-white/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium p-2 hover:bg-white/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Button
              className="bg-[oklch(0.6_0.2_240)] hover:bg-[oklch(0.5_0.2_240)] text-white mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
