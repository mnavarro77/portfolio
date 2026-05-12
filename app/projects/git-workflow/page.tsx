import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { ChevronLeft, Calendar, User, Clock, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function GitWorkflowPage() {
  const filePath = path.join(process.cwd(), "public", "GIT_WORKFLOW.md")
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
              Volver a publicaciones
            </Link>
            
            <div className="flex flex-col gap-4 mb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Flujo de Trabajo en Git
                </h1>
                <a 
                  href="/GIT_WORKFLOW.md" 
                  download="Flujo_de_Trabajo_Git.md"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg text-sm font-medium shadow-sm w-fit"
                >
                  <Download className="w-4 h-4" />
                  Descargar Guía (.md)
                </a>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
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
                  <span>4 min de lectura</span>
                </div>
              </div>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border mb-16 bg-muted relative">
              <Image 
                src="/Gemini_Generated_Image_2vt83p2vt83p2vt8.png" 
                alt="Flujo de Trabajo en Git" 
                fill
                className="object-cover"
                priority
              />
            </div>

            <article className="prose max-w-none dark:prose-invert
              prose-headings:text-foreground 
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-li:text-muted-foreground
              prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-medium before:prose-code:content-none after:prose-code:content-none
              prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border prose-pre:text-foreground
              prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
              prose-th:text-foreground prose-th:border-border prose-th:bg-muted/50 prose-th:p-3
              prose-td:text-muted-foreground prose-td:border-border/50 prose-td:p-3
              prose-hr:border-border">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
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
