import { Minus, Plus } from "lucide-react"
import { Button } from "./ui/button"

interface NumberFieldProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function NumberField({
  value,
  onChange,
  min = 0,
  max = 99,
}: NumberFieldProps) {
  return (
    <div className="flex w-full items-center justify-between border">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus />
      </Button>
      <span className="min-w-10 px-4 py-1 text-center text-sm">{value}</span>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus />
      </Button>
    </div>
  )
}
