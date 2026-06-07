import { Copyright } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-12 mb-2 flex items-center justify-center gap-1 text-xs text-muted-foreground">
      Feito com ☕ e muito código.
      <Copyright size={14} /> 2026{" "}
      <a
        href="https://jorgevinicius-portfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jorge Vinicius.
      </a>
    </footer>
  )
}
