import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./Fields";
import axios from "axios";

const AddUserForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(26, "Must be 26 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters")
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords don't match.")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const sendValues = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        try {
          await axios.post("/users", sendValues);
          alert("The new user has been added");
        } catch (error) {
          const response = error.response.data.invalid
            ? `${error.response.data.message} ${error.response.data.invalid}`
            : `${error.response.data.message}`;
          alert(response);
          console.log(error);
        }
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form>
        <div className="logoGrid">
          <TextField
            label="Name"
            name="name"
            type="text"
            placeholder="Jane Doe"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="jane@doe.com"
          />
          <TextField
            label="Enter new password"
            name="password"
            type="password"
            placeholder="password123"
          />
          <TextField
            label="Confirm new password"
            name="confirmPassword"
            type="password"
            placeholder="password123"
          />
        </div>
        <button type="submit" className="signin form-button">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default AddUserForm;
