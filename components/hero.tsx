"use client"

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen pt-20 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <div className="relative w-24 h-24 mx-auto mb-6">
            {/* Shadow/Glow layer */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2),0_0_70px_rgba(255,255,255,0.1)] border border-border/50" />

            {/* Image container with cropping */}
            <div className="relative w-full h-full rounded-full border border-border overflow-hidden bg-card">
              <img
                src="/profile.jpeg"
                alt="Michael Navarro"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-sm text-muted-foreground mb-2">Hola, soy</p>
          <h1 className="text-4xl font-bold text-foreground mb-4">Michael Navarro</h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto mb-8">
            Desarrollador Full Stack orientado a crear interfaces intuitivas y arquitecturas escalables. Me especializo en transformar ideas complejas en productos digitales de alto impacto, combinando un diseño limpio con un código eficiente y seguro.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Button variant="outline" className="mb-8 border-border hover:bg-card">
            Ver CV
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com/mnavarro77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/michael-navarro-cruz-39330228b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mnavarrocruz06@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
