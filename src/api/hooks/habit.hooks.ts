import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { createHabit, getHabit } from "../functions/habit"
import { useTypedDispatch } from "../../store/hooks"
import { enableSnackBar } from "../../store/toggleSlice"

export const useGetHabbits = <T>() => {
  return useQuery({
    queryKey: ["habbit"],
    queryFn: getHabit<T>,
  })
}

const useCreateHabbit = () => {
  const QC = useQueryClient()
  const dispatch = useTypedDispatch()
  return useMutation({
    mutationKey: ["habbit"],
    mutationFn: createHabit,
    onSuccess: () => {
      QC.invalidateQueries({ queryKey: ["habbit"] })
      dispatch(enableSnackBar("New habbit added successfully"))
    },
    onError: () => dispatch(enableSnackBar("Unable to add new habit.")),
  })
}

export default useCreateHabbit
