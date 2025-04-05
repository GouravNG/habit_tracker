import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  isNewHabit: false,
  isNewEntry: false,
  isViewAllNotes: false,
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
  },
})

export default toggleSlice.reducer
export const { toggleNewEntry, toggleNewHabit, toggleViewAllNotes } =
  toggleSlice.actions
