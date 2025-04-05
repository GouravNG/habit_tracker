import { useMutation, useQuery } from "@tanstack/react-query"
import { createEntries, getEntries } from "../functions/entry.fn"

export const useCreateEntries = () => {
  return useMutation({
    mutationFn: createEntries,
    onSuccess: () => console.log("Added new entry successfully"),
    onError: () => console.log("Unable to add new entry"),
  })
}

export const useGetEntries = () => {
  return useQuery({
    queryKey: ["entry"],
    queryFn: getEntries,
  })
}
