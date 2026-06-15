export type FormaAvancada = {
  description: string
  custoPE: number
  preReq: string
}

export type Element = "Conhecimento" | "Sangue" | "Morte" | "Energia" | "Medo"

export interface Ritual {
  slug: string
  name: string
  element: Element
  reference: string
  circle: number

  execution: string
  range: string
  area: string
  target: string
  duration: string
  resistance: string

  skill_resistence: string

  description: string
  discente?: FormaAvancada
  verdadeira?: FormaAvancada
  fonte: string
}
