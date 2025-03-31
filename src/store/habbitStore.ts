import { configureStore } from "@reduxjs/toolkit"
import toggleSlices from "./toggleSlice"

const habbitStore = configureStore({
  reducer: {
    toggles: toggleSlices,
  },
})
export default habbitStore

export type TRootState = ReturnType<typeof habbitStore.getState>
export type TAppDispatch = typeof habbitStore.dispatch
