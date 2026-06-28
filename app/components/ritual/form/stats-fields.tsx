import { Field } from "~/components/ui/field"
import { Label } from "~/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { Input } from "~/components/ui/input"
import type { RitualFieldProps } from "~/types/form"
import { stats } from "~/constants/ritual"

export function RitualStatsFields({ card, setField }: RitualFieldProps) {
  return (
    <ul className="grid-cols-3 gap-2 sm:grid">
      {stats.map((stat) => (
        <Field key={stat.title}>
          <Label>{stat.title}</Label>
          <Select
            value={card[stat.key]}
            onValueChange={(v) => setField(stat.key, v)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {stat.list.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      ))}

      <Field>
        <Label>Perícia para Resistência</Label>
        <Input
          value={card.skill_resistence}
          onChange={(e) => setField("skill_resistence", e.target.value)}
        />
      </Field>

      <Field>
        <Label>Alvo</Label>
        <Input
          value={card.target}
          onChange={(e) => setField("target", e.target.value)}
        />
      </Field>
    </ul>
  )
}
