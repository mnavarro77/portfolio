"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Globe, Smartphone, ShieldCheck, Link, Brain } from "lucide-react"
import { AnimatedSection, AnimatedItem } from "./animated-section"

const projects = [
  {
    title: "Legacy Vault PoC",
    type: "Protocolo Web3 / Smart Contract",
    description: "Sistema descentralizado de herencia digital basado en un mecanismo de 'Dead Man's Switch'. Asegura la transferencia de activos criptográficos (ERC20) tras inactividad prolongada.",
    tags: ["Solidity", "Next.js", "Ethers.js", "Web3", "Avalanche"],
    icon: ShieldCheck,
    image: "/legacy_vault.png",
    link: "https://github.com/mnavarro77/legacy-vault-poc/tree/main/SmartContract",
  },
  {
    title: "DataMind AI",
    type: "Agente de Inteligencia de Negocios",
    description: "Asistente de BI que transforma lenguaje natural en consultas SQL precisas. Utiliza Gemini AI para interpretar bases de datos PostgreSQL y entregar insights ejecutivos.",
    tags: ["Next.js", "Gemini AI", "PostgreSQL", "TypeScript"],
    icon: Brain,
    image: "/datamind_final.png",
    link: "https://github.com/mnavarro77/satoshi-data-agent.git",
  },
  {
    title: "Acortador de Enlaces Pro",
    type: "Aplicación Web Full Stack",
    description: "Plataforma para acortar URLs con analíticas avanzadas, geolocalización y tracking de dispositivos. Diseñado con una interfaz premium en modo oscuro y glassmorphism.",
    tags: ["Next.js", "React 19", "Prisma", "PostgreSQL", "Tailwind CSS"],
    icon: Link,
    image: "/acortador.png",
    link: "https://snipio-lac.vercel.app/",
  },
  {
    title: "JWT Auth Service",
    type: "API REST / Backend",
    description: "Servicio de autenticación con JWT y Refresh Tokens. Incluye validación con Zod, Rate Limiting y documentación interactiva con Swagger.",
    tags: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL"],
    icon: ShieldCheck,
    link: "https://jwt-auth-service-express.onrender.com/api/docs/",
    image: "/auth-api.png",
  },
]

export function Projects() {
  return (
    <section id="publicaciones" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-2 animate-soft-drop">
            <span className="text-muted-foreground">/</span> Últimas publicaciones
          </h2>
          <p className="text-sm text-muted-foreground mb-12">
            Una selección de trabajos profesionales, aplicaciones publicadas y prototipos experimentales.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedItem key={project.title} index={index}>
              <div className="border border-border rounded-lg overflow-hidden bg-card group antigraviti-card h-full relative z-10">
                <div className="aspect-video bg-muted flex items-center justify-center border-b border-border overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <project.icon className="w-12 h-12 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>

                <div className="p-6">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between mb-2 group/link"
                    >
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{project.type}</p>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-foreground transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{project.type}</p>
                      <ExternalLink className="w-4 h-4 text-muted-foreground transition-colors" />
                    </div>
                  )}

                  <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
    </section>
  )
}
