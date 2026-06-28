import type { Element } from "~/types/ritual"

export function elementsInfoFunction(element: Element) {
  return elementsInfo.find((e) => e.name === element)
}

type ElementInfo = {
  name: Element
  info: string
}

export const elementsInfo: readonly ElementInfo[] = [
  {
    name: "sangue",
    info: "A entidade do sentimento. Rituais de Sangue fortalecem o corpo, aprimoram os sentidos e manipulam as emoções.",
  },
  {
    name: "conhecimento",
    info: "A entidade da consciência. Rituais de Conhecimento afetam a mente e revelam ou escondem coisas (por exemplo, deixando uma pessoa invisível).",
  },
  {
    name: "morte",
    info: "A entidade da espiral do tempo. Rituais de Morte afetam a energia vital de seres e distorcem o tempo.",
  },
  {
    name: "energia",
    info: "A entidade do caos. Rituais de Energia podem gerar luz, eletricidade, fogo e frio, além de afetar probabilidades.",
  },
  {
    name: "medo",
    info: "O elemento mais misterioso do Outro Lado. Rituais de Medo afetam a própria relação do Outro Lado com a Realidade.",
  },
] as const
