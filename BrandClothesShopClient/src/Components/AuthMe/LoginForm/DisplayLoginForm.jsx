import React from "react";
import { AntInput, AntInputPassword } from "../../Common/Components/AntInputs/AntInputs";
import { Form, Field } from "formik";
import { emailValidation, passwordValidation } from "../../Common/Components/AntInputs/fieldValidation/fieldValidation";


const DisplayLoginForm = ({ handleSubmit, values, submitCount }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                component={AntInput}
                name='email'
                label='E-mail'
                validate={emailValidation}
                submitCount={submitCount}
                defaultValue={values.email}
                hasFeedback
            />
            <Field
                component={AntInputPassword}
                name='password'
                label='Password'
                validate={passwordValidation}
                submitCount={submitCount}
                defaultValue={values.password}
                hasFeedback
            />
            <button className="ant-btn" type="submit">
                Submit
            </button>
        </Form>
    );
}

export default DisplayLoginForm;