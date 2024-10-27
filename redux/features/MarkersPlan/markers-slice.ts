import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllTasks } from "./marker-operations";
import { IInitialState, Marker, Markers } from "./typesOrInterfaces";

const initialState = {
  tasks: {
    _id: "",
    title: "",
    taskText: "",
    owner: "",
    date: "",
  } as Marker,
  isLoading: false,
  error: null,
} as IInitialState;

const handlePending = (state: IInitialState) => {
  state.isLoading = true;
  state.error = null;
};

const handleReject = (
  state: IInitialState,
  action: PayloadAction<IInitialState>
) => {
  state.isLoading = false;
  console.log(action);
  state.error = action?.payload?.error;
};

const markerSlice = createSlice({
  name: "marker",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllTasks.pending, handlePending)
      .addCase(
        getAllTasks.fulfilled,
        (state: IInitialState, action: PayloadAction<Markers>) => {
          //   state.tasks._id = action.payload[0]._id;
          //   state.tasks.title = action.payload[0].title;
          //   state.tasks.taskText = action.payload[0].taskText;
          //   state.tasks.owner = action.payload[0].owner;
          //   state.tasks.date = action.payload[0].date;
          state.tasks = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getAllTasks.rejected, handleReject);
  },
});

export const markerReducer = markerSlice.reducer;
