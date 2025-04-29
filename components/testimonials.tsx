"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Emily Chen",
    role: "Chief Medical Officer, General Hospital",
    image: "/confident-female-physician.png",
    quote:
      "Spark Health has transformed how we deliver care. The real-time analytics and collaborative tools have reduced our decision time by 40%.",
    stars: 5,
  },
  {
    name: "James Wilson",
    role: "Healthcare IT Director",
    image: "/confident-tech-expert.png",
    quote:
      "The implementation was seamless, and the security features give us complete confidence in handling sensitive patient data.",
    stars: 5,
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Pediatric Specialist",
    image: "/confident-pediatrician.png",
    quote:
      "My practice has seen a 30% increase in efficiency since adopting Spark Health. The interface is intuitive and the support team is exceptional.",
    stars: 4,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-[oklch(0.6_0.2_240)] opacity-10 rounded-full blur-[100px] -z-10" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Trusted by Healthcare Professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[700px] text-gray-400 md:text-xl"
          >
            Hear what healthcare leaders have to say about their experience with Spark Health.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm p-6 transition-all hover:border-[oklch(0.6_0.2_240)]/40 hover:shadow-md hover:shadow-[oklch(0.6_0.2_240)]/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                  />
                ))}
              </div>
              <blockquote className="text-gray-300 italic">"{testimonial.quote}"</blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
