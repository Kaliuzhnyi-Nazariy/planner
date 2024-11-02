"use client";

import {
  addTask,
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

  const [dateValue, setDateValue] = useState(
    parseDate(info.date || new Date().toLocaleDateString("fr-CA"))
  );

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
        className="bg-yellow-100 p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
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

            <div className="flex gap-2 w-full">
              <label htmlFor="textOfTask">
                <b>Task`s text: </b>
              </label>
              <Field
                className="bg-transparent border-b-1 focus:border-b-black outline-none"
                id="textOfTask"
                name="textOfTask"
                placeholder="Today I should..."
              />

              {/* add calendar */}
            </div>
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
