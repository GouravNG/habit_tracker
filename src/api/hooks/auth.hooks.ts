import { useMutation } from "@tanstack/react-query"

import { toggleAuth, updateUserInfo } from "../../store/authSlice"
import { useTypedDispatch } from "../../store/hooks"
import { signUpFn, loginFn } from "../functions/auth.fn"
import { TAuthResponse } from "../types/auth.types"
import { enableSnackBar } from "../../store/toggleSlice"

const handleSucess = (
  d: TAuthResponse,
  dispatch: ReturnType<typeof useTypedDispatch>
) => {
  dispatch(
    updateUserInfo({
      email: d.user.email,
      token: d.access_token,
      userId: d.user.id,
    })
  )
  dispatch(enableSnackBar("Authenticated Successfully"))
  localStorage.setItem("isAuthenticated", "1")
  localStorage.setItem("token", d.access_token)
  localStorage.setItem("userId", d.user.id)
  dispatch(toggleAuth())
}

export const useSignup = () => {
  const dispatch = useTypedDispatch()
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: signUpFn,
    onSuccess: (response: TAuthResponse) => handleSucess(response, dispatch),
    onError: (e) => dispatch(enableSnackBar(e.message)),
  })
}

export const useLogin = () => {
  const dispatch = useTypedDispatch()
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: loginFn,
    onSuccess: (response: TAuthResponse) => handleSucess(response, dispatch),
    onError: (e) => dispatch(enableSnackBar(e.message)),
  })
}
