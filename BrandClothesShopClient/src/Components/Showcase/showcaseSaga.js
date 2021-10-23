import { call, takeEvery, put } from "redux-saga/effects";
import { setItemsCollection, toggleIsFetching } from "../../Store/Reducers/showcaseReducer/actionCreators";
import ShowcaseService from "../../Service/ShowcaseService";

function* setItemsCollectionWorker(action) {
    const { itemType } = action.payload;
    try {        
        yield put(toggleIsFetching({ isFetching: true }));

        const itemsCollection = yield call(() => {
            return ShowcaseService.getItemsCollection(itemType);
        });
        yield put(setItemsCollection.success({ itemsCollection }));
        yield put(toggleIsFetching({ isFetching: false }));

    } catch (error) {
        console.log(error);
    }
}

export function* setItemsCollectionWatcher() {    
    yield takeEvery(setItemsCollection.TRIGGER, setItemsCollectionWorker);
}