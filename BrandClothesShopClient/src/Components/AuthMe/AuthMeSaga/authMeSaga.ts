import { call, takeEvery, put } from "redux-saga/effects";
import { login, LoginTrigger, register, RegisterTrigger, setServerError } from "../../../Store/Reducers/authMeReducer/actionCreators";
import AuthMeService from "../../../Service/AuthMeService";


function* loginWorker({ payload }: LoginTrigger): any {

    const { email, password } = payload;

    try {

        const response = yield call(() => AuthMeService.login(email, password));
        const { token, id, username } = response.data.authenticateResponse;

        yield put(login.success({ token, email, id, username }));

    } catch (e: any) {

        if (e.response.status === 400) {
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

        if (status === 200) {
            const response = yield call(() => AuthMeService.login(email, password));
            const { token, id } = response.data.authenticateResponse;

            yield put(login.success({ token, email, id, username }));
        }

    } catch (e: any) {

        if (e.response.status === 422) {
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