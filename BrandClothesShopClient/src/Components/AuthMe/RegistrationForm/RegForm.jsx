import React from "react";
import { Formik } from 'formik';
import DisplayRegForm from "./DisplayRegForm";

const initialValues = {
    username: '',
    email: '',
    password: '',
}

const handleSubmit = (params) => {
    alert(JSON.stringify(params));
}

const RegForm = (props) => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                render={DisplayRegForm}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default RegForm;