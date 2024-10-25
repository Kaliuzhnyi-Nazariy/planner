import {
  deleteAccount,
  login,
  logout,
  register,
  resetPassword,
  resetPasswordReq,
  updateAcc,
} from "./auth-operations";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { regUser, UpdatedUser, User } from "./typesOrInterfaces";

interface IValue {
  isAuth: boolean;
  token: String;
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
  console.log(action);
  state.error = action?.payload?.error;
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
          state.isLoading = false;
        }
      )
      .addCase(register.rejected, handleReject)
      .addCase(login.pending, handlePending)
      .addCase(
        login.fulfilled,
        (state: initialStateType, action: PayloadAction<User>) => {
          state.value.isAuth = true;
          state.value.email = action.payload.email;
          state.value.username = action.payload.username;
          state.value.token = action.payload.token;
          state.isLoading = false;
        }
      )
      .addCase(login.rejected, handleReject)
      .addCase(resetPasswordReq.pending, handlePending)
      .addCase(
        resetPasswordReq.fulfilled,
        (state: initialStateType, action: PayloadAction<unknown>) => {
          console.log(action);
          state.isLoading = false;
        }
      )
      .addCase(resetPasswordReq.rejected, handleReject)
      .addCase(resetPassword.pending, handlePending)
      .addCase(
        resetPassword.fulfilled,
        (state: initialStateType, action: PayloadAction<unknown>) => {
          console.log(action);
          state.isLoading = false;
        }
      )
      .addCase(updateAcc.pending, handlePending)
      .addCase(
        updateAcc.fulfilled,
        (state: initialStateType, action: PayloadAction<UpdatedUser>) => {
          state.value.email = action.payload.email;
          state.value.username = action.payload.username;
          state.isLoading = false;
        }
      )
      .addCase(updateAcc.rejected, handleReject)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state: initialStateType) => {
        state.value.isAuth = false;
        state.value.token = "";
        state.isLoading = false;
      })
      .addCase(deleteAccount.pending, handlePending)
      .addCase(deleteAccount.fulfilled, (state: initialStateType) => {
        state.isLoading = false;
      })
      .addCase(deleteAccount.rejected, handleReject);
  },
});

export const authReducer = authSlice.reducer;
