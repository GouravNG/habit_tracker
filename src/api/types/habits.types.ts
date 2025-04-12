export type TCreateHabit = {
  name: string
  user_id: string
  description?: string
}

export type TGetHabit = {
  id: string
  user_id: string
  name: string
  description: string | null
}

export type TEntry = {
  status: "DONE" | "NOTDONE"
  created_at: string
}

export type THabit = {
  id: string
  user_id: string
  name: string
  description: string | null
  created_at: string
  updated_at: string
  entries: TEntry[]
}

export type THabitsResponse = THabit[]
