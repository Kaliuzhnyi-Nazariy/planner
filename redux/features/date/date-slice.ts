import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialDateState } from "./typesOrInterfaces";

const initialState = {
  date: "",
  isLoading: false,
  error: null,
} as IInitialDateState;

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate(state: IInitialDateState, action: PayloadAction<string>) {
      state.date = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;
