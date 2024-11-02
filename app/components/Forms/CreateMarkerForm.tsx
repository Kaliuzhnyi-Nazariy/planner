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
      x: position.xPos,
      y: position.yPos,
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
        className="bg-yellow-200 p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
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
          <Form className="flex flex-col gap-5">
            <div className="flex gap-2">
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
              className="bg-transparent border-b-1 focus:border-b-black outline-none active:bg-transparent min-h-5 resize-y h-auto text-wrap break-words hyphens-auto"
              id="textOfTask"
              name="textOfTask"
              placeholder="Today I should..."
            />
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded transition-all hover:scale-105 duration-150"
            >
              Create marker
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
