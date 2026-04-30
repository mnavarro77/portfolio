"use client"

import { Badge } from "@/components/ui/badge"
import { AnimatedSection, AnimatedItem } from "./animated-section"

const experiences = [
  {
    type: "work",
    date: "Mar 2026 - Actualidad",
    title: "Desarrollador Fullstack Practicante",
    company: "Alpha Docere",
    description: "Contribuyo a la mejora continua de productos digitales y a la resolución de incidencias en sistemas de gestión, colaborando activamente en el desarrollo de diversos proyectos internos.",
    tags: ["Next.js", "Node.js", "Fullstack"],
  },
  {
    type: "education",
    date: "Mar 2021 - Dic 2025",
    title: "Ingeniería en Informática",
    company: "INACAP",
    description: "Egresado con malla curricular completa. Desarrollo de competencias en ingeniería de software, gestión de proyectos y arquitectura de sistemas. Actualmente en proyecto de título.",
    tags: ["Ingeniería de Software", "Gestión de Proyectos", "Arquitectura"],
  },
  {
    type: "education",
    date: "Mar 2021 - Dic 2023",
    title: "Analista Programador",
    company: "INACAP",
    description: "Técnico de Nivel Superior. Formación centrada en el desarrollo de aplicaciones, gestión de bases de datos y lógica de programación avanzada.",
    tags: ["Desarrollo", "Bases de Datos", "Lógica"],
  },
]

export function Career() {
  return (
    <section id="trayectoria" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-2 animate-soft-drop">
            <span className="text-muted-foreground">/</span> Trayectoria
          </h2>
          <p className="text-sm text-muted-foreground mb-12">Un breve resumen de mi carrera profesional</p>
        </AnimatedSection>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedItem key={index} index={index}>
                <div
                  className={`relative md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-6 w-3 h-3 rounded-full bg-border border-2 border-background -translate-y-1/2"
                    style={{
                      [index % 2 === 0 ? "right" : "left"]: "-1.5rem",
                      transform: "translateX(50%)",
                    }}
                  />
                  
                  <div className="border border-border rounded-lg p-6 bg-card antigraviti-card relative z-10">
                    <p className="text-xs text-muted-foreground mb-2">{exp.date}</p>
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-border text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
