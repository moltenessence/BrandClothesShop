import { call, takeEvery, put } from "redux-saga/effects";
import { login } from "../../Store/Reducers/authMeReducer/authMeReducer";
import AuthMeService from "../../Service/AuthMeService";

function* loginWorker(action) {
    
    const { email, password } = action.payload;
    try {
        const response = yield call(() => {
            return AuthMeService.login(email, password);
        });

        const { token } = response.data.authenticateResponse;
        yield put(login.success({ token }));

    } catch (error) {
        console.log(error);
    }
}

export function* loginWatcher() {
    yield takeEvery(login.TRIGGER, loginWorker);
}