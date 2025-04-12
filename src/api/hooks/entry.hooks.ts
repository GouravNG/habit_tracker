import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createEntries, getEntries } from "../functions/entry.fn"
import { useTypedDispatch } from "../../store/hooks"
import { enableSnackBar, toggleNewEntry } from "../../store/toggleSlice"

export const useCreateEntries = () => {
  const dispatch = useTypedDispatch()
  const QC = useQueryClient()
  return useMutation({
    mutationFn: createEntries,
    onSuccess: () => {
      dispatch(enableSnackBar("Entry added successfully"))
      dispatch(toggleNewEntry())
      setTimeout(() => {
        QC.invalidateQueries({ queryKey: ["habbit"] })
      }, 500)
    },
    onError: () => dispatch(enableSnackBar("Unable to add new entry.")),
  })
}

export const useGetEntries = () => {
  return useQuery({
    queryKey: ["entry"],
    queryFn: getEntries,
  })
}
