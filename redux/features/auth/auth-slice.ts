import {
  deleteAccount,
  login,
  logout,
  refreshUser,
  register,
  resetPassword,
  resetPasswordReq,
  updateAcc,
} from "./auth-operations";

import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IRefreshUser, regUser, UpdatedUser, User } from "./typesOrInterfaces";

interface IValue {
  id: String;
  isAuth: boolean;
  username: String;
  email: String;
}

export type initialStateType = {
  value: IValue;
  token: String;
  isLoading: boolean;
  error: null | string;
};

const initialState = {
  value: {
    id: "",
    isAuth: false,
    username: "",
    email: "",
  } as IValue,
  token: "",
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
  // console.log(action.error.message);
  state.error = action.error.message;
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
          state.value.id = action.payload._id;
          state.value.isAuth = true;
          state.value.email = action.payload.email;
          state.value.username = action.payload.username;
          state.token = action.payload.token;
          state.isLoading = false;
        }
      )
      .addCase(login.rejected, handleReject)
      .addCase(resetPasswordReq.pending, handlePending)
      .addCase(
        resetPasswordReq.fulfilled,
        (state: initialStateType, action: PayloadAction<unknown>) => {
          state.isLoading = false;
        }
      )
      .addCase(resetPasswordReq.rejected, handleReject)
      .addCase(resetPassword.pending, handlePending)
      .addCase(
        resetPassword.fulfilled,
        (state: initialStateType, action: PayloadAction<unknown>) => {
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
        state.token = "";
        state.isLoading = false;
      })
      .addCase(deleteAccount.pending, handlePending)
      .addCase(deleteAccount.fulfilled, (state: initialStateType) => {
        state.isLoading = false;
      })
      .addCase(deleteAccount.rejected, handleReject)
      .addCase(refreshUser.pending, handlePending)
      .addCase(
        refreshUser.fulfilled,
        (state: initialStateType, action: PayloadAction<IRefreshUser>) => {
          state.value.email = action.payload.email;
          state.value.username = action.payload.username;
          state.value.id = action.payload._id;
          state.value.isAuth = true;
          state.isLoading = false;
        }
      )
      .addCase(refreshUser.rejected, handleReject);
  },
});

export const authReducer = authSlice.reducer;
