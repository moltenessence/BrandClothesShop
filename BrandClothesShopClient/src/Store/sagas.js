import { all } from 'redux-saga/effects';
import { setBackgroundWatcher } from '../Components/PageBackgrounds/HomePageBackground/backgroundSaga';
import { setItemsCollectionWatcher } from '../Components/Showcase/showcaseSaga';

export default function* saga() {
    yield all([
        setBackgroundWatcher(),
        setItemsCollectionWatcher(),
    ])
}