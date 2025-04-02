import axios from "axios"
import baseURL from "./api"

export const authInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_TOKEN,
  },
})
