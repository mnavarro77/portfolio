import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { ChevronLeft, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function SatoshiProjectPage() {
  const filePath = path.join(process.cwd(), "Satoshi_Project_Showcase.md")
  const content = fs.readFileSync(filePath, "utf8")

  return (
    <main className="min-h-screen relative bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Link 
              href="/#publicaciones" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver a proyectos
            </Link>
            
            <div className="flex flex-col gap-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Satoshi: Tu Base de Datos con Voz Propia
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Michael Navarro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Mayo 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min de lectura</span>
                </div>
              </div>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border mb-16 bg-muted relative">
              <Image 
                src="/datamind_final.png" 
                alt="Satoshi Project" 
                fill
                className="object-cover"
                priority
              />
            </div>

            <article className="max-w-none text-foreground">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold mt-16 mb-10 text-foreground">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-foreground/90 border-b border-border/50 pb-2">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold mt-12 mb-6 text-foreground/80">{children}</h3>,
                  p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc pl-6 mb-8 space-y-4 text-muted-foreground">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 mb-8 space-y-4 text-muted-foreground">{children}</ol>,
                  li: ({ children }) => <li className="text-lg">{children}</li>,
                  hr: () => <hr className="my-16 border-border" />,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-6 py-2 italic bg-muted/30 rounded-r-lg mb-10 text-foreground/90 text-lg">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto mb-10 rounded-lg border border-border">
                      <table className="w-full border-collapse text-left text-sm md:text-base">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-muted/50">{children}</thead>,
                  th: ({ children }) => <th className="p-4 font-semibold border-b border-border">{children}</th>,
                  td: ({ children }) => <td className="p-4 border-b border-border/50 text-muted-foreground">{children}</td>,
                  strong: ({ children }) => <strong className="text-foreground font-semibold">{children}</strong>,
                  a: ({ children, href }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 transition-all">
                      {children}
                    </a>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </article>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </main>
  )
}
