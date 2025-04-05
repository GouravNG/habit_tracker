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
