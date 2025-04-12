import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TPagination {
  currentPage: number
  totalPage: number | null
  selectedHabbit: string | null
}

const initialState: TPagination = {
  currentPage: 1,
  totalPage: null,
  selectedHabbit: null,
}

const paginationSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    selectPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.totalPage = action.payload
    },
    setSelectedHabbit: (state, action: PayloadAction<string>) => {
      state.selectedHabbit = action.payload
    },
  },
})
export const { selectPage, setSelectedHabbit, setTotalPage } =
  paginationSlice.actions

export default paginationSlice.reducer
