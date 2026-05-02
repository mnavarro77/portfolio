"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Globe, Smartphone, ShieldCheck, Link as LinkIcon, Brain, BookOpen } from "lucide-react"
import Link from "next/link"
import { AnimatedSection, AnimatedItem } from "./animated-section"

const projects = [
  {
    title: "Tutorial: Next.js con IA",
    type: "Tutorial / Guía Educativa",
    description: "Guía paso a paso para configurar un proyecto Next.js moderno e integrar capacidades de Inteligencia Artificial con el Vercel AI SDK, incluyendo chat en tiempo real con streaming.",
    tags: ["Next.js", "Vercel AI SDK", "TypeScript", "Streaming", "API Routes"],
    icon: BookOpen,
    image: "/Gemini_Generated_Image_a6iamfa6iamfa6ia.png",
    link: "https://github.com/mnavarro77/next-ai-chatbot-starter",
  },
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
    title: "Satoshi: Analista de Datos con IA",
    type: "Agente de Inteligencia de Negocios",
    description: "Asistente de Business Intelligence que transforma lenguaje natural en consultas SQL precisas. Optimizado para la interpretación semántica de esquemas PostgreSQL y generación de insights ejecutivos.",
    tags: ["Next.js", "Gemini AI", "PostgreSQL", "TypeScript"],
    icon: Brain,
    image: "/datamind_final.png",
    link: "https://github.com/mnavarro77/satoshi-data-agent.git",
    detailsLink: "/projects/satoshi",
  },
  {
    title: "Snipio: Infraestructura de Gestión de Enlaces y Analíticas",
    type: "Aplicación Web Full Stack",
    description: "Arquitectura escalable para el procesamiento y redirección de URLs con motor de analíticas en tiempo real, geolocalización avanzada y fingerprinting de dispositivos.",
    tags: ["Next.js", "React 19", "Prisma", "PostgreSQL", "Tailwind CSS"],
    icon: LinkIcon,
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

                  <div className="flex items-center gap-4 mt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        <Globe className="w-3 h-3" />
                        Código / Demo
                      </a>
                    )}
                    {"detailsLink" in project && project.detailsLink && (
                      <Link
                        href={project.detailsLink}
                        className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium"
                      >
                        <BookOpen className="w-3 h-3" />
                        Ver detalle
                      </Link>
                    )}
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
