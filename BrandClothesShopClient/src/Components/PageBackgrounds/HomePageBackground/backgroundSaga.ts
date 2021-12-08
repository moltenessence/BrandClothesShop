import {put, takeEvery} from '@redux-saga/core/effects';
import {setBackground} from '../../../Store/Reducers/homePageReducer/actionCreators';
import BackgroundService from "../../../Service/BackgroundService";
import {call} from "redux-saga/effects";

function* setBackgroundWorker() {
    const url: string = yield call(() => BackgroundService.getBackground());
    const {success} = setBackground;
    try {
        yield put(success({url}))
    } catch (e) {
        console.log(e);
    }
}

export function* setBackgroundWatcher() {
    yield takeEvery(setBackground.TRIGGER, setBackgroundWorker);
}