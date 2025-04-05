type status = "DONE" | "NOTDONE"

export type TCreateEntry = {
  habit_id: string
  note_id: string
  status: status
}

export type TEntryResponse = {
  id: string
  habit_id: string
  status: status
}

export type TGetEntries = {
  id: string
  habit_id: string
  status: status
  note_id: string
  note: {
    description: string
  }
}
