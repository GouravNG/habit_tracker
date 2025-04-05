const baseURL: string = import.meta.env.VITE_API_DOMAIN

export const url_signup = () => "/auth/v1/signup"
export const url_login = () => "/auth/v1/token?grant_type=password"
export const url_habit = () => "/rest/v1/habits"
export const url_entry = () => "rest/v1/entries"
export const url_notes = () => "rest/v1/notes"
export const url_notes_GET = () => `rest/v1/notes`

export default baseURL
