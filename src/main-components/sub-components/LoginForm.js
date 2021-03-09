import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from './Fields'
import axios from 'axios'
import UserContext from './User'

const LoginForm = () => {
    const { setLogin, setToken } = useContext(UserContext);

    return (
        <Formik 
            initialValues = {{
                email: "",
                password: ""
            }}
            validationSchema = {Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .required('Required')
            })}
            onSubmit = {async (values, { setSubmitting, resetForm }) => {
                try {
                    const loginPost = await axios.post('/auth', values)
                    setToken(loginPost.data)
                    setLogin("loggedIn")
                } catch(error){
                    console.log(error.response.data.error)
                    }
                setSubmitting(false);
                resetForm();
            }}
        >
            <Form>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@doe.com"
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="password123"
                    />
                <button type="submit" className="signin">Submit</button>
                </Form>
        </Formik>
    );
};

export default LoginForm
