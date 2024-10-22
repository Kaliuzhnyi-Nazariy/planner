import { register, regUser } from "./auth-operations";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IValue {
  isAuth: boolean;
  token: string;
  username: String;
  email: String;
}

type initialStateType = {
  value: IValue;
  isLoading: boolean;
  error: null | string;
};

const initialState = {
  value: {
    isAuth: false,
    token: "",
    username: "",
    email: "",
  } as IValue,
  isLoading: false,
  error: null,
} as initialStateType;

const handlePending = (state: initialStateType) => {
  state.isLoading = true;
  state.error = null;
};

const handleReject = (
  state: initialStateType,
  action: PayloadAction<initialStateType>
) => {
  state.isLoading = false;
  state.error = action.payload?.error;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(register.pending, handlePending)
      .addCase(
        register.fulfilled,
        (state: initialStateType, action: PayloadAction<regUser>) => {
          console.log(action.payload);
          state.value.username = action.payload.username;
          state.value.email = action.payload.email;
        }
      )
      .addCase(register.rejected, handleReject);
  },
});

export const authReducer = authSlice.reducer;
