import { call, takeEvery, put } from "redux-saga/effects";
import * as axios from "axios";
import { setItemsCollection } from "../../Store/Reducers/showcaseReducer/showcaseReducer";

function* setItemsCollectionWorker(action) {
    const { success, fulfill } = setItemsCollection;
    const { itemType } = action.payload;

    try {
        const itemsCollection = yield call(() => {
            return axios.get(`http://localhost:60671/api/items/${itemType}/?page=1&count=10`).then(response => response.data.items);
        });

        yield put(success({ itemsCollection }));
    } catch (error) {
        console.log(error);
    } finally {
        yield put(fulfill());
    }
}

export function* setItemsCollectionWatcher() {
    yield takeEvery(setItemsCollection.TRIGGER, setItemsCollectionWorker);
}