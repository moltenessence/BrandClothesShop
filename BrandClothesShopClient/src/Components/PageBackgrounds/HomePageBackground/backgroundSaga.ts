import {put, takeEvery} from '@redux-saga/core/effects';
import {setBackground} from '../../../Store/Reducers/homePageReducer/actionCreators';
import {call} from "redux-saga/effects";
import {CommonCodes} from "../../../Service/statusCodes";
import {IGetBackgroundResponse} from "../../../Service/interfaces/IBackgroundService";
import BackgroundService from "../../../Service/BackgroundService";

function* setBackgroundWorker() {
    const {success} = setBackground;

    try {
        const {url, status}: IGetBackgroundResponse = yield call(() => BackgroundService.getBackground());

        if (status === CommonCodes.Success) {
            yield put(success({url}))
        }
    } catch (e) {
        console.log(e);
    }
}

export function* setBackgroundWatcher() {
    yield takeEvery(setBackground.TRIGGER, setBackgroundWorker);
}