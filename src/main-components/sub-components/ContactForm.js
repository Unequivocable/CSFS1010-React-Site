import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, TextAreaField } from './Fields'
import axios from 'axios'

const ContactForm = () => {
    return (
        <Formik 
        initialValues = {{
            name: "",
            email: "",
            phoneNumber: "",
            content: ""
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
                .max(26, 'Must be 26 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            phoneNumber: Yup.string()
                .min(10, 'Must be a full 10 digit phone number with no punctuation')
                .max(10, 'Must be a full 10 digit phone number with no punctuation')
                .required('Required'),
            content: Yup.string()
                .required('Please include a message'),
        })}
        onSubmit = {(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
            axios.post('/contact_form/entries', values)
                .catch(error => console.log(error))
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
    >
        <Form>
            <ul>
            <li><TextField
                label="Name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                /></li>
            <li><TextField
                label="Email"
                name="email"
                type="email"
                placeholder="jane@doe.com"
            /></li>
            <li>
            <TextField
                label="Phone Number"
                name="phoneNumber"
                type="text"
                placeholder="1234567890"
            /></li>
            <li>
            <TextAreaField
                label="Enter your message"
                name="content"
                type="text"
            /></li>
            <li>
           
            <button type="submit" className="signin">Submit</button>
            </li>
            </ul>
        </Form>
    </Formik>
    );
};

export default ContactForm
