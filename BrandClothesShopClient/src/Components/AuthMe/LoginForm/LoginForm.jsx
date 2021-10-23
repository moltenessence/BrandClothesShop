import React from "react";
import { Formik } from 'formik';
import DisplayLoginForm from "./DisplayLoginForm";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Reducers/authMeReducer/authMeReducer";

const initialValues = {
    email: '',
    password: '',
}

const LoginForm = (props) => {

    const dispatch = useDispatch();

    const handleSubmit = (params) => {
        dispatch(login(params));
    }

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