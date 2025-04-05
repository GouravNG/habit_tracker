export type TAuthPayload = {
  email: string
  password: string
}

export type TAuthResponse = {
  access_token: string
  user: {
    id: string
    email: string
  }
}
