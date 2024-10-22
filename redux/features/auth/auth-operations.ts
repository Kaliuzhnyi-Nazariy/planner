const { axiosInstance } = require("../axios.config.ts");
import { createAsyncThunk } from "@reduxjs/toolkit";

type UserInfoRegister = {
  username: String;
  email: String;
  password: String;
  confirmPassword: String;
};

export type regUser = {
  username: String;
  email: String;
};

type logUser = {
  email: String;
  password: String;
};

type User = {
  username: String;
  email: String;
  token: String;
};

type UpdatedUser = Omit<User, "token">;

export type newPasswordType = {
  newPassword: String;
  confirmPassword: string;
};

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
    const res = await axiosInstance.post("/users/register", newUser);
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk<User, logUser, { rejectValue: any }>(
  "auth/login",
  async (loginUserData, thunkAPI: any): Promise<User> => {
    try {
      const res = await axiosInstance.post("/users/login", loginUserData);
      setToken(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPasswordReq = createAsyncThunk<
  { link: String },
  { email: String },
  { rejectValue: any }
>("auth/forgotPassword", async (email, thunkApi: any): Promise<any> => {
  try {
    const res = await axiosInstance.post("/users/forgotPassword", email);
    return res.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const resetPassword = createAsyncThunk<
  void,
  newPasswordType,
  { rejectValue: any }
>(
  "auth/resetPassword",
  async ({ newPassword, confirmPassword }, thunkAPI: any): Promise<void> => {
    try {
      const res = await axiosInstance.post(`/here_will_be_link`, {
        newPassword,
        confirmPassword,
      });
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
      const res = await axiosInstance.put(`/users/${id}`, UpdatedUserData);
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
    const res = await axiosInstance.post(`/users/${id}`);
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
      const res = await axiosInstance.delete("/users/");
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
