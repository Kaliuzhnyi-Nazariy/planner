import {
  Action,
  createSlice,
  current,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import {
  addTask,
  deleteMarker,
  getAllTasks,
  getTasksByDate,
  updateTask,
} from "./marker-operations";
import { IInitialState, Marker, Markers } from "./typesOrInterfaces";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
} as IInitialState;

const handlePending = (state: IInitialState) => {
  state.isLoading = true;
  state.error = null;
};

const handleReject = (
  state: IInitialState,
  action: PayloadAction<string | any>
) => {
  state.isLoading = false;
  state.error = action.payload || "Unknown error occurred";
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
      .addCase(getAllTasks.rejected, handleReject)
      .addCase(getTasksByDate.pending, handlePending)
      .addCase(
        getTasksByDate.fulfilled,
        (state: IInitialState, action: PayloadAction<Markers>) => {
          state.tasks = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getTasksByDate.rejected, handleReject)
      .addCase(addTask.pending, handlePending)
      .addCase(
        addTask.fulfilled,
        (state: IInitialState, action: PayloadAction<Marker>) => {
          // state.tasks.push(action.payload);
          state.tasks = [...state.tasks, action.payload];

          state.isLoading = false;
        }
      )
      .addCase(addTask.rejected, handleReject)
      .addCase(updateTask.pending, handlePending)
      .addCase(
        updateTask.fulfilled,
        (state: IInitialState, action: PayloadAction<Marker>) => {
          const indexOfSub = current(state.tasks).findIndex(
            (task) => task._id === action.payload._id
          );

          if (indexOfSub === -1) throw new Error("No task!");

          state.tasks.splice(indexOfSub, 1, action.payload);
          state.isLoading = false;
        }
      )
      .addCase(updateTask.rejected, handleReject)
      .addCase(deleteMarker.pending, handlePending)
      .addCase(
        deleteMarker.fulfilled,
        (
          state: IInitialState,
          action: PayloadAction<{ deletingTask: Marker }>
        ) => {
          const deleteIndex = state.tasks.findIndex(
            (task) => task._id === action.payload.deletingTask._id
          );
          if (deleteIndex === -1) throw new Error("No task!");

          state.tasks.splice(deleteIndex, 1);
          state.isLoading = false;
        }
      )
      .addCase(deleteMarker.rejected, handleReject);
  },
});

export const markerReducer = markerSlice.reducer;
