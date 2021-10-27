import { Formik } from 'formik';
import DisplayLoginForm from "./DisplayLoginForm";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Reducers/authMeReducer/actionCreators";
import { ILoginTrigger } from '../../../Store/Reducers/authMeReducer/types/actionPayloadTypes';

const initialValues = {
    email: '',
    password: '',
}

export type FormValues = typeof initialValues;

const LoginForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (params: ILoginTrigger) => {
        dispatch(login({ ...params }));
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={DisplayLoginForm}
        />
    );
}

export default LoginForm;