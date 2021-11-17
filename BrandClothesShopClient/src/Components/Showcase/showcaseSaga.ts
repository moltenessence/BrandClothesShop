import {call, takeEvery, put} from "redux-saga/effects";
import {order, setItemsCollection, toggleIsFetching} from "../../Store/Reducers/showcaseReducer/actionCreators";
import {Order, SetItemsCollectionTrigger} from "../../Store/Reducers/showcaseReducer/types/actionTypes"
import ShowcaseService from "../../Service/ShowcaseService";
import {ItemsCollection} from "../../Store/Reducers/showcaseReducer/types/reducerTypes";
import OrderService from "../../Service/OrderService";

function* setItemsCollectionWorker({payload}: SetItemsCollectionTrigger) {

    const itemType = payload.itemType;

    try {
        yield put(toggleIsFetching({isFetching: true}));

        if (itemType) {

            const itemsCollection: ItemsCollection = yield call(() => ShowcaseService.getItemsCollection(itemType));

            yield put(setItemsCollection.success({itemsCollection}));
            yield put(toggleIsFetching({isFetching: false}));
        }

    } catch (error) {
        console.log(error);
    }
}

interface IOrderResponse {
    orderId: number,
    purchaseTime: string,
    userId: number,
    clothesItemId: number,
    size: string,
    price: number,
    name: string
}

function* orderWorker<T extends Order>({payload}: T) {
    const {UserId, ItemId, Size} = payload;
    try {
        const response: IOrderResponse = yield call(() => OrderService.Order(UserId, ItemId, Size));
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export function* setItemsCollectionWatcher() {
    yield takeEvery(setItemsCollection.TRIGGER, setItemsCollectionWorker);
    yield takeEvery(order.TRIGGER, orderWorker);
}