import { AxiosError } from "axios"

import { url_signup, url_login } from "../api"
import { authInstance } from "../axios"
import type { TAuthPayload } from "../types/auth.types"

export const signUpFn = async (payload: TAuthPayload) => {
  try {
    const res = await authInstance.post(url_signup(), payload)
    return res.data
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data?.msg)
    } else if (e instanceof Error) {
      throw e
    }
  }
}

export const loginFn = async (payload: TAuthPayload) => {
  try {
    const res = await authInstance.post(url_login(), payload)
    return res.data
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data?.msg)
    } else if (e instanceof Error) {
      throw e
    }
  }
}
