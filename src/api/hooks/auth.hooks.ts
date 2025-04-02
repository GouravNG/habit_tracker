import { useMutation } from "@tanstack/react-query"
import { authInstance } from "../axios"
import { AxiosError } from "axios"
import { TSignUPLogIn } from "../api.modal"
import { url_login, url_signup } from "../api"
import { toggleAuth, updateUserInfo } from "../../store/authSlice"
import { useTypedDispatch } from "../../store/hooks"

const signUpFn = async (payload: TSignUPLogIn) => {
  try {
    const res = await authInstance.post(url_signup(), payload)
    return res.data
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data?.msg)
    } else if (e instanceof Error) {
      return e
    }
  }
}

const loginFn = async (payload: TSignUPLogIn) => {
  try {
    const res = await authInstance.post(url_login(), payload)
    return res.data
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data?.msg)
    } else if (e instanceof Error) {
      return e
    }
  }
}

const handleSucess = (d, dispatch) => {
  console.log(d)
  dispatch(toggleAuth())
  dispatch(
    updateUserInfo({
      email: d?.user?.email,
      token: d?.access_token,
      userId: d?.user?.id,
    })
  )
  localStorage.setItem("isAuthenticated", "1")
  localStorage.setItem("token", d?.access_token)
  localStorage.setItem("userId", d?.user?.id)
}

export const useSignup = () => {
  const dispatch = useTypedDispatch()
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: signUpFn,
    onSuccess: (d) => handleSucess(d, dispatch),
    onError: (e) => console.log(e.message),
  })
}

export const useLogin = () => {
  const dispatch = useTypedDispatch()
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: loginFn,
    onSuccess: (d) => handleSucess(d, dispatch),
    onError: (e) => console.log(e.message),
  })
}
