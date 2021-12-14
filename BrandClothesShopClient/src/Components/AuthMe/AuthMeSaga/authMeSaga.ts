import {call, put, takeEvery} from "redux-saga/effects";
import {login, register, setServerError} from "../../../Store/Reducers/authMeReducer/actionCreators";
import AuthMeService from "../../../Service/AuthMeService";
import {LoginTrigger, RegisterTrigger} from "../../../Store/Reducers/authMeReducer/types/actionTypes";
import {LoginCodes, RegisterCodes} from "../../../Service/statusCodes";
import {ISetServerError} from "../../../Store/Reducers/authMeReducer/types/actionPayloadTypes";
import {ILoginResponse, IRegisterResponse} from "../../../Service/interfaces/IAuthMeService";


function* loginWorker<T extends LoginTrigger>({payload}: T) {

    const {email, password} = payload;

    try {

        const {token, id, username, refreshToken}: ILoginResponse = yield call(() => AuthMeService.login(email, password));

        yield put(login.success({token, email, id, username, refreshToken}));

    } catch (e: any) {
        if (e.response.status === LoginCodes.InvalidData) {
            const message = e.response.data;
            yield put(setServerError({message}));
        } else {
            console.log(e);
        }
    }
}

function* registerWorker<T extends RegisterTrigger>({payload}: T) {

    const {username, email, password} = payload;

    try {

        const {status}: IRegisterResponse = yield call(() => AuthMeService.register(username, email, password));

        if (status === RegisterCodes.Success) yield put(login({email, password}));


    } catch (e: any) {
        if (e.response.status === RegisterCodes.AlreadyExist) {
            const message: ISetServerError = e.response.data;
            yield put(setServerError(message));
        } else {
            console.log(e);
        }
    }
}

export function* authMeWatcher() {
    yield takeEvery(login.TRIGGER, loginWorker);
    yield takeEvery(register.TRIGGER, registerWorker);
}