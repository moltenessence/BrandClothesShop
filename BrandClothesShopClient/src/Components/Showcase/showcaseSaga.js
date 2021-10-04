import { call, takeEvery, put } from "redux-saga/effects";
import * as axios from "axios";
import { setItemsCollection } from "../../Store/Reducers/showcaseReducer/showcaseReducer";

function* setItemsCollectionWorker(action) {
    const { success, fulfill } = setItemsCollection;

    try {
        const itemsCollection = yield call(() => {
            return axios.get('http://localhost:60671/api/items/t-shirt/?page=1&count=10').then(response => response.data.items);
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