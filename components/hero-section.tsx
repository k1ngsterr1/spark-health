"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <motion.section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/80" />
        <div className="absolute inset-0 bg-[url('/digital-flow.png')] bg-cover bg-center opacity-30" />
        <div className="absolute top-20 left-0 w-full h-40 bg-[oklch(0.6_0.2_240)] opacity-10 blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-full h-40 bg-[oklch(0.6_0.2_240)] opacity-10 blur-[100px]" />
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div style={{ y, opacity }} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block"
            >
              <span className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm font-medium bg-black/40 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-[oklch(0.6_0.2_240)]" />
                <span className="ml-2">Now in early access</span>
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
            >
              The Future of Healthcare
              <span className="text-[oklch(0.6_0.2_240)]"> Technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-400 max-w-md"
            >
              Spark Health brings cutting-edge solutions to transform patient care, data management, and clinical
              workflows.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-[oklch(0.6_0.2_240)] hover:bg-[oklch(0.5_0.2_240)] text-white">
                Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm shadow-2xl">
              <Image
                src="/holistic-health-hub.png"
                alt="Spark Health Dashboard"
                width={1280}
                height={720}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                type: "spring",
              }}
              className="absolute -bottom-6 -left-6 max-w-xs p-4 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">AI-Enhanced Diagnostics</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">Leveraging machine learning for 98.7% diagnostic accuracy</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
