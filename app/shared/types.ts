// type FormaAvancada = {
//   description: string
//   custoPE: number
//   preReq: string
// }

// export interface Ritual {
//   name: string
//   slug: string
//   reference: {
//     title: string
//     image: string
//   }
//   element: string
//   circle: number
//   execution: string
//   range: string
//   area: string
//   duration: string
//   resistance: string
//   target: string
//   description: string
//   discente: FormaAvancada
//   verdadeira: FormaAvancada
//   fonte: string
// }

export type StatType =
  | "execucao"
  | "alcance"
  | "area"
  | "alvo"
  | "duracao"
  | "resistencia"

export type Stat = {
  type: StatType
  text: string
}

export type Advanced = {
  title: string
  description: string
  requirement: string
  cost: number
}

export type Element = "Conhecimento" | "Sangue" | "Morte" | "Energia" | "Medo"

export type Ritual = {
  id: number
  slug: string
  cover: string
  element: Element
  circle: number
  title: string
  subtitle: string
  stats: Stat[]
  description: string[]
  advanceds: Advanced[]
}
