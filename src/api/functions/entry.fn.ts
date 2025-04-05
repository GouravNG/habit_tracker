import { AxiosError } from "axios"

import { url_entry } from "../api"
import apiInstance from "../axios"
import { TCreateEntry } from "../types/entry.types"

export const createEntries = async (payload: TCreateEntry) => {
  try {
    const res = await apiInstance.post(url_entry(), payload)
    return res.data
  } catch (e) {
    if (e instanceof AxiosError) throw new Error(e.response?.data?.message)
    else throw e
  }
}

export const getEntries = async <T>() => {
  try {
    const res = await apiInstance.get<T>(url_entry())
    return res.data
  } catch (e) {
    if (e instanceof AxiosError) throw new Error(e.response?.data?.message)
    else throw e
  }
}
