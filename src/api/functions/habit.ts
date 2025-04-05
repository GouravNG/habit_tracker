import { AxiosError } from "axios"
import { url_habit } from "../api"
import apiInstance from "../axios"
import type { TCreateHabit } from "../types/habits.types"

export const createHabit = async (payload: TCreateHabit) => {
  try {
    const data = await apiInstance.post(url_habit(), payload)
    return data.data
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.cause?.message)
    } else throw e
  }
}

export const getHabit = async <T>() => {
  try {
    const data = await apiInstance.get<T>(url_habit())
    return data.data
  } catch (e) {
    if (e instanceof AxiosError) throw new Error(e.cause?.message)
    else throw e
  }
}
