import { AxiosError } from "axios"
import { TCreateNote, TGetNote } from "../types/notes.types"

import { url_notes, url_notes_GET } from "../api"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useCreateEntries } from "./entry.hooks"
import { useTypedSelector } from "../../store/hooks"
import { useDispatch } from "react-redux"
import { setNoteid } from "../../store/primarySlice"
import apiInstance from "../axios"
import { enableSnackBar } from "../../store/toggleSlice"

const createNote = async (payload: TCreateNote) => {
  try {
    const res = await apiInstance.post(url_notes(), payload)
    return res.data
  } catch (e) {
    if (e instanceof AxiosError) throw new Error(e.response?.data?.message)
    else return e
  }
}

const getNotes = async <T>() => {
  try {
    const res = await apiInstance.get<T>(url_notes_GET())
    return res.data
  } catch (e) {
    if (e instanceof AxiosError) throw new Error(e.response?.data?.message)
    else throw e
  }
}
export const useGetNotes = <T>() => {
  return useQuery({
    queryKey: ["note"],
    queryFn: getNotes<T>,
  })
}

export const useCreateNote = () => {
  const createEntry = useCreateEntries()
  const habbitid = useTypedSelector((state) => state.primary.habitId)
  const status = useTypedSelector((state) => state.toggles.isDone)
  const dispatch = useDispatch()
  return useMutation({
    mutationKey: ["notes"],
    mutationFn: createNote,
    onSuccess: (response: TGetNote[]) => {
      dispatch(setNoteid(response[0].id))
      dispatch(enableSnackBar("New note added successfully"))
      createEntry.mutate({
        habit_id: habbitid!,
        status: status,
        note_id: response[0].id,
      })
    },
    onError: () => dispatch(enableSnackBar("Unable to add new note.")),
  })
}
