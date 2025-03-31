import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isNewHabbit: false,
  isNewEntry: false,
  isViewAllNotes: false,
}

const toggleSlice = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    toggleNewHabbit: (state) => {
      state.isNewHabbit = !state.isNewHabbit
    },
    toggleNewEntry: (state) => {
      state.isNewEntry = !state.isNewEntry
    },
    toggleViewAllNotes: (state) => {
      state.isViewAllNotes = !state.isViewAllNotes
    },
  },
})

export default toggleSlice.reducer
export const { toggleNewEntry, toggleNewHabbit, toggleViewAllNotes } =
  toggleSlice.actions
