import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from './Fields'
import axios from 'axios'
import UserContext from './User'

const AddUserForm = () => {
    const { token } = useContext(UserContext);

    return (
        <Formik 
            initialValues = {{
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                    .max(26, 'Must be 26 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .min(8, 'Must be at least 8 characters')
                    .required('Required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], "Passwords don't match.")
                    .required('Required')
            })}
            onSubmit = {async (values, { setSubmitting, resetForm }) => {
                delete values.confirmPassword
                const headers = { headers: { Authorization: `Bearer ${token}` }               }
                try {
                    await axios.post('/users', values, { headers })
                } catch(error){
                    console.log(error.response.data.error)
                    }
                setSubmitting(false);
                resetForm();
            }}
        >
            <Form>
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
                <button type="submit" className="signin">Submit</button>
                </Form>
        </Formik>
    );
};

export default AddUserForm
