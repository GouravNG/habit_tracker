import { useMutation, useQuery } from "@tanstack/react-query"
import { createEntries, getEntries } from "../functions/entry.fn"
import { useTypedDispatch } from "../../store/hooks"
import { enableSnackBar, toggleNewEntry } from "../../store/toggleSlice"

export const useCreateEntries = () => {
  const dispatch = useTypedDispatch()
  return useMutation({
    mutationFn: createEntries,
    onSuccess: () => {
      dispatch(enableSnackBar("Entry added successfully"))
      dispatch(toggleNewEntry())
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
