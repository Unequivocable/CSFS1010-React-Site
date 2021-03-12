import React from 'react';
import { useField } from 'formik';

const TextField = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className="col1" htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input col2" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error col3">{meta.error}</div>
            ) : null}
        </>
    );
};
const TextAreaField = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className="row4" htmlFor={props.id || props.name}>{label}</label><br />
            <textarea className="form-textarea" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error col2">{meta.error}</div>
            ) : null}
        </>
    );
};

export {
    TextAreaField,
    TextField
}