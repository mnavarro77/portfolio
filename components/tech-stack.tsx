"use client"

import { 
  Code2, 
  Atom, 
  Zap, 
  Server, 
  Terminal, 
  GitBranch, 
  Database, 
  Cloud, 
  Monitor, 
  MonitorCheck,
  Cpu
} from "lucide-react"
import { AnimatedSection, AnimatedItem } from "./animated-section"

const techCategories = [
  {
    title: "Desarrollo Web",
    skills: [
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Zap },
      { name: "Node.js", icon: Server },
      { name: "NestJS", icon: Zap },
      { name: "Git", icon: GitBranch },
    ],
  },
  {
    title: "Bases de Datos",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "MariaDB", icon: Database },
    ],
  },
  {
    title: "Infraestructura & OS",
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Linux", icon: Cpu },
      { name: "Ubuntu", icon: Monitor },
      { name: "Windows Server", icon: MonitorCheck },
    ],
  },
]

export function TechStack() {
  return (
    <section id="tecnologias" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              <span className="text-muted-foreground">/</span> Tecnologías
            </h2>
            <p className="text-sm text-muted-foreground">
              Herramientas y lenguajes que utilizo para dar vida a productos digitales
            </p>
          </div>
        </AnimatedSection>
        
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <AnimatedItem key={category.title} index={categoryIndex}>
              <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-4 py-3 border border-border rounded-lg bg-card hover:border-muted-foreground transition-all duration-300 border-glow group"
                  >
                    <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-sm text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  )
}
