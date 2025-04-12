import { configureStore } from "@reduxjs/toolkit"

import toggleSlices from "./toggleSlice"
import authSlices from "./authSlice"
import primarySlices from "./primarySlice"
import paginationSlice from "./paginationSlice"

const habit = configureStore({
  reducer: {
    toggles: toggleSlices,
    auth: authSlices,
    primary: primarySlices,
    pageSlice: paginationSlice,
  },
})
export default habit

export type TRootState = ReturnType<typeof habit.getState>
export type TAppDispatch = typeof habit.dispatch
