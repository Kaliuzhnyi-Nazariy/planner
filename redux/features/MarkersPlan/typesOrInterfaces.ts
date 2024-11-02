export interface Marker {
  _id: string;
  title: string;
  taskText: string;
  owner: string;
  date: string;
}

export interface IReceivedMarker extends Marker {
  coordinates: {
    x: number;
    y: number;
  };
}

export type IReceivedMarkers = Array<IReceivedMarker>;

export type Markers = Array<Marker>;

export interface IInitialState {
  tasks: Array<Marker>;
  isLoading: boolean;
  error: string | null;
}

export type newMarkerData = {
  title: string;
  taskText: string;
  date: string | null;
  x?: number;
  y?: number;
};
