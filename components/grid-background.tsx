"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

interface GridBackgroundProps {
  cellSize?: number
  lineColor?: string
}

export default function GridBackground({
  cellSize = 40,
  lineColor = "rgba(255, 255, 255, 0.07)",
}: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controls = useAnimation()

  // Add subtle animation to the grid
  useEffect(() => {
    controls.start({
      opacity: [0.7, 1, 0.7],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 8,
        ease: "easeInOut",
      },
    })
  }, [controls])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    let animationFrameId: number
    let offset = 0
    const speed = 0.2 // Speed of grid movement

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGrid = () => {
      if (!context) return

      context.clearRect(0, 0, canvas.width, canvas.height)
      context.strokeStyle = lineColor
      context.lineWidth = 1

      // Calculate offset for animation
      offset = (offset + speed) % cellSize

      // Draw vertical lines with offset
      for (let x = offset; x <= canvas.width; x += cellSize) {
        context.beginPath()
        context.moveTo(x, 0)
        context.lineTo(x, canvas.height)
        context.stroke()
      }

      // Draw horizontal lines with offset
      for (let y = offset; y <= canvas.height; y += cellSize) {
        context.beginPath()
        context.moveTo(0, y)
        context.lineTo(canvas.width, y)
        context.stroke()
      }

      // Continue animation
      animationFrameId = requestAnimationFrame(drawGrid)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [cellSize, lineColor])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 1 }}
    />
  )
}
