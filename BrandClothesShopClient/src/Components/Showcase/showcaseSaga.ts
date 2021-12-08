import {call, delay, put, takeEvery} from "redux-saga/effects";
import {order, setItemsCollection, toggleIsFetching} from "../../Store/Reducers/showcaseReducer/actionCreators";
import {Order, SetItemsCollectionTrigger} from "../../Store/Reducers/showcaseReducer/types/actionTypes"
import ShowcaseService from "../../Service/ShowcaseService";
import {ItemsCollection} from "../../Store/Reducers/showcaseReducer/types/reducerTypes";
import OrderService from "../../Service/OrderService";
import {CommonCodes, OrderCodes} from "../../Service/statusCodes";
import AuthMeService from "../../Service/AuthMeService";
import {IRefreshTokenResponse} from "../Common/commonInterfaces/commonInterfaces";

function* setItemsCollectionWorker<T extends SetItemsCollectionTrigger>({payload}: T) {

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
    status: number,
    // orderId: number,
    // purchaseTime: string,
    // userId: number,
    // clothesItemId: number,
    // size: string,
    // price: number,
    // name: string
}

function* orderWorker<T extends Order>({payload}: T) {
    const {UserId, ItemId, Size} = payload;
    // const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));
    try {
        const response: IOrderResponse = yield call(() => OrderService.Order(UserId, ItemId, Size));
        if (response.status === OrderCodes.Success) {
            yield put(order.success());
            yield delay(800);
            yield put(order.success());
        }
    } catch (e: any) {
        if (e.response.status === OrderCodes.Error) {
            yield put(order.error());
            yield delay(1500);
            yield put(order.error());
        } else if (e.response.status === CommonCodes.invalidToken) {
            const {data: {token, refreshToken}}: IRefreshTokenResponse = yield call(() => AuthMeService.refreshToken());

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);

            yield put(order(payload));
        }
    }
}

export function* setItemsCollectionWatcher() {
    yield takeEvery(setItemsCollection.TRIGGER, setItemsCollectionWorker);
    yield takeEvery(order.TRIGGER, orderWorker)
    // yield takeEvery(order.TRIGGER, orderWorker);
}