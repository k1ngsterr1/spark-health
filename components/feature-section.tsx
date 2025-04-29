"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Activity, ArrowUpRight, Database, Lock, Monitor, Users } from "lucide-react"

const features = [
  {
    icon: <Activity className="h-10 w-10 text-[oklch(0.6_0.2_240)]" />,
    title: "Real-time Monitoring",
    description: "Monitor patient vitals and health metrics in real-time with millisecond precision.",
  },
  {
    icon: <Database className="h-10 w-10 text-[oklch(0.6_0.2_240)]" />,
    title: "Secure Data Storage",
    description: "HIPAA-compliant storage solutions with end-to-end encryption for all patient data.",
  },
  {
    icon: <Users className="h-10 w-10 text-[oklch(0.6_0.2_240)]" />,
    title: "Collaborative Care",
    description: "Enable seamless collaboration between healthcare providers for better patient outcomes.",
  },
  {
    icon: <Monitor className="h-10 w-10 text-[oklch(0.6_0.2_240)]" />,
    title: "AI Diagnostics",
    description: "Advanced machine learning algorithms assist in accurate and rapid diagnosis.",
  },
  {
    icon: <Lock className="h-10 w-10 text-[oklch(0.6_0.2_240)]" />,
    title: "Privacy First",
    description: "Robust security measures ensure patient data privacy and regulatory compliance.",
  },
  {
    icon: <ArrowUpRight className="h-10 w-10 text-[oklch(0.6_0.2_240)]" />,
    title: "Scalable Infrastructure",
    description: "Grow your practice or healthcare system with infrastructure that scales with your needs.",
  },
]

export function FeatureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section id="features" className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Powerful Features for Modern Healthcare
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[700px] text-gray-400 md:text-xl"
          >
            Our platform offers everything you need to revolutionize your healthcare practice.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm p-6 transition-all hover:border-[oklch(0.6_0.2_240)]/40 hover:shadow-md hover:shadow-[oklch(0.6_0.2_240)]/10"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[oklch(0.6_0.2_240)] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[oklch(0.6_0.2_240)] transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
