import { NumberField } from "~/components/number-field"
import { Field } from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { elements } from "~/constants/ritual"
import type { RitualFieldProps } from "~/types/form"
import type { Element } from "~/types/ritual"

export function RitualBasicFields({ card, setField }: RitualFieldProps) {
  return (
    <div className="flex-row gap-4 sm:flex">
      <Field>
        <Label>Imagem do Ritual</Label>
        <Input
          value={card.reference}
          onChange={(e) => setField("reference", e.target.value)}
        />
      </Field>

      <Field>
        <Label>Nome do Ritual</Label>
        <Input
          value={card.name}
          onChange={(e) => setField("name", e.target.value)}
        />
      </Field>

      <Field>
        <Label>Círculo</Label>
        <NumberField
          value={card.circle}
          onChange={(v) => setField("circle", v)}
          min={1}
          max={4}
        />
      </Field>

      <Field>
        <Label>Elemento</Label>
        <Select
          value={card.element}
          onValueChange={(v) => setField("element", v as Element)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {elements.map((el) => (
                <SelectItem key={el} value={el}>
                  {el}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  )
}
