import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Marker } from "./typesOrInterfaces";

export const getAllTasks = createAsyncThunk<Marker, void, { rejectValue: any }>(
  "markers/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/plans/");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
