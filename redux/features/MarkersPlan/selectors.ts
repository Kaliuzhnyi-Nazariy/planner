import { Marker, Markers } from "./typesOrInterfaces";

export const selectTasks = (state: { markers: { tasks: Markers } }) =>
  state.markers.tasks;
