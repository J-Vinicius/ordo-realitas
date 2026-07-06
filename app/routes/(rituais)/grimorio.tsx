import { ChevronLeft, Edit, Pencil, Plus, Trash } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useDocumentTitle } from "usehooks-ts"
import { Header } from "~/components/header"
import { InputSearch } from "~/components/input-search"
import { Button } from "~/components/ui/button"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "~/components/ui/item"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"

import { useRituals } from "~/hooks/use-ritual"
import { elementsInfo, elementsInfoFunction } from "~/constants/elements"

import { deleteRitual } from "~/lib/db"
import { Tag } from "~/components/tag"
import type { Element } from "~/types/ritual"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

function elementInfo(elemento: string) {
  return elementsInfo.find((element) => element.name === elemento)
}

export default function Grimorio() {
  useDocumentTitle("Grimório")

  const navigate = useNavigate()

  const [search, setSearch] = useState("")
  const [element, setElement] = useState("all")
  const [circle, setCircle] = useState("all")

  const elementItems = [
    { label: "Todos os Elementos", value: "all" },
    { label: "Conhecimento", value: "Conhecimento" },
    { label: "Energia", value: "Energia" },
    { label: "Morte", value: "Morte" },
    { label: "Sangue", value: "Sangue" },
    { label: "Medo", value: "Medo" },
  ]

  const circleItems = [
    { label: "Todos os Círculos", value: "all" },
    { label: "1º Círculo", value: "1" },
    { label: "2º Círculo", value: "2" },
    { label: "3º Círculo", value: "3" },
    { label: "4º Círculo", value: "4" },
  ]

  const rituals = useRituals()

  const rituaisFiltrados = rituals.filter((ritual) => {
    const matchName = ritual.name.toLowerCase().includes(search.toLowerCase())

    const matchElement = element === "all" || ritual.element === element

    const matchCircle = circle === "all" || ritual.circle === Number(circle)

    return matchName && matchElement && matchCircle
  })

  return (
    <main className="flex flex-col">
      <Header className="flex-col sm:flex-row">
        <div className="flex w-full grow items-center gap-2">
          <Button
            size="icon-lg"
            variant="outline"
            onClick={() => navigate("/ordo-realitas")}
          >
            <ChevronLeft />
          </Button>
          <InputSearch
            className="flex-1"
            placeholder="Nome do ritual"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex w-full flex-row items-center gap-2 *:flex-1 sm:w-fit *:sm:flex-none">
          <Select value={element} onValueChange={setElement}>
            <SelectTrigger>
              <SelectValue placeholder="Elemento" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {elementItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={circle} onValueChange={setCircle}>
            <SelectTrigger>
              <SelectValue placeholder="Círculo" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {circleItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </Header>
      <ul className="mb-4 grid grid-cols-1 items-stretch gap-2 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {rituaisFiltrados.map((ritual) => (
          <Link to={`/grimorio/${ritual.slug}`} key={ritual.name}>
            <Item
              variant="muted"
              className="group relative cursor-pointer hover:bg-muted"
            >
              <ItemMedia
                variant="image"
                className="aspect-square size-24 sm:size-full"
              >
                <img
                  src={ritual.reference}
                  alt="cover"
                  className="aspect-square"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-base font-semibold">
                  {ritual.name}
                </ItemTitle>
                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Tag
                        variant={ritual.element.toLocaleLowerCase() as Element}
                      >
                        <img
                          src={`/assets/elementos/${ritual.element}.png`}
                          alt={ritual.element}
                          className="aspect-square size-2.5"
                        />
                        {ritual.element}
                      </Tag>
                    </TooltipTrigger>
                    <TooltipContent>
                      {
                        elementsInfoFunction(
                          ritual.element.toLocaleLowerCase() as Element
                        )?.info
                      }
                    </TooltipContent>
                  </Tooltip>
                  <small>{ritual.circle}º Círculo</small>
                </div>
                <ItemDescription className="line-clamp-2 min-h-10">
                  {ritual.description}
                </ItemDescription>
              </ItemContent>

              <div className="absolute top-2 right-2 z-20 opacity-0 transition-opacity group-hover:opacity-100">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault() // Prevent navigation to detail page
                    navigate(`/grimorio/novo?slug=${ritual.slug}`) // Assuming ritual.id exists and is used for editing
                  }}
                >
                  <Edit className="size-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteRitual(ritual.slug)}
                >
                  <Trash className="size-4" />
                </Button>
              </div>
            </Item>
          </Link>
        ))}
      </ul>
      <Button
        className="absolute right-4 bottom-4"
        size="icon-lg"
        onClick={() => navigate("/grimorio/novo")}
      >
        <Plus />
      </Button>
    </main>
  )
}
