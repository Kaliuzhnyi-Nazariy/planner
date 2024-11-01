"use client";

import {
  addTask,
  updateTask,
} from "@/redux/features/MarkersPlan/marker-operations";
import { Marker } from "@/redux/features/MarkersPlan/typesOrInterfaces";
import { useAppDispatch } from "@/redux/hooks";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useState } from "react";

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

  const handleSubmitingForm = async (values: Values) => {
    await dispatch(
      updateTask({
        id: info._id,
        newMarkerData: {
          title: values.titleOfMarker,
          taskText: values.textOfTask,
          date: localStorage.getItem("date"),
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
        className="bg-white p-4 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => {
            onClose();
            e.stopPropagation();
          }}
          className="absolute top-2 right-2"
        >
          Close
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
          <Form className="flex flex-col gap-4">
            <div className="flex gap-2">
              <label htmlFor="titleOfMarker">
                <b>Title</b>
              </label>
              <Field
                id="titleOfMarker"
                name="titleOfMarker"
                placeholder="Title..."
              />
            </div>

            <div className="flex gap-2">
              <label htmlFor="textOfTask">
                <b>Task`s text</b>
              </label>
              <Field
                id="textOfTask"
                name="textOfTask"
                placeholder="Today I should..."
              />

              {/* add calendar */}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
