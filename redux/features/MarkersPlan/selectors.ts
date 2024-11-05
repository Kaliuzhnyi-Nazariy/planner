import { createSelector } from "@reduxjs/toolkit";
import { IReceivedMarkers, Marker, Markers } from "./typesOrInterfaces";

export const selectTasks = (state: { markers: { tasks: IReceivedMarkers } }) =>
  state.markers.tasks;
export const selectFilter = (state: { filter: { filter: string } }) =>
  state.filter.filter;

export const filteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filterValue) => {
    console.log(filterValue);
    const normilizedFilterValue = filterValue.toLowerCase();
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(normilizedFilterValue) ||
        task.taskText.toLowerCase().includes(normilizedFilterValue)
    );
  }
);
