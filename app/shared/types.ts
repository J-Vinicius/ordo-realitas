type FormaAvancada = {
  description: string
  custoPE: number
  preReq: string
}

export interface Ritual {
  name: string
  reference: {
    title: string
    image: string
  }
  element: string
  circle: number
  execution: string
  range: string
  area: string
  duration: string
  resistance: string
  target: string
  description: string
  discente: FormaAvancada
  verdadeira: FormaAvancada
  fonte: string
}
