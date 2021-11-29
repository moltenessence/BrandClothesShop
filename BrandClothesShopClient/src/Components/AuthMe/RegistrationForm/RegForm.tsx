import {Formik} from 'formik';
import DisplayRegForm from "./DisplayRegForm";
import {useDispatch} from "react-redux";
import {register} from "../../../Store/Reducers/authMeReducer/actionCreators";
import {IRegister} from "../../../Store/Reducers/authMeReducer/types/actionPayloadTypes";
import {FC} from "react";

const initialValues = {
    username: '',
    email: '',
    password: '',
}

export type FormValues = typeof initialValues;

const RegForm: FC = () => {

    const dispatch = useDispatch();

    const handleSubmit = (params: IRegister) => {
        dispatch(register({...params}));
    }

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