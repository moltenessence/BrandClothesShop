import {AntInput, AntInputPassword} from "../../Common/Components/AntInputs/AntInputs";
import {Form, Field, FormikProps} from "formik";
import {emailValidation, passwordValidation} from "../../Common/Components/AntInputs/fieldValidation/fieldValidation";
import {FormValues} from "../LoginForm/LoginForm";
import {FC} from "react";


const DisplayLoginForm: FC<FormikProps<FormValues>> = ({handleSubmit, values, submitCount}) => {

    return (
        <Form onSubmit={(params) => handleSubmit(params)}>
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