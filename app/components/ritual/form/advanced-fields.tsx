import { NumberField } from "~/components/number-field"
import { Field } from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import type { RitualAdvancedFieldProps } from "~/types/form"

const forms = ["discente", "verdadeira"] as const

export function RitualAdvancedFields({
  card,
  setNestedField,
}: RitualAdvancedFieldProps) {
  return (
    <div className="gap-2 sm:flex">
      {forms.map((form) => (
        <Field key={form} className="flex-1">
          <Label>{form === "discente" ? "Discente" : "Verdadeira"}</Label>
          <Textarea
            value={card[form]?.description ?? ""}
            onChange={(e) =>
              setNestedField(form, "description", e.target.value)
            }
          />

          <Label>Custo PE</Label>

          <NumberField
            value={card[form]?.custoPE ?? 0}
            onChange={(v) => setNestedField(form, "custoPE", v)}
            min={1}
            max={16}
          />

          <Label>Pré-Requisito</Label>

          <Input
            value={card[form]?.preReq ?? ""}
            onChange={(e) => setNestedField(form, "preReq", e.target.value)}
          />
        </Field>
      ))}
    </div>
  )
}
