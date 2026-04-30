"use client"

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { AnimatedSection, AnimatedItem } from "./animated-section"

const contactLinks = [
  {
    title: "GitHub",
    url: "github.com/mnavarro77",
    href: "https://github.com/mnavarro77",
    icon: Github,
  },
  {
    title: "LinkedIn",
    url: "linkedin.com/in/michael-navarro...",
    href: "https://www.linkedin.com/in/michael-navarro-cruz-39330228b/",
    icon: Linkedin,
  },
  {
    title: "Email",
    url: "mnavarrocruz06@gmail.com",
    href: "mailto:mnavarrocruz06@gmail.com",
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-2 animate-soft-drop">
            <span className="text-muted-foreground">/</span> Contáctame
          </h2>
          <p className="text-sm text-muted-foreground mb-12">
            No dudes en ponerte en contacto. Siempre estoy abierto a discutir nuevos proyectos y oportunidades.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactLinks.map((link, index) => (
            <AnimatedItem key={link.title} index={index}>
              <a
                href={link.href}
                target={link.title !== "Email" ? "_blank" : undefined}
                rel={link.title !== "Email" ? "noopener noreferrer" : undefined}
                className="border border-border rounded-lg p-6 bg-card text-center group block antigraviti-card relative z-10"
              >
                <link.icon className="w-6 h-6 mx-auto mb-4 text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                <h3 className="font-medium text-foreground mb-1">{link.title}</h3>
                <p className="text-xs text-muted-foreground truncate">{link.url}</p>
              </a>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  )
}
