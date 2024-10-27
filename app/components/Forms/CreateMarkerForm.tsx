"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const CreateMarkerForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
      onClick={(e) => {
        onClose();
        e.stopPropagation();
      }} // Prevents click events inside the modal from closing it
    >
      <div
        className="bg-white p-4 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevents click events inside the modal from closing it
      >
        <h1>Signup</h1>
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
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              onClose(); // Close the modal after submission
            }, 500);
          }}
        >
          <Form className="flex flex-col gap-4">
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="John" />

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />

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
