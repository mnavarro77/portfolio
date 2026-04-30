"use client"

import { useEffect, useState } from "react"

export function AntigravitiPointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // We use requestAnimationFrame for the smoothest possible pointer tracking
    let frameId: number
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!isVisible) setIsVisible(true)

      // Check if hovering over interactive elements or text
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, p, h1, h2, h3, span, input, textarea, [role="button"]') !== null
      setIsHovering(isInteractive)
    }

    const updatePosition = () => {
      setPosition({ x: targetX, y: targetY })
      frameId = requestAnimationFrame(updatePosition)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    
    frameId = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      cancelAnimationFrame(frameId)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full transition-[width,height,background-color] duration-500 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        width: isHovering ? "180px" : "80px",
        height: isHovering ? "180px" : "80px",
        background: isHovering 
          ? "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)"
          : "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 50%)",
        // Force hardware acceleration
        willChange: "transform, width, height"
      }}
    />
  )
}
