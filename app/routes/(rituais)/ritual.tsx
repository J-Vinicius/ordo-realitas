import { ChevronLeft } from "lucide-react"
import { useNavigate, useParams } from "react-router"
import { Button } from "~/components/ui/button"
import { RitualCard as RitualDetails } from "~/components/ritual/card"
import { useDocumentTitle } from "usehooks-ts"
import { useRituals } from "~/hooks/use-ritual"
import { rituais } from "~/database/rituais"
import { useEffect, useState } from "react"

export default function Ritual() {
  const navigate = useNavigate()

  const { ritual: slug } = useParams()

  const rituals = useRituals()

  const allRituals = rituals.concat(rituais)

  const ritual = allRituals.find((r) => r.slug === slug)

  useDocumentTitle(ritual?.name || "Ritual")

  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)")

    const update = () => setIsMobile(media.matches)

    update() // executa antes do primeiro paint após montar
    media.addEventListener("change", update)

    return () => media.removeEventListener("change", update)
  }, [])

  if (isMobile === null) {
    return null // ou um Skeleton
  }

  if (!ritual) {
    return (
      <main className="flex h-svh items-center justify-center">
        Ritual não encontrado.
      </main>
    )
  }

  return (
    <main className="h-svh">
      <Button
        variant="outline"
        size="icon-lg"
        className="fixed top-2 left-2"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft />
      </Button>

      <RitualDetails ritual={ritual} isMobile={isMobile} />
    </main>
  )
}
