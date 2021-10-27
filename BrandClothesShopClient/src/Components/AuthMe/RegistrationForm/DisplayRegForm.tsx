import { AntInput, AntInputPassword } from "../../Common/Components/AntInputs/AntInputs";
import { Form, Field, FormikProps } from "formik";
import { usernameValidation, emailValidation, passwordValidation } from "../../Common/Components/AntInputs/fieldValidation/fieldValidation";
import { FormValues } from "./RegForm";


const DisplayRegForm = ({ handleSubmit, values, submitCount }: FormikProps<FormValues>) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                component={AntInput}
                name='username'
                label='Username'
                validate={usernameValidation}
                submitCount={submitCount}
                defaultValue={values.username}
                hasFeedback
            />
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

export default DisplayRegForm;