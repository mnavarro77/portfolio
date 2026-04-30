"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speedX: number
  speedY: number
  char: string
  glows: boolean
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

    const codeChars = ['{', '}', '<', '>', '/', ';', '=', '(', ')', '[', ']', '#', '*', '&', '|', '::', '=>', '!=', '&&', '//', '++', '--', '**', '<?', '/>']

    const initStars = () => {
      stars.length = 0
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 10 + 6,
          opacity: Math.random() * 0.25 + 0.05,
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
          char: codeChars[Math.floor(Math.random() * codeChars.length)],
          glows: Math.random() < 0.15, // ~15% of chars glow
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
        const parallaxFactor = star.size * 0.03
        const finalX = star.x - (offsetX * parallaxFactor)
        const finalY = star.y - (offsetY * parallaxFactor)

        ctx.font = `${star.size}px 'Geist Mono', monospace`

        if (star.glows) {
          const pulse = Math.sin(Date.now() * 0.002 + star.x) * 0.15 + 0.85
          const glowOpacity = Math.min(star.opacity * 2.5 * pulse, 0.6)
          ctx.shadowColor = 'rgba(180, 190, 255, 0.8)'
          ctx.shadowBlur = 12
          ctx.fillStyle = `rgba(200, 210, 255, ${glowOpacity})`
        } else {
          ctx.shadowBlur = 0
          ctx.fillStyle = `rgba(160, 160, 180, ${star.opacity})`
        }

        ctx.fillText(star.char, finalX, finalY)
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
