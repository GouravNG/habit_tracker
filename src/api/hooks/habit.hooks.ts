import { AxiosError } from "axios"
import { url_habbit } from "../api"
import { TCreateHabbit } from "../api.modal"
import { apiInstance } from "../axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const createHabit = async (payload: TCreateHabbit) => {
  try {
    const data = await apiInstance.post(url_habbit(), payload)
    return data.data
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.cause?.message)
    }
  }
}

const getHabbit = async <T>() => {
  try {
    const data = await apiInstance.get<T>(url_habbit())
    return data.data
  } catch (e) {
    if (e instanceof AxiosError) throw new Error(e.cause?.message)
  }
}

export const useGetHabbits = <T>() => {
  return useQuery({
    queryKey: ["habbit"],
    queryFn: getHabbit<T>,
  })
}

const useCreateHabbit = () => {
  const QC = useQueryClient()
  return useMutation({
    mutationKey: ["habbit"],
    mutationFn: createHabit,
    onSuccess: () => QC.invalidateQueries({ queryKey: ["habbit"] }),
    onError: () => console.log("I fucked up!!"),
  })
}

export default useCreateHabbit
