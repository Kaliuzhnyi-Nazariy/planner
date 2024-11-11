import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Marker, newMarkerData } from "./typesOrInterfaces";

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

export const getTasksByDate = createAsyncThunk<
  Marker,
  { date: string },
  { rejectValue: any }
>("markers/getByDate", async ({ date }, thunkAPI) => {
  try {
    const res = await axios.get(`/plans/byDate/${date}`);
    return res.data;
  } catch (error: any) {
    thunkAPI.rejectWithValue(error.message);
  }
});

// export const getOneTask = createAsyncThunk<
//   Marker,
//   { id: string },
//   { rejectValue: any }
// >("markers/getOne", async (id, thunkAPI) => {
//   try {
//     const res = await axios.get(`/plans/${id}`);
//     return res.data;
//   } catch (error: any) {
//     thunkAPI.rejectWithValue(error.message);
//   }
// });

export const addTask = createAsyncThunk<
  Marker,
  newMarkerData,
  { rejectValue: any }
>("markers/addMarker", async (newMarkerData, thunkAPI) => {
  try {
    const res = await axios.post("/plans/", newMarkerData);
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateTask = createAsyncThunk<
  Marker,
  { id: string | undefined; newMarkerData: newMarkerData }
>("markers/updateMarker", async ({ id, newMarkerData }, thunkAPI) => {
  try {
    const res = await axios.put(`/plans/${id}`, newMarkerData);
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteMarker = createAsyncThunk<
  void,
  { id: string | undefined },
  { rejectValue: any }
>("markers/delete", async ({ id }, thunkAPI) => {
  try {
    const res = await axios.delete(`/plans/${id}`);
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
