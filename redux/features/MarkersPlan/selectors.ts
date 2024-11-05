import { createSelector } from "@reduxjs/toolkit";
import { IReceivedMarkers, Marker, Markers } from "./typesOrInterfaces";

export const selectTasks = (state: { markers: { tasks: IReceivedMarkers } }) =>
  state.markers.tasks;
export const selectFilter = (state: { filter: { filter: string } }) =>
  state.filter.filter;

export const filteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filterValue) => {
    const normalizedFilterValue = filterValue?.toLowerCase() || ""; // console.log("normilizedFilterValue: ", normilizedFilterValue);
    // console.log("Filter Value:", filterValue); // Log to check if filterValue updates
    // return tasks;
    if (normalizedFilterValue) {
      return tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(normalizedFilterValue) ||
          task.taskText.toLowerCase().includes(normalizedFilterValue)
      );
    }
    return tasks;
    // console.log("Tasks:", tasks); // Log to check if tasks are updated
  }
);
