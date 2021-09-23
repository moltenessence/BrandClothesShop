import { all } from 'redux-saga/effects';
import { setBackgroundWatcher } from '../Components/PageBackgrounds/HomePageBackground/backgroundSaga';

export default function* saga() {
    yield all([
        setBackgroundWatcher(),
    ])
}