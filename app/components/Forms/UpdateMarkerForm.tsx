"use client";

import { MdDeleteForever } from "react-icons/md";
import {
  deleteMarker,
  updateTask,
} from "@/redux/features/MarkersPlan/marker-operations";
import { Marker } from "@/redux/features/MarkersPlan/typesOrInterfaces";
import { useAppDispatch } from "@/redux/hooks";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useState } from "react";
import { DatePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { IValue } from "../CalendarView";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectMarkerError } from "@/redux/features/MarkersPlan/selectors";

interface Values {
  titleOfMarker: string;
  textOfTask: string;
}

type Prop = {
  onClose: () => void;
  info: Marker | null;
};

export const UpdateMarkerForm = ({ onClose, info }: Prop) => {
  const dispatch = useAppDispatch();
  const err = useSelector(selectMarkerError);

  const formatDateString = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const [dateValue, setDateValue] = useState(() => {
    const formattedDate = info?.date
      ? formatDateString(info.date)
      : new Date().toLocaleDateString("fr-CA");
    return parseDate(formattedDate);
  });

  const chechCurrDay = (value: IValue) => {
    if (value.day.toString().length === 1) {
      return value.year + "-" + value.month + "-" + "0" + value.day;
    } else {
      return value.year + "-" + value.month + "-" + value.day;
    }
  };

  const handleSubmitingForm = async (values: Values) => {
    const res = await dispatch(
      updateTask({
        id: info?._id,
        newMarkerData: {
          title: values.titleOfMarker,
          taskText: values.textOfTask,
          date: chechCurrDay(dateValue),
        },
      })
    );

    console.log(err);

    // if (res?.error?.message) {
    //   toast.error(res.error.message);
    // } else {
    //   toast.success("Updated successfully!");
    // }
    onClose();
  };

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[800] overflow-hidden "
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
          className="absolute top-3 right-5 "
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteMarker({ id: info?._id }));
            onClose();
            toast.success("Marker deleted!");
          }}
        >
          <MdDeleteForever className="opacity-40 hover:opacity-100 transition-all" />
        </button>
        <Formik
          initialValues={{
            titleOfMarker: info?.title || "",
            textOfTask: info?.taskText || "",
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
