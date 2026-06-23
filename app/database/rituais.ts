import type { Ritual } from "~/types/ritual"

export const rituais: Ritual[] = [
  {
    slug: "alterar-memoria",
    name: "Alterar Memória",
    element: "Conhecimento",
    reference:
      "https://static.wikia.nocookie.net/ordemparanormal/images/8/8e/S%C3%ADmbolo_Alterar_Mem%C3%B3ria.png/revision/latest/scale-to-width-down/1000?cb=20221020231851&path-prefix=pt-br",
    circle: 3,
    execution: "Padrão",
    range: "Toque",
    area: "",
    target: "1 Pessoa",
    duration: "Instantânea",
    resistance: "Vontade Anula",
    skill_resistence: "",
    description:
      "Você invade a mente do alvo e altera ou apaga suas memórias de até uma hora atrás. Se escolher alterar as memórias, você pode mudar detalhes de eventos recentes, como a identidade de alguém encontrado ou o endereço de um lugar visitado, mas não reescrever completamente esses eventos. O alvo recupera suas memórias após 1d4 dias.",
    verdadeira: {
      description:
        "Você pode alterar ou apagar memórias de até 24 horas atrás.",
      preReq: "Requer 4º círculo.",
      custoPE: 4,
    },
    fonte: "",
  },
  {
    slug: "descarnar",
    name: "Descarnar",
    element: "Sangue",
    reference:
      "https://static.wikia.nocookie.net/ordemparanormal/images/2/25/S%C3%ADmbolo_Descarnar.png/revision/latest/scale-to-width-down/1000?cb=20211126134738&path-prefix=pt-br",
    circle: 2,
    execution: "Padrão",
    range: "Toque",
    area: "",
    target: "1 ser",
    duration: "Instantânea",
    resistance: "Fortitude Parcial",
    skill_resistence: "",
    description:
      "Este ritual cruel faz com que lacerações se manifestem na pele e órgãos do alvo, que sofre 6d8 pontos de dano (metade corte, metade Sangue) e fica com uma hemorragia severa. No início de cada turno dele, o alvo deve fazer um teste de Fortitude. Se falhar, sofre 2d8 pontos de dano de Sangue. Se passar nesse teste dois turnos seguidos, a hemorragia é estancada. Alvos que passem no teste de resistência inicial sofrem metade do dano e não ficam com hemorragia.",
    discente: {
      description:
        "Muda o dano direto para 10d8 e o dano da hemorragia para 4d8.",
      preReq: "Requer 3º círculo.",
      custoPE: 3,
    },
    verdadeira: {
      description:
        "Muda o alvo para você e a duração para sustentada. Enquanto o ritual durar, seus ataques corpo a corpo causam 4d8 pontos de dano de Sangue adicional e deixam o alvo com hemorragia automaticamente (como no efeito básico do ritual). O alvo ainda tem direito a um teste de Fortitude no início de seus turnos.",
      preReq: "Requer 3º círculo e Afinidade com Sangue.",
      custoPE: 7,
    },
    fonte: "",
  },
  {
    slug: "cicatrizacao",
    name: "Cicatrização",
    element: "Morte",
    reference:
      "https://static.wikia.nocookie.net/ordemparanormal/images/9/94/S%C3%ADmbolo_Cicatriza%C3%A7%C3%A3o.png/revision/latest/scale-to-width-down/1000?cb=20221029020038&path-prefix=pt-br",
    circle: 1,
    execution: "Padrão",
    range: "Toque",
    area: "1 ser",
    target: "",
    duration: "Instantânea",
    resistance: "",
    skill_resistence: "",
    description:
      "Você acelera o tempo ao redor das feridas do alvo, que cicatrizam instantaneamente. O alvo recupera 3d8+3 PV, mas envelhece 1 ano automaticamente.",
    discente: {
      description: "Aumenta a cura para 5d8+5 PV.",
      preReq: "Requer 2º círculo.",
      custoPE: 2,
    },
    verdadeira: {
      description:
        "Muda o alcance para “curto”, o alvo para “seres escolhidos” e aumenta a cura para 7d8+7 PV.",
      preReq: "Requer 4º círculo e Afinidade com Morte.",
      custoPE: 9,
    },
    fonte: "",
  },
]
