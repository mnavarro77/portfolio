export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Michael Navarro © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-muted-foreground">
          Construido con Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
