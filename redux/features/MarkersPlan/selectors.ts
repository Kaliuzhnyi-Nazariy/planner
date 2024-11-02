import { IReceivedMarkers, Marker, Markers } from "./typesOrInterfaces";

export const selectTasks = (state: { markers: { tasks: IReceivedMarkers } }) =>
  state.markers.tasks;
