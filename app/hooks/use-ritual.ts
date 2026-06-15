import { useLiveQuery } from "dexie-react-hooks"
import { db } from "~/lib/db"

export function useRituals() {
  return useLiveQuery(() => db.rituals.orderBy("name").toArray(), []) ?? []
}
