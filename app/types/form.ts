import type { FormaAvancada, Ritual } from "./ritual"

export interface RitualFieldProps {
  card: Ritual
  setField: <K extends keyof Ritual>(key: K, value: Ritual[K]) => void
}

export interface RitualAdvancedFieldProps {
  card: Ritual
  setNestedField: (
    parent: "discente" | "verdadeira",
    key: keyof FormaAvancada,
    value: string | number
  ) => void
}
