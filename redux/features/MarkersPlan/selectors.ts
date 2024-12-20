import { createSelector } from "@reduxjs/toolkit";
import { IReceivedMarkers, Marker, Markers } from "./typesOrInterfaces";

export const selectTasks = (state: { markers: { tasks: IReceivedMarkers } }) =>
  state.markers.tasks;
export const selectFilter = (state: { filter: { filter: string } }) =>
  state.filter.filter;

export const filteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filterValue) => {
    const normalizedFilterValue = filterValue?.toLowerCase() || "";
    if (normalizedFilterValue) {
      return tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(normalizedFilterValue) ||
          task.taskText.toLowerCase().includes(normalizedFilterValue)
      );
    }
    return tasks;
  }
);

export const selectMarkerError = (state: {
  markers: { error: string | null };
}) => state.markers.error;
