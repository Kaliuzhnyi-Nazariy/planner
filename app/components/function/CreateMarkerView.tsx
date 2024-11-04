// export interface MarkerProps {
//   id: String;
//   title: String;
//   taskText: String;
//   // coordinates: {
//   //   x: number;
//   //   y: number;
//   // };
//   x: number;
//   y: number;
// }

// const CreateMarkerView = ({ title, taskText, x, y }: MarkerProps) => {
//   console.log({ title, taskText, x, y });
//   return (
//     <div
//       className="w-[226px] h-min-[250px] bg-yellow-200 flex flex-col p-2 absolute transform translate-x-[-85%] -translate-y-[150px]"
//       // style={{ top: y, left: x }}
//     >
//       <h3>{title}</h3>
//       <p className="text-wrap break-words hyphens-auto">{taskText}</p>
//     </div>
//   );
// };

// export default CreateMarkerView;

export interface MarkerProps {
  id: String;
  title: String;
  taskText: String;
  // coordinates: {
  //   x: number;
  //   y: number;
  // };
}

const CreateMarkerView = ({ title, taskText }: MarkerProps) => {
  console.log({ title, taskText });
  return (
    <div
      className="w-[226px] h-min-[250px] bg-yellow-200 flex flex-col p-2 "
      // style={{ top: y, left: x }}
    >
      <h3>{title}</h3>
      <p className="text-wrap break-words hyphens-auto">{taskText}</p>
    </div>
  );
};

export default CreateMarkerView;
