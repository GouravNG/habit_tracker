import { configureStore } from "@reduxjs/toolkit"

import toggleSlices from "./toggleSlice"
import authSlices from "./authSlice"
import primarySlices from "./primarySlice"

const habit = configureStore({
  reducer: {
    toggles: toggleSlices,
    auth: authSlices,
    primary: primarySlices,
  },
})
export default habit

export type TRootState = ReturnType<typeof habit.getState>
export type TAppDispatch = typeof habit.dispatch
