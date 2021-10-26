import { put, takeEvery } from '@redux-saga/core/effects';
import { setBackground } from '../../../Store/Reducers/homePageReducer/actionCreators';
import {SetBackground} from '../../../Store/Reducers/homePageReducer/types/actionTypes';

function* setBackgroundWorker({ payload }: SetBackground) {
    const url = payload?.url;
    const { success } = setBackground;
    try {
        if (url) yield put(success({ url }))
    } catch (e) {
        console.log(e);
    }
}

export function* setBackgroundWatcher() {
    yield takeEvery(setBackground.TRIGGER, setBackgroundWorker);
}