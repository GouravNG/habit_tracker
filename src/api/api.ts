const baseURL: string =
  import.meta.env.VITE_API_DOMAIN ?? "https://projectid.supabase.co"

export const url_signup = () => "/auth/v1/signup"
export const url_login = () => "/auth/v1/token?grant_type=password"
export const url_habit = () => "/rest/v1/habits"
export const url_entry = () => "rest/v1/entries"
export const url_notes = () => "rest/v1/notes"
export const url_notes_GET = () => `rest/v1/notes`
export const url_getHabitInRange = (start: string, end: string) =>
  `/rest/v1/habits?select=*,entries:entries(status,created_at )entries.created_at=gte.${start}&entries.created_at=lte.${end}`

export default baseURL
