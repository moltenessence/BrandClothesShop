import { call, takeEvery, put } from "redux-saga/effects";
import { login, register } from "../../../Store/Reducers/authMeReducer/actionCreators";
import AuthMeService from "../../../Service/AuthMeService";

function* loginWorker(action) {

    const { email, password } = action.payload;

    try {

        const response = yield call(() => AuthMeService.login(email, password));
        const { token, id, username } = response.data.authenticateResponse;

        yield put(login.success({ token, email, id, username }));

    } catch (e) {
        console.log(e);
    }
}

function* registerWorker(action) {

    const { username, email, password } = action.payload;

    try {

        const { status } = yield call(() => AuthMeService.register(username, email, password));

        if (status === 200) {
            const response = yield call(() => AuthMeService.login(email, password));
            const { token, id } = response.data.authenticateResponse;

            yield put(login.success({ token, email, id, username }));
        }

    } catch (e) {
        console.log(e)
    }
}

export function* authMeWatcher() {
    yield takeEvery(login.TRIGGER, loginWorker);
    yield takeEvery(register.TRIGGER, registerWorker);
}