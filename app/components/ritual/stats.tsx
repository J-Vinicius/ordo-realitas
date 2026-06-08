import { Hand, Move, Circle, Target, Hourglass, Shield } from "lucide-react"

import type { LucideIcon } from "lucide-react"
import type { Stat, StatType } from "~/shared/types"

const statIcons: Record<StatType, LucideIcon> = {
  execucao: Hand,
  alcance: Move,
  area: Circle,
  alvo: Target,
  duracao: Hourglass,
  resistencia: Shield,
}

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <ul
      className={`flex flex-row flex-wrap place-content-center gap-10 md:justify-between`}
    >
      {stats.map((stat) => {
        if (!stat.text.trim()) return null

        const Icon = statIcons[stat.type]

        return (
          <li
            key={stat.type}
            className="flex flex-col items-center justify-items-center gap-1 text-center text-[14px]"
          >
            <Icon size={20} />
            {stat.text}
          </li>
        )
      })}
    </ul>
  )
}
