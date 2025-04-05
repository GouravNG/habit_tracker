import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TInitialState = {
  habitId: string
  entryId: string
  noteId: string
}

const initialState: TInitialState = {
  habitId: "",
  entryId: "",
  noteId: "",
}

const primarySlice = createSlice({
  name: "primary",
  initialState,
  reducers: {
    setHabitId: (state, action: PayloadAction<string>) => {
      state.habitId = action.payload
    },
    setEntryId: (state, action: PayloadAction<string>) => {
      state.entryId = action.payload
    },
    setNoteid: (state, action: PayloadAction<string>) => {
      state.noteId = action.payload
    },
  },
})

export default primarySlice.reducer
export const { setEntryId, setHabitId, setNoteid } = primarySlice.actions
