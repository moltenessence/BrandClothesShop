import { put, takeEvery } from '@redux-saga/core/effects';
import { setBackground } from '../../../Store/Reducers/homePageReducer/actionCreators';

function* setBackgroundWorker(action) {
    const { url } = action.payload;
    const { success, fulfill } = setBackground;
    try {
        yield put(success({ url }))
    } catch (e) {
        console.log(e);
    } finally {
        yield put(fulfill());
    }
}

export function* setBackgroundWatcher() {
    yield takeEvery(setBackground.TRIGGER, setBackgroundWorker);
}