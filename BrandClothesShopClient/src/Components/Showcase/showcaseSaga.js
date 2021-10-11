import { call, takeEvery, put } from "redux-saga/effects";
import * as axios from "axios";
import { setItemsCollection, toggleIsFetching } from "../../Store/Reducers/showcaseReducer/showcaseReducer";

function* setItemsCollectionWorker(action) {
    const { itemType } = action.payload;
    try {        
        yield put(toggleIsFetching({ isFetching: true }));

        const itemsCollection = yield call(() => {
            return axios.get(`http://localhost:60671/api/items/${itemType}/?page=1&count=2`).then(response => response.data.items);
        });
        yield put(setItemsCollection.success({ itemsCollection }));
        yield put(toggleIsFetching({ isFetching: false }));

    } catch (error) {
        console.log(error);
    } finally {
        yield put(setItemsCollection.fulfill());
    }
}

export function* setItemsCollectionWatcher() {    
    yield takeEvery(setItemsCollection.TRIGGER, setItemsCollectionWorker);
}