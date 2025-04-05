import { AxiosError } from "axios"
import { TCreateNote, TGetNote } from "../api.modal"
import { apiInstance } from "../axios"
import { url_notes, url_notes_GET } from "../api"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useCreateEntries } from "./entry.hooks"
import { useTypedSelector } from "../../store/hooks"
import { useDispatch } from "react-redux"
import { setNoteid } from "../../store/primarySlice"

const createNote = async (payload: TCreateNote) => {
  try {
    const res = await apiInstance.post(url_notes(), payload)
    console.log(res.data)
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
  const habbitid = useTypedSelector((state) => state.primary.habbitId)
  const dispatch = useDispatch()
  return useMutation({
    mutationKey: ["notes"],
    mutationFn: createNote,
    onSuccess: (response: TGetNote[]) => {
      dispatch(setNoteid(response[0].id))
      createEntry.mutate({
        habit_id: habbitid!,
        status: "DONE",
        note_id: response[0].id,
      })
    },
    onError: () => console.log("Some error in creating the Note"),
  })
}
