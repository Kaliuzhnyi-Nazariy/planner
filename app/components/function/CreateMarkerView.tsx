export interface MarkerProps {
  id: String;
  title: String;
  taskText: String;
}

const CreateMarkerView = ({ title, taskText }: MarkerProps) => {
  return (
    <div className="w-[226px] h-min-[250px] bg-yellow-200 flex flex-col p-2 ">
      <h3>{title}</h3>
      <p className="text-wrap break-words hyphens-auto">{taskText}</p>
    </div>
  );
};

export default CreateMarkerView;
