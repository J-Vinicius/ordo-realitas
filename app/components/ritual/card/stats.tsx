import { Hand, Move, Circle, Target, Hourglass, Shield } from "lucide-react"

import type { LucideIcon } from "lucide-react"
import type { Ritual } from "~/shared/types"

type StatType =
  | "execution"
  | "range"
  | "area"
  | "target"
  | "duration"
  | "resistance"

type Stat = {
  type: StatType
  text: string
}

const statIcons: Record<StatType, LucideIcon> = {
  execution: Hand,
  range: Move,
  area: Circle,
  target: Target,
  duration: Hourglass,
  resistance: Shield,
}

export function Stats({ ritual }: { ritual: Ritual }) {
  const stats = [
    {
      type: "execution",
      text: ritual.execution,
    },
    {
      type: "range",
      text: ritual.range,
    },
    {
      type: "area",
      text: ritual.area,
    },
    {
      type: "target",
      text: ritual.target,
    },
    {
      type: "duration",
      text: ritual.duration,
    },
    {
      type: "resistance",
      text: ritual.resistance,
    },
  ] satisfies Stat[]

  return (
    <ul className="flex flex-wrap place-content-center gap-10 md:justify-between">
      {stats.map((stat) => {
        if (!stat.text.trim()) return null

        const Icon = statIcons[stat.type]

        return (
          <li
            key={stat.type}
            className="flex flex-col items-center gap-1 text-center text-[14px]"
          >
            <Icon size={20} />
            {stat.text}
          </li>
        )
      })}
    </ul>
  )
}
