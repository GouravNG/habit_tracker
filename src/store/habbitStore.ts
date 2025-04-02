import { configureStore } from "@reduxjs/toolkit"
import toggleSlices from "./toggleSlice"
import authSlices from "./authSlice"

const habbitStore = configureStore({
  reducer: {
    toggles: toggleSlices,
    auth: authSlices,
  },
})
export default habbitStore

export type TRootState = ReturnType<typeof habbitStore.getState>
export type TAppDispatch = typeof habbitStore.dispatch
