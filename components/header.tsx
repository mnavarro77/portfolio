"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Home, FolderOpen, Route, Cpu, Mail } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio", icon: Home },
  { label: "Publicaciones", href: "#publicaciones", icon: FolderOpen },
  { label: "Trayectoria", href: "#trayectoria", icon: Route },
  { label: "Tecnologías", href: "#tecnologias", icon: Cpu },
  { label: "Contacto", href: "#contacto", icon: Mail },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("#inicio")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1))

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      setScrollProgress(progress)

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.4) {
            current = id
          }
        }
      }
      setActiveSection(`#${current}`)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 bottom-0 z-50 w-16 hidden md:flex flex-col items-center justify-center gap-1">
        {/* Nav items */}
        <div className="flex flex-col items-center gap-6 relative">
          {navItems.map((item) => {
            const isActive = item.href === activeSection
            const Icon = item.icon

            return (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center justify-center"
                aria-label={item.label}
              >
                {/* Active background glow */}
                <div
                  className="absolute inset-0 rounded-xl transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : 0,
                    background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                    transform: `scale(${isActive ? 2.5 : 1})`,
                  }}
                />

                {/* Icon container */}
                <div
                  className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "bg-white/10 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-all duration-500 ${
                      isActive
                        ? "text-foreground drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  />
                </div>

                {/* Tooltip label */}
                <span className="absolute left-14 px-3 py-1.5 rounded-lg text-xs font-medium bg-card border border-border text-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-border/30 rounded-full overflow-hidden">
            <div
              className="w-full bg-foreground/60 rounded-full transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          <span className="text-[10px] text-muted-foreground font-mono">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const isActive = item.href === activeSection
            const Icon = item.icon

            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-1 relative"
                aria-label={item.label}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.08)]"
                      : ""
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-all duration-500 ${
                      isActive
                        ? "text-foreground drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
                <span
                  className={`text-[10px] transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
