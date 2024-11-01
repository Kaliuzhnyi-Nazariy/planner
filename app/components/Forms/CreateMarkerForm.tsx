"use client";

import { addTask } from "@/redux/features/MarkersPlan/marker-operations";
import { useAppDispatch } from "@/redux/hooks";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useState } from "react";

interface Values {
  titleOfMarker: string;
  textOfTask: string;
}

type Prop = {
  onClose: () => void;
  position: {
    xPos: number;
    yPos: number;
  };
};

export const CreateMarkerForm = ({ onClose, position }: Prop) => {
  const dispatch = useAppDispatch();

  const handleSubmitingForm = async (values: Values) => {
    console.log({
      username: values.titleOfMarker,
      textOfTasks: values.textOfTask,
      date: localStorage.getItem("date"),
      x: position.xPos,
      y: position.yPos,
    });
    const addTaskValues = {
      title: values.titleOfMarker,
      taskText: values.textOfTask,
      date: localStorage.getItem("date"),
    };
    await dispatch(addTask(addTaskValues));
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
            titleOfMarker: "",
            textOfTask: "",
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
