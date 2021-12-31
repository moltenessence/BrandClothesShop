import {all} from 'redux-saga/effects';
import {authMeWatcher} from '../Components/AuthMe/AuthMeSaga/authMeSaga';
import {setBackgroundWatcher} from '../Components/PageBackgrounds/HomePageBackground/backgroundSaga';
import {setItemsCollectionWatcher} from '../Components/Showcase/showcaseSaga';
import {cartWatcher} from "../Components/NavMenu/Cart/cartSaga";

export default function* saga() {
    yield all([
        setBackgroundWatcher(),
        authMeWatcher(),
        setItemsCollectionWatcher(),
        cartWatcher(),
    ])
}