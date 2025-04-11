import axios, { AxiosError } from "axios"
import baseURL from "./api"

export const authInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_TOKEN,
  },
})

const apiInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_TOKEN,
    Prefer: "return=representation",
  },
})

apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token)
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config
})

apiInstance.interceptors.response.use(
  (_) => _,
  (e) => {
    if (e instanceof AxiosError) {
      const { response } = e
      if (
        response?.status === 401 &&
        response.data?.message === "JWT expired"
      ) {
        localStorage.removeItem("isAuthenticated")
      }
    }
  }
)

export default apiInstance
