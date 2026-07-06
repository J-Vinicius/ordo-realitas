import type { Element, FormaAvancada, Ritual } from "~/types/ritual"
import { Stats } from "./stats"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import { Tag } from "~/components/tag"
import { elementsInfoFunction } from "~/constants/elements"

const style = {
  card: {
    mobile: "flex flex-col p-2",
    desktop: "flex min-h-screen",
  },
  image: {
    mobile: "flex items-center justify-center",
    desktop: "flex items-center justify-center basis-1/2",
  },
  imageContent: {
    mobile: "w-md",
    desktop: "w-md",
  },
  aside: {
    mobile: "p-4 text-center space-y-6",
    desktop:
      "basis-1/2 bg-sidebar p-4 text-left max-h-svh no-scrollbar space-y-6 overflow-scroll",
  },
  header: {
    mobile: "flex flex-col gap-2",
    desktop: "space-y-2",
  },
}

type RitualCardProps = {
  ritual: Ritual
  isMobile: boolean
}

export function RitualCard({ ritual, isMobile }: RitualCardProps) {
  const mode = isMobile ? "mobile" : "desktop"
  return (
    <div className={style.card[mode]}>
      <div className={style.image[mode]}>
        <img
          src={ritual.reference}
          alt={ritual.name}
          className={style.imageContent[mode]}
        />
      </div>

      <aside className={style.aside[mode]}>
        <header className={style.header[mode]}>
          <div>
            <h1 className="text-xl font-bold">{ritual.name}</h1>
          </div>
          <div className="flex w-full flex-col place-items-center gap-2 sm:flex-row">
            <small>{ritual.circle}º Círculo</small>
            <Tooltip>
              <TooltipTrigger asChild>
                <Tag variant={ritual.element.toLocaleLowerCase() as Element}>
                  <img
                    src={`/assets/elementos/${ritual.element}.png`}
                    alt={ritual.element}
                    className="aspect-square size-2.5"
                  />
                  {ritual.element}
                </Tag>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {
                  elementsInfoFunction(
                    ritual.element.toLocaleLowerCase() as Element
                  )?.info
                }
              </TooltipContent>
            </Tooltip>
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

        <small className="font-light text-muted-foreground">
          {ritual.fonte}
        </small>
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
