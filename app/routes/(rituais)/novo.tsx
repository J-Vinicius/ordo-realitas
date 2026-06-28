"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useNavigate, useParams, useSearchParams } from "react-router" // Importado useSearchParams
import { useDocumentTitle } from "usehooks-ts"

import { createRitual, getRitual, updateRitual } from "~/lib/db"
import { createSlug } from "~/lib/utils"
import type { FormaAvancada, Ritual } from "~/types/ritual"

import { RitualForm } from "~/components/ritual/form/form"
import { RitualBasicFields } from "~/components/ritual/form/basic-fields"
import { RitualStatsFields } from "~/components/ritual/form/stats-fields"
import { RitualAdvancedFields } from "~/components/ritual/form/advanced-fields"
import { RitualActions } from "~/components/ritual/form/actions"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import { Input } from "~/components/ui/input"
import { Field } from "~/components/ui/field"
import { RitualCard } from "~/components/ritual/card"

const initialCard: Ritual = {
  slug: "",
  name: "",
  element: "sangue",
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

export default function CreateEditRitualForm() {
  const navigate = useNavigate()
  const { slug: routeSlug } = useParams()
  const [searchParams] = useSearchParams()

  // Pega o slug ou da rota ou do parâmetro de busca ?slug=...
  const targetSlug = routeSlug || searchParams.get("slug")

  const [card, setCard] = useState<Ritual>(initialCard)

  useEffect(() => {
    async function load() {
      if (!targetSlug) {
        setCard(initialCard)
        return
      }

      if (routeSlug === "novo" && !searchParams.get("slug")) {
        setCard(initialCard)
        return
      }

      const ritual = await getRitual(targetSlug)

      console.log("slug:", targetSlug)
      console.log("ritual:", ritual)

      if (ritual) {
        // Garantimos que todos os campos existam para evitar inputs descontrolados
        setCard({
          ...initialCard,
          ...ritual,
          discente: ritual.discente || initialCard.discente,
          verdadeira: ritual.verdadeira || initialCard.verdadeira,
        })
      }
    }

    load()
  }, [targetSlug, routeSlug, searchParams])

  const title = card.name || "Novo Ritual"

  useDocumentTitle(
    targetSlug && targetSlug !== "novo" ? "Editar Ritual" : "Novo Ritual"
  )

  function setField<K extends keyof Ritual>(key: K, value: Ritual[K]) {
    setCard((prev) => ({ ...prev, [key]: value }))
  }

  function setNestedField(
    parent: "discente" | "verdadeira",
    key: keyof FormaAvancada,
    value: string | number
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

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    const currentSlug =
      targetSlug && targetSlug !== "novo" ? targetSlug : createSlug(card.name)

    if (targetSlug && targetSlug !== "novo") {
      await updateRitual(targetSlug, {
        ...card,
        slug: currentSlug,
      })
      toast("Ritual Atualizado!", {
        description: `Ritual: ${card.name} de ${card.circle}ª Círculo do Elemento ${card.element}`,
      })
    } else {
      await createRitual({
        ...card,
        slug: currentSlug,
      })
      toast("Ritual Salvo!", {
        description: `Ritual: ${card.name} de ${card.circle}ª Círculo do Elemento ${card.element}`,
      })
    }
    navigate("/grimorio")
  }

  function resetCard() {
    setCard({ ...initialCard })
  }

  return (
    <div className="flex">
      <div className="m-4 hidden basis-1/2 sm:block">
        <RitualCard ritual={card} isMobile />
      </div>

      <aside className="flex-1 basis-1/2 bg-sidebar p-4">
        <h2 className="mb-4 text-xl font-bold">
          {targetSlug && targetSlug !== "novo"
            ? "Editar Ritual"
            : "Novo Ritual"}
        </h2>
        <RitualForm onSubmit={onSubmit}>
          <RitualBasicFields card={card} setField={setField} />
          <Field>
            <Label>Descrição</Label>
            <Textarea
              className="h-full resize-none"
              placeholder="Descrição do que o ritual faz"
              value={card.description}
              onChange={(e) => setField("description", e.target.value)}
            />
          </Field>
          <RitualStatsFields card={card} setField={setField} />
          <RitualAdvancedFields card={card} setNestedField={setNestedField} />

          <div className="space-y-4">
            <Field>
              <Label>Fonte</Label>
              <Input
                placeholder="Fonte: Livro de Regras, Homebrew, etc"
                value={card.fonte}
                onChange={(e) => setField("fonte", e.target.value)}
              />
            </Field>
          </div>

          <RitualActions
            onBack={() => navigate("/grimorio")}
            onReset={resetCard}
          />
        </RitualForm>
      </aside>
    </div>
  )
}
