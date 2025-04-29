"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create an account and set up your healthcare practice profile.",
    delay: 0.2,
  },
  {
    number: "02",
    title: "Integrate",
    description: "Connect your existing systems and import patient records securely.",
    delay: 0.4,
  },
  {
    number: "03",
    title: "Configure",
    description: "Customize dashboards and workflows to match your practice's needs.",
    delay: 0.6,
  },
  {
    number: "04",
    title: "Deploy",
    description: "Go live with your new system in minutes, not months.",
    delay: 0.8,
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="how-it-works" className="py-20 relative bg-gradient-to-b from-black to-black/90">
      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              How Spark Health Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 md:text-xl"
            >
              Get up and running with our intuitive platform in just four simple steps.
            </motion.p>

            <div className="space-y-8 mt-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: step.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[oklch(0.6_0.2_240)]/10 text-[oklch(0.6_0.2_240)] font-mono text-lg font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div ref={ref} style={{ y }} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/medical-data-dashboard.png"
                alt="Spark Health Interface"
                width={800}
                height={800}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* UI Elements overlayed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md rounded-lg border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-white">Patient Recovery Trends</h4>
                    <p className="text-xs text-gray-400">Last 30 days</p>
                  </div>
                  <div className="text-[oklch(0.6_0.2_240)] text-lg font-bold">+24%</div>
                </div>
                <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[oklch(0.6_0.2_240)] rounded-full" style={{ width: "65%" }}></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 p-4 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[oklch(0.6_0.2_240)]" />
                <span className="text-sm font-medium">Connected Devices</span>
              </div>
              <p className="mt-1 text-xs text-gray-400">12 devices online</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
