import type { Advanced, Ritual } from "~/shared/types"
import { Stats } from "./stats"

export function Ritual(ritual: Ritual) {
  return (
    <div className="flex h-full flex-col gap-8 p-2 md:flex-row">
      <div className="flex h-full basis-1/2 items-center justify-center">
        <img src={ritual.cover} alt={ritual.title} className="w-md" />
      </div>

      <aside className="no-scrollbar flex basis-1/2 flex-col gap-8 text-center md:-m-4 md:ml-0 md:max-h-svh md:overflow-scroll md:border-l md:bg-sidebar md:p-6 md:text-left">
        <header className="flex flex-col items-center md:flex-row md:gap-4">
          <img
            src={`/assets/elementos/${ritual.element}.png`}
            alt={ritual.element}
            className="size-12"
          />
          <div>
            <h1 className="text-xl font-bold">{ritual.title}</h1>
            <small className="text-muted-foreground">{ritual.subtitle}</small>
          </div>
        </header>

        <Stats stats={ritual.stats} />

        {ritual.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        <Advanceds advanceds={ritual.advanceds} />
      </aside>
    </div>
  )
}

function Advanceds({ advanceds }: { advanceds: Advanced[] }) {
  return (
    <ul className="space-y-4 text-left">
      {advanceds.map((advanced) => (
        <li
          key={advanced.title}
          className="flex items-center justify-between gap-4"
        >
          <header>
            <h2 className="text-lg font-semibold">{advanced.title}</h2>

            <p>{advanced.description}</p>

            <small className="text-muted-foreground">
              {advanced.requirement}
            </small>
          </header>

          <span className="text-lg font-medium whitespace-nowrap">
            +{advanced.cost} PE
          </span>
        </li>
      ))}
    </ul>
  )
}
