import { call, takeEvery, put } from "redux-saga/effects";
import { login, register, setServerError } from "../../../Store/Reducers/authMeReducer/actionCreators";
import AuthMeService from "../../../Service/AuthMeService";
import { LoginTrigger, RegisterTrigger } from "../../../Store/Reducers/authMeReducer/types/actionTypes";
import { LoginCodes, RegisterCodes } from "../../../Service/statusCodes";


function* loginWorker({ payload }: LoginTrigger): any {

    const { email, password } = payload;

    try {

        const response = yield call(() => AuthMeService.login(email, password));
        const { token, id, username } = response.data;

        yield put(login.success({ token, email, id, username }));

    } catch (e: any) {
        if (e.response.status === LoginCodes.InvalidData) {
            const message = e.response.data;
            yield put(setServerError({ message }));
        } else {
            console.log(e);
        }
    }
}

function* registerWorker({ payload }: RegisterTrigger): any {

    const { username, email, password } = payload;

    try {

        const { status } = yield call(() => AuthMeService.register(username, email, password));

        if (status === RegisterCodes.Success) {
            const response = yield call(() => AuthMeService.login(email, password));
            const { token, id, username } = response.data;
    
            yield put(login.success({ token, email, id, username }));
        }

    } catch (e: any) {
        if (e.response.status === RegisterCodes.AlreadyExist) {
            const message = e.response.data;
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