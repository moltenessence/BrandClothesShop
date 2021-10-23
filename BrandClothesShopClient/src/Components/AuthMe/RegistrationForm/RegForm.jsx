import React from "react";
import { Formik } from 'formik';
import DisplayRegForm from "./DisplayRegForm";
import { useDispatch } from "react-redux";
import { register } from "../../../Store/Reducers/authMeReducer/actionCreators";

const initialValues = {
    username: '',
    email: '',
    password: '',
}

const RegForm = (props) => {

    const dispatch = useDispatch();

    const handleSubmit = (params) => {
        dispatch(register({ ...params }));
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <DisplayRegForm />
            </Formik>
        </>
    );
}

export default RegForm;