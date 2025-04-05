import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { createHabit, getHabit } from "../functions/habit"

export const useGetHabbits = <T>() => {
  return useQuery({
    queryKey: ["habbit"],
    queryFn: getHabit<T>,
  })
}

const useCreateHabbit = () => {
  const QC = useQueryClient()
  return useMutation({
    mutationKey: ["habbit"],
    mutationFn: createHabit,
    onSuccess: () => QC.invalidateQueries({ queryKey: ["habbit"] }),
    onError: () => console.log("Something went wrong!!"),
  })
}

export default useCreateHabbit
