"use client";

import {
  addTask,
  deleteMarker,
  updateTask,
} from "@/redux/features/MarkersPlan/marker-operations";
import { Marker } from "@/redux/features/MarkersPlan/typesOrInterfaces";
import { useAppDispatch } from "@/redux/hooks";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useState } from "react";
// import CalendarView from "../CalendarView";
import { DatePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";

interface Values {
  titleOfMarker: string;
  textOfTask: string;
}

type Prop = {
  onClose: () => void;
  info: Marker;
};

export const UpdateMarkerForm = ({ onClose, info }: Prop) => {
  const dispatch = useAppDispatch();

  console.log(info);

  // console.log(parseDate(info.date));

  // const [dateValue, setDateValue] = useState(() => {
  //   return parseDate(info.date || new Date().toLocaleDateString("fr-CA"));
  // });

  const formatDateString = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const [dateValue, setDateValue] = useState(() => {
    const formattedDate = info.date
      ? formatDateString(info.date) // Format info.date to ensure ISO format
      : new Date().toLocaleDateString("fr-CA");
    return parseDate(formattedDate);
  });

  const currentDate =
    dateValue.year + "-" + dateValue.month + "-" + dateValue.day;

  const handleSubmitingForm = async (values: Values) => {
    await dispatch(
      updateTask({
        id: info._id,
        newMarkerData: {
          title: values.titleOfMarker,
          taskText: values.textOfTask,
          date: currentDate,
        },
      })
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
      onClick={(e) => {
        onClose();
        e.stopPropagation();
      }}
    >
      <div
        className="bg-yellow-100 p-4 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-5 "
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteMarker(info._id));
            onClose();
          }}
        >
          del
        </button>
        <Formik
          initialValues={{
            titleOfMarker: info.title,
            textOfTask: info.taskText,
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            handleSubmitingForm(values);
            setSubmitting(false);
          }}
        >
          <Form className="flex flex-col flex-wrap gap-5">
            <div className="flex gap-2 w-full">
              <label htmlFor="titleOfMarker">
                <b>Title: </b>
              </label>
              <Field
                className="bg-transparent border-b-1 focus:border-b-black outline-none"
                id="titleOfMarker"
                name="titleOfMarker"
                placeholder="Title..."
              />
            </div>

            <label htmlFor="textOfTask">
              <b>Task`s text: </b>
            </label>
            <Field
              as="textarea"
              className="bg-transparent border-b-1 focus:border-b-black outline-none text-wrap break-words hyphens-auto"
              id="textOfTask"
              name="textOfTask"
              placeholder="Today I should..."
            />

            {/* add calendar */}
            <div
              className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 h-full"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <DatePicker
                label={"Birth date"}
                variant="underlined"
                value={dateValue}
                onChange={(e) => {
                  setDateValue(e);
                }}
                // classNames={}
                color="warning"
                className="text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:scale-105 transition-all duration-150	"
            >
              Update marker
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
