import {put, takeEvery} from '@redux-saga/core/effects';
import {setBackground} from '../../../Store/Reducers/homePageReducer/actionCreators';
import BackgroundService, {IGetBackgroundResponse} from "../../../Service/BackgroundService";
import {call} from "redux-saga/effects";
import {CommonCodes} from "../../../Service/statusCodes";

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