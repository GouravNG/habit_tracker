export type TSignUPLogIn = {
  email: string
  password: string
}

export type TCreateHabbit = {
  name: string
  user_id: string
}

export type THabbitResponse = {
  id: string
  user_id: string
  name: string
  description: string | null
}

export type TAuthResponse = {
  access_token: string
  user: {
    id: string
    email: string
  }
}
