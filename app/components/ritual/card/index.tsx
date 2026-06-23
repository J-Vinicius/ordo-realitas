import type { FormaAvancada, Ritual } from "~/types/ritual"
import { Stats } from "./stats"

export function RitualCard(ritual: Ritual) {
  return (
    <div className="flex h-full flex-col gap-8 p-2 md:flex-row">
      <div className="flex h-full basis-1/2 items-center justify-center">
        <img src={ritual.reference} alt={ritual.name} className="w-md" />
      </div>

      <aside className="no-scrollbar flex basis-1/2 flex-col gap-8 text-center md:-m-4 md:ml-0 md:max-h-svh md:overflow-scroll md:border-l md:bg-sidebar md:p-6 md:text-left">
        <header className="flex flex-col items-center md:flex-row md:gap-4">
          <img
            src={`/assets/elementos/${ritual.element}.png`}
            alt={ritual.element}
            className="size-12"
          />
          <div>
            <h1 className="text-xl font-bold">{ritual.name}</h1>
          </div>
        </header>

        <Stats ritual={ritual} />
        <p>{ritual.description}</p>

        {ritual.discente?.description && (
          <Advanceds title="Discente" formAvancada={ritual.discente} />
        )}

        {ritual.verdadeira?.description && (
          <Advanceds title="Verdadeira" formAvancada={ritual.verdadeira} />
        )}
      </aside>
    </div>
  )
}

function Advanceds({
  formAvancada,
  title,
}: {
  formAvancada: FormaAvancada
  title: string
}) {
  return (
    <ul className="space-y-4 text-left">
      <li key={title} className="flex items-center justify-between gap-4">
        <header>
          <h2 className="text-lg font-semibold">{title}</h2>

          <p>{formAvancada.description}</p>

          <small className="text-muted-foreground">{formAvancada.preReq}</small>
        </header>

        <span className="text-lg font-medium whitespace-nowrap">
          +{formAvancada.custoPE} PE
        </span>
      </li>
    </ul>
  )
}
