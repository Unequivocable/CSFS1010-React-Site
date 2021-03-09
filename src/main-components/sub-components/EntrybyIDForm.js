import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from './Fields'
import axios from 'axios'
import UserContext from './User'

const EntrybyIDForm = () => {
    const { token } = useContext(UserContext);

    return (
        <Formik 
            initialValues = {{
                id: ""
            }}
            validationSchema = {Yup.object({
                id: Yup.string()
                    .required('Required'),
            })}
            onSubmit = {async (values, { setSubmitting, resetForm }) => {
                try {
                    // const loginPost = await axios.post('/auth', values)
                    // setToken(loginPost.data)
                    // setLogin("loggedIn")
                } catch(error){
                    console.log(error.response.data.error)
                    }
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
                <button type="submit" className="signin">Submit</button>
                </Form>
        </Formik>
    );
};

export default EntrybyIDForm
