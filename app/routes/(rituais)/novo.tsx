"use client"

import { useState } from "react"

import { ArrowLeft, BrushCleaning, Check, Minus, Plus } from "lucide-react"
import { toast } from "sonner"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { useNavigate } from "react-router"
import { useDocumentTitle } from "usehooks-ts"
import {
  actions,
  areas,
  durations,
  elements,
  ranges,
  resistances,
} from "~/constants/ritual"
import { createRitual } from "~/lib/db"
import type { FormaAvancada, Ritual } from "~/shared/types"
import { createSlug } from "~/lib/utils"

const stats: {
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

// ------- Componente auxiliar Item -------
interface ItemProps {
  label: string
  children: React.ReactNode
  className?: string
}

function Item({ label, children, className }: ItemProps) {
  return (
    <div className={`flex w-full flex-col gap-1 ${className ?? ""}`}>
      <Label>{label}</Label>
      {children}
    </div>
  )
}

// ------- NumberField simples (substitua pelo shadcn NumberField se disponível) -------
interface NumberFieldProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

function NumberField({ value, onChange, min = 0, max = 99 }: NumberFieldProps) {
  return (
    <div className="flex w-full items-center justify-between border">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus />
      </Button>
      <span className="min-w-10 px-4 py-1 text-center text-sm">{value}</span>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus />
      </Button>
    </div>
  )
}

// ------- Formulário principal -------
const initialCard: Ritual = {
  slug: "",
  name: "",
  element: "Sangue",
  reference: "",
  circle: 1,
  execution: "",
  range: "",
  area: "",
  duration: "",
  resistance: "",
  skill_resistence: "",
  target: "",
  description: "",
  fonte: "",
}

export default function NewCardForm() {
  const navigate = useNavigate()
  const [card, setCard] = useState<Ritual>({ ...initialCard })

  const title = card.name || "Novo Ritual"

  useDocumentTitle(title)

  function setField<K extends keyof Ritual>(key: K, value: Ritual[K]) {
    setCard((prev) => ({ ...prev, [key]: value }))
  }

  function setNestedField<K extends "discente" | "verdadeira">(
    parent: K,
    key: keyof FormaAvancada,
    value: FormaAvancada[keyof FormaAvancada]
  ) {
    setCard((prev) => ({
      ...prev,
      [parent]: {
        ...(prev[parent] ?? {
          description: "",
          custoPE: parent === "discente" ? 3 : 5,
          preReq: "",
        }),
        [key]: value,
      },
    }))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    createRitual({
      ...card,
      slug: createSlug(card.name),
    })
    toast("Ritual Salvo!", {
      description: `Ritual: ${card.name} de ${card.circle}ª Círculo do Elemento ${card.element}`,
    })
    navigate("/grimorio")
  }

  function resetCard() {
    setCard({ ...initialCard })
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-[90%]">
        <h2 className="mb-4 text-xl font-bold">Novo Ritual</h2>

        <form
          className="space-y-4 *:space-y-4 sm:*:space-y-0"
          onSubmit={onSubmit}
        >
          {/* Nome / Círculo / Elemento */}
          <div className="flex-row justify-between gap-4 sm:flex">
            <Item label="Imagem do Ritual">
              <Input
                placeholder="Imagem do Ritual"
                value={card.reference}
                onChange={(e) => setField("reference", e.target.value)}
              />
            </Item>
            <Item label="Nome do Ritual">
              <Input
                placeholder="Ritual"
                value={card.name}
                onChange={(e) => setField("name", e.target.value)}
              />
            </Item>

            <Item label="Círculo">
              <NumberField
                value={card.circle}
                onChange={(v) => setField("circle", v)}
                min={1}
                max={4}
              />
            </Item>

            <Item label="Elemento">
              <Select
                value={card.element}
                onValueChange={(v: any) => setField("element", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o elemento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {elements.map((el) => (
                      <SelectItem key={el} value={el}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Item>
          </div>

          {/* Stats (Execução, Alcance, Área, Duração, Resistência) + Alvo */}
          <ul className="gap-2 sm:grid sm:grid-cols-3 md:grid-cols-6">
            {stats.map((stat) => (
              <Item key={stat.title} label={stat.title} className="w-full">
                <Select
                  value={card[stat.key]}
                  onValueChange={(v: any) => setField(stat.key, v)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={stat.title} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {stat.list.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Item>
            ))}

            <Item label="Perícia Resistência">
              <Input
                placeholder="Perícia Resistência"
                value={card.skill_resistence}
                onChange={(e) => setField("skill_resistence", e.target.value)}
              />
            </Item>

            <Item label="Alvo">
              <Input
                placeholder="Alvo"
                value={card.target}
                onChange={(e) => setField("target", e.target.value)}
              />
            </Item>
          </ul>

          {/* Descrição */}
          <Item label="Descrição">
            <Textarea
              placeholder="Descrição do que o ritual faz"
              value={card.description}
              onChange={(e) => setField("description", e.target.value)}
            />
          </Item>

          {/* Discente / Verdadeira */}
          <div className="gap-2 sm:flex">
            {(["discente", "verdadeira"] as const).map((form) => (
              <Item
                key={form}
                label={form === "discente" ? "Discente" : "Verdadeira"}
                className="flex-1"
              >
                <Textarea
                  placeholder={`Descrição de Forma ${form === "discente" ? "Discente" : "Verdadeira"}`}
                  value={card[form]?.description ?? ""}
                  onChange={(e) =>
                    setNestedField(form, "description", e.target.value)
                  }
                />
                <Label className="mt-2">Custo de PE adicional</Label>
                <NumberField
                  value={card[form]?.custoPE ?? 0}
                  onChange={(v) => setNestedField(form, "custoPE", v)}
                  min={1}
                  max={16}
                />
                <Label className="mt-2">Pré-Requisito</Label>
                <Input
                  placeholder="Xª Círculo e Afinidade"
                  value={card[form]?.preReq ?? ""}
                  onChange={(e) =>
                    setNestedField(form, "preReq", e.target.value)
                  }
                />
              </Item>
            ))}
          </div>

          {/* Fonte */}
          <Item label="Fonte">
            <Input
              placeholder="Fonte: Livro de Regras, Homebrew, etc"
              value={card.fonte}
              onChange={(e) => setField("fonte", e.target.value)}
            />
          </Item>

          {/* Botões */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/grimorio")}
            >
              <ArrowLeft />
              Voltar
            </Button>

            <Button type="button" variant="destructive" onClick={resetCard}>
              <BrushCleaning />
              Limpar
            </Button>

            <Button type="submit">
              <Check />
              Confirmar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
