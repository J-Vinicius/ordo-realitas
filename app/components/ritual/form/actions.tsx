import { ArrowLeft, BrushCleaning, Check } from "lucide-react"
import { Button } from "~/components/ui/button"

interface Props {
  onBack(): void
  onReset(): void
}

export function RitualActions({ onBack, onReset }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button type="button" variant="outline" onClick={onBack}>
        <ArrowLeft />
        Voltar
      </Button>

      <Button type="button" variant="destructive" onClick={onReset}>
        <BrushCleaning />
        Limpar
      </Button>

      <Button type="submit">
        <Check />
        Confirmar
      </Button>
    </div>
  )
}
