export type FormaAvancada = {
  description: string
  custoPE: number
  preReq: string
}

export type Element = "conhecimento" | "sangue" | "morte" | "energia" | "medo"

export interface Ritual {
  slug: string
  name: string
  element: Element
  reference: string
  circle: number

  execution?: string
  range?: string
  area?: string
  target?: string
  duration?: string

  skill_resistence?: string
  resistance?: string

  description: string
  discente?: FormaAvancada
  verdadeira?: FormaAvancada
  fonte: string
}
