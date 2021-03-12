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
                    const response = error.response.data.invalid ? `${error.response.data.message} ${error.response.data.invalid}` : `${error.response.data.message}`;
                    alert(response)
                    console.log(error)
                    }
                setSubmitting(false);
                resetForm();
            }}
        >
            <Form>
                <div className="logoGrid">
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
                    </div>
                <button type="submit" className="signin">Submit</button>
                </Form>
        </Formik>
    );
};

export default LoginForm
