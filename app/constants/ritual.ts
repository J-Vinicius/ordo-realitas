import type { Ritual } from "~/types/ritual"

export const actions = ["Padrão", "Completa", "Livre"]
export const areas = ["Círculo", "Cone", "Cubo"]
export const durations = ["Instantânea", "Cena", "Sustentada"]
export const elements = ["Sangue", "Morte", "Conhecimento", "Energia"]
export const ranges = ["Toque", "Curto", "Médio", "Longo"]
export const resistances = ["Anula", "Desacredita", "Parcial", "Reduz à Metade"]

export const stats: {
  title: string
  list: string[]
  info: string
  key: keyof Pick<
    Ritual,
    "execution" | "range" | "area" | "duration" | "resistance"
  >
}[] = [
  {
    title: "Execução",
    list: actions,
    info: "A ação necessária para lançar o ritual. Para rituais com execução de ação livre, apenas um pode ser lançado por rodada.",
    key: "execution",
  },
  {
    title: "Alcance",
    list: ranges,
    info: "A distância máxima a partir do conjurador que o ritual alcança.",
    key: "range",
  },
  {
    title: "Área",
    list: areas,
    info: "O ritual afeta uma área. Você decide um ponto que possa perceber a partir do qual o ritual tem início.",
    key: "area",
  },
  {
    title: "Duração",
    list: durations,
    info: "A duração indica por quanto tempo o ritual mantém seu efeito.",
    key: "duration",
  },
  {
    title: "Resistência",
    list: resistances,
    info: "A maioria dos rituais prejudiciais permite que seus alvos façam um teste de resistência.",
    key: "resistance",
  },
]
