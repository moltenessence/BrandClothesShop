import { call, takeEvery, put } from "redux-saga/effects";
import { setItemsCollection, toggleIsFetching } from "../../Store/Reducers/showcaseReducer/actionCreators";
import { SetItemsCollectionTrigger } from "../../Store/Reducers/showcaseReducer/types/actionTypes"
import ShowcaseService from "../../Service/ShowcaseService";
import { ItemsCollection } from "../../Store/Reducers/showcaseReducer/types/reducerTypes";

function* setItemsCollectionWorker({ payload }: SetItemsCollectionTrigger) {

    const itemType = payload.itemType;

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