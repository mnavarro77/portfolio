import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Career } from "@/components/career"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <Career />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
