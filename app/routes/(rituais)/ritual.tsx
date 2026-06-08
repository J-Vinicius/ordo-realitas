import { ChevronLeft } from "lucide-react"
import { useNavigate, useParams } from "react-router"

import ritualsJson from "~/database/rituais.json"

import { Button } from "~/components/ui/button"
import { Ritual as RitualDetails } from "~/components/ritual"
import type { Ritual } from "~/shared/types"
import { useDocumentTitle } from "usehooks-ts"

export default function Ritual() {
  const { ritual: slug } = useParams()

  const navigate = useNavigate()

  const rituals = ritualsJson as Ritual[]

  const ritual = rituals.find((r) => r.slug === slug) as Ritual | undefined

  if (!ritual) {
    return (
      <main className="flex h-svh items-center justify-center">
        Ritual não encontrado.
      </main>
    )
  }

  useDocumentTitle(ritual.title)

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

      <RitualDetails {...ritual} />
    </main>
  )
}
