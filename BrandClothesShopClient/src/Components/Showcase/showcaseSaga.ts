import { call, takeEvery, put } from "redux-saga/effects";
import { SetItemsCollection, setItemsCollection, toggleIsFetching } from "../../Store/Reducers/showcaseReducer/actionCreators";
import ShowcaseService from "../../Service/ShowcaseService";
import { ItemsCollection } from "../../Store/Reducers/showcaseReducer/showcaseReducer";

function* setItemsCollectionWorker({ payload }: SetItemsCollection) {

    const itemType = payload?.itemType;

    try {
        yield put(toggleIsFetching({ isFetching: true }));

        if (itemType) {
            const itemsCollection: ItemsCollection = yield call(() => ShowcaseService.getItemsCollection(itemType));

            yield put(setItemsCollection.success({ itemsCollection }));
            yield put(toggleIsFetching({ isFetching: false }));
        }

    } catch (error) {
        console.log(error);
    }
}

export function* setItemsCollectionWatcher() {
    yield takeEvery(setItemsCollection.TRIGGER, setItemsCollectionWorker);
}