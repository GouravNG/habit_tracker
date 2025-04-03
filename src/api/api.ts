const baseURL: string = import.meta.env.VITE_API_DOMAIN

export const url_signup = () => "/auth/v1/signup"
export const url_login = () => "/auth/v1/token?grant_type=password"
export const url_habbit = () => "/rest/v1/habits"

export default baseURL
