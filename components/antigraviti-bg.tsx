"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  speedX: number
  speedY: number
}

export function AntigravitiBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let animationFrameId: number

    // Parallax target coordinates
    let targetX = 0
    let targetY = 0

    // Current parallax offset (lerped)
    let offsetX = 0
    let offsetY = 0

    const setCanvasSize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initStars()
    }

    const stars: Star[] = []
    // Extremely subtle stardust: few particles, very small, low opacity
    const starCount = Math.floor((width * height) / 8000) 

    const initStars = () => {
      stars.length = 0
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2 + 0.2, // 0.2 to 1.4px
          opacity: Math.random() * 0.4 + 0.1, // 0.1 to 0.5 opacity
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const normalizedX = (e.clientX / width) * 2 - 1
      const normalizedY = (e.clientY / height) * 2 - 1
      
      // Target offset in pixels. Max movement of 20px for a subtle effect
      targetX = normalizedX * 20
      targetY = normalizedY * 20
    }

    const render = () => {
      // Lerp (Linear Interpolation) for smooth organic movement
      offsetX += (targetX - offsetX) * 0.05
      offsetY += (targetY - offsetY) * 0.05

      ctx.clearRect(0, 0, width, height)

      stars.forEach((star) => {
        // Apply individual drifting speed
        star.x += star.speedX
        star.y += star.speedY

        // Wrap around screen
        if (star.x < -10) star.x = width + 10
        if (star.x > width + 10) star.x = -10
        if (star.y < -10) star.y = height + 10
        if (star.y > height + 10) star.y = -10

        // Calculate final position with parallax offset
        // Parallax is negative (moves opposite to mouse)
        // Multiply by star.radius so bigger stars move slightly faster (depth effect)
        const parallaxFactor = star.radius * 0.5
        const finalX = star.x - (offsetX * parallaxFactor)
        const finalY = star.y - (offsetY * parallaxFactor)

        ctx.beginPath()
        ctx.arc(finalX, finalY, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(160, 160, 180, ${star.opacity})` // Soft cool gray / stardust
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener("resize", setCanvasSize)
    window.addEventListener("mousemove", handleMouseMove)

    setCanvasSize()
    render()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-50 bg-background"
      style={{ opacity: 0.8 }} // Extra subtle
    />
  )
}
