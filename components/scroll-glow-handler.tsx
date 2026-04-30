"use client"

import { useEffect } from "react"

export function ScrollGlowHandler() {
  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false
    let intensity = 0
    const decay = 0.95 // How fast the glow fades after stopping scroll

    const updateGlow = () => {
      const currentScrollY = window.scrollY
      const delta = Math.abs(currentScrollY - lastScrollY)
      
      // Much more sensitive: delta of 20px now gives significant glow
      const targetIntensity = Math.min(delta / 25, 1) 
      
      // Faster attack, slower decay for a "lingering" glow
      if (targetIntensity > intensity) {
        intensity += (targetIntensity - intensity) * 0.3
      } else {
        intensity *= 0.92
      }

      if (intensity < 0.01) intensity = 0

      document.documentElement.style.setProperty("--scroll-glow", intensity.toFixed(3))
      
      lastScrollY = currentScrollY
      
      if (intensity > 0 || ticking) {
        requestAnimationFrame(updateGlow)
      } else {
        ticking = false
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateGlow)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return null
}
