import React, { useContext, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./Fields";
import axios from "axios";
import UserContext from "./User";

const EntrybyIDForm = () => {
  const { token } = useContext(UserContext);
  const [entry, setEntry] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    const getDatabyID = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `/contact_form/entries/${id}`,
          headers: { Authorization: `Bearer ${token.token}` },
        });
        setEntry(response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    };
    getDatabyID();
  }, [token.token, id]);

  return (
    <>
      <Formik
        initialValues={{
          id: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setId(values.id);
          setSubmitting(false);
          resetForm();
        }}
      >
        <Form>
          <TextField
            label="Enter ID to view a specific entry"
            name="id"
            type="text"
            placeholder="9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
          />
          <button type="submit" className="signin">
            Submit
          </button>
        </Form>
      </Formik>
      {entry.id ? (
        <li key={entry.id}>
          Name : {entry.name} <br />
          Email: {entry.email} <br />
          Phonenumber: {entry.phoneNumber} <br />
          Message: {entry.content} <br />
          Entry ID: {entry.id}
        </li>
      ) : null}
    </>
  );
};

export default EntrybyIDForm;
