// import { axiosInstance } from "../../axios.config";
const { axiosInstance } = require("../../axios.config");
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  logUser,
  newPasswordType,
  regUser,
  UpdatedUser,
  User,
  UserInfoRegister,
} from "./typesOrInterfaces";

import axios from "axios";

axios.defaults.baseURL = "https://back-for-planner.onrender.com/api";

const setToken = (token: String) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axiosInstance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk<
  regUser,
  UserInfoRegister,
  { rejectValue: any }
>("auth/register", async (newUser, thunkAPI: any): Promise<regUser> => {
  try {
    const res = await axios.post("/users/register", newUser);
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk<User, logUser, { rejectValue: any }>(
  "auth/login",
  async (loginUserData, thunkAPI: any): Promise<User> => {
    try {
      const res = await axios.post("/users/login", loginUserData);
      setToken(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPasswordReq = createAsyncThunk<
  { ink: String },
  { emailOrUsername: String },
  { rejectValue: any }
>("auth/forgotPassword", async (email, thunkApi: any): Promise<any> => {
  try {
    console.log(email);
    const res = await axios.post("/users/forgotPassword", email);
    return res.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const resetPassword = createAsyncThunk<
  void,
  { id: string; newPasswordValue: newPasswordType },
  { rejectValue: any }
>(
  "auth/resetPassword",
  async ({ id, newPasswordValue }, thunkAPI: any): Promise<void> => {
    try {
      const res = await axios.post(
        `/users/renewpassword/${id}`,
        newPasswordValue
      );
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAcc = createAsyncThunk<
  UpdatedUser,
  { id: number; UpdatedUserData: UpdatedUser },
  { rejectValue: any }
>(
  "auth/updateAcc",
  async ({ id, UpdatedUserData }, thunkAPI: any): Promise<UpdatedUser> => {
    try {
      const res = await axios.put(`/users/${id}`, UpdatedUserData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk<
  void,
  { id: number },
  { rejectValue: any }
>("auth/logout", async (id, thunkAPI: any): Promise<void> => {
  try {
    const res = await axios.post(`/users/${id}`);
    clearToken();
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteAccount = createAsyncThunk<void, void, { rejectValue: any }>(
  "auth/deleteAccount",
  async (_, thunkApi: any): Promise<void> => {
    try {
      const res = await axios.delete("/users/");
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
