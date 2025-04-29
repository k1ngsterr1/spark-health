"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  value: number
  className?: string
  duration?: number
}

export default function CountUp({ value, className = "", duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / (duration * 1000), 1)

      setCount(Math.floor(percentage * value))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value) // Ensure we end at exact value
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [value, duration, isInView])

  return (
    <div ref={ref} className={className}>
      {count.toLocaleString()}
    </div>
  )
}
