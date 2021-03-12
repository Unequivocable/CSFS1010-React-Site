import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, TextAreaField } from "./Fields";
import axios from "axios";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phoneNumber: "",
        content: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(26, "Must be 26 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phoneNumber: Yup.string()
          .min(10, "Must be a full 10 digit phone number with no punctuation")
          .max(10, "Must be a full 10 digit phone number with no punctuation")
          .required("Required"),
        content: Yup.string().required("Please include a message"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await axios.post("/contact_form/entries", values);
          alert(`Your message was submitted successfully`);
        } catch (error) {
          alert(
            `The server is unavailable and there was an error in submitting your message.  Please try again later.`
          );
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
            label="Phone Number"
            name="phoneNumber"
            type="text"
            placeholder="1234567890"
          />
          <TextAreaField
            label="Enter your message"
            name="content"
            type="text"
            placeholder="Your message here"
          />
        </div>
        <button type="submit" className="signin form-button">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
