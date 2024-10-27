export interface Marker {
  _id: string;
  title: string;
  taskText: string;
  owner: string;
  date: string;
}

export type Markers = Array<Marker>;

export interface IInitialState {
  tasks: Marker;
  isLoading: boolean;
  error: string | null;
}
