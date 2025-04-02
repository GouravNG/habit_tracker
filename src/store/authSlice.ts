import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TInitialStates = {
  isAuthenticated: boolean
  authContainer: 0 | 1
  userDetails: {
    token: string
    userId: string
    email: string
  } | null
}

const initialState: TInitialStates = {
  isAuthenticated: false,
  authContainer: 0,
  userDetails: null,
}

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuthenticated = !state.isAuthenticated
    },
    updateUserInfo: (
      state,
      action: PayloadAction<TInitialStates["userDetails"]>
    ) => {
      state.userDetails = action.payload
    },
  },
})

export default authSlice.reducer
export const { toggleAuth, updateUserInfo } = authSlice.actions
