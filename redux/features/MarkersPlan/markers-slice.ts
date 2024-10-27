import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import {
  addTask,
  deleteMarker,
  getAllTasks,
  updateTask,
} from "./marker-operations";
import { IInitialState, Marker, Markers } from "./typesOrInterfaces";

const initialState = {
  tasks: [] as Markers,
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
      .addCase(getAllTasks.rejected, handleReject)
      .addCase(addTask.pending, handlePending)
      .addCase(
        addTask.fulfilled,
        (state: IInitialState, action: PayloadAction<Marker>) => {
          state.tasks.push(action.payload);
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

          console.log(indexOfSub);

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
          console.log(action);
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
