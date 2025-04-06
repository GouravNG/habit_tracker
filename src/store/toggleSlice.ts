import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TinitialState = {
  isNewHabit: boolean
  isNewEntry: boolean
  isViewAllNotes: boolean
  isDone: "NOTDONE" | "DONE"
  isSnackBar: boolean
  snackBarContent: string
}
const initialState: TinitialState = {
  isNewHabit: false,
  isNewEntry: false,
  isViewAllNotes: false,
  isDone: "NOTDONE",
  isSnackBar: false,
  snackBarContent: "",
}

const toggleSlice = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    toggleNewHabit: (state) => {
      state.isNewHabit = !state.isNewHabit
    },
    toggleNewEntry: (state) => {
      state.isNewEntry = !state.isNewEntry
    },
    toggleViewAllNotes: (state) => {
      state.isViewAllNotes = !state.isViewAllNotes
    },
    enableSnackBar: (state, action: PayloadAction<string>) => {
      state.isSnackBar = !state.isSnackBar
      state.snackBarContent = action.payload
    },
    toggleSnackBar: (state) => {
      state.isSnackBar = !state.isSnackBar
    },
    toggleIsDone: (state) => {
      state.isDone = state.isDone === "DONE" ? "NOTDONE" : "DONE"
    },
  },
})

export default toggleSlice.reducer
export const {
  toggleNewEntry,
  toggleNewHabit,
  toggleViewAllNotes,
  enableSnackBar,
  toggleIsDone,
  toggleSnackBar,
} = toggleSlice.actions
