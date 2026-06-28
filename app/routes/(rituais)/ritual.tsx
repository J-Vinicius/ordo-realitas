import { ChevronLeft } from "lucide-react"
import { useNavigate, useParams } from "react-router"
import { Button } from "~/components/ui/button"
import { RitualCard as RitualDetails } from "~/components/ritual/card"
import { useDocumentTitle, useMediaQuery } from "usehooks-ts"
import { useRituals } from "~/hooks/use-ritual"
import { rituais } from "~/database/rituais"

export default function Ritual() {
  const navigate = useNavigate()

  const { ritual: slug } = useParams()

  const rituals = useRituals()

  const allRituals = rituals.concat(rituais)

  const ritual = allRituals.find((r) => r.slug === slug)

  useDocumentTitle(ritual?.name || "Ritual")
  const isDesktop = useMediaQuery("(min-width: 640px)")

  if (!ritual) {
    return (
      <main className="flex h-svh items-center justify-center">
        Ritual não encontrado.
      </main>
    )
  }

  return (
    <main className="h-svh p-2">
      <Button
        variant="outline"
        size="icon-lg"
        className="fixed top-2 left-2"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft />
      </Button>

      <RitualDetails ritual={ritual} isMobile={isDesktop} />
    </main>
  )
}
