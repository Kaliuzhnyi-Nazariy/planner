export interface MarkerProps {
  id: String;
  title: String;
  taskText: String;
  x: number;
  y: number;
}

const CreateMarkerView = ({ title, taskText, x, y }: MarkerProps) => {
  return (
    <div
      className="w-[226px] h-min-[250px] bg-yellow-200 flex flex-col p-2 absolute transform translate-x-[-85%] translate-y-[-80%]"
      style={{ top: y, left: x }}
    >
      <h3>{title}</h3>
      <p>{taskText}</p>
    </div>
  );
};

export default CreateMarkerView;
