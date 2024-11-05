import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
  filter: string;
};

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter(state: InitialState, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { addFilter } = filterSlice.actions;
