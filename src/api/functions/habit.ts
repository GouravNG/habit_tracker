import { AxiosError } from "axios"
import { url_habit, url_getHabitInRange } from "../api"
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
    const end = new Date()
    const start = new Date(end.getDate() - 7)
    const data = await apiInstance.get<T>(
      url_getHabitInRange(start.toISOString(), end.toISOString())
    )
    return data.data
  } catch (e) {
    if (e instanceof AxiosError) throw new Error(e.cause?.message)
    else throw e
  }
}
