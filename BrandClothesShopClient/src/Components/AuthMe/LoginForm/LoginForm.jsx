import React from "react";
import { Formik } from 'formik';
import DisplayLoginForm from "./DisplayLoginForm";

const initialValues = {
    email: '',
    password: '',
}

const handleSubmit = (params) => {
    alert(JSON.stringify(params));
}

const LoginForm = (props) => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                render={DisplayLoginForm}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default LoginForm;