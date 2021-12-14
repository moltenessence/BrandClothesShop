import {call, delay, put, takeEvery, takeLatest} from "redux-saga/effects";
import {order, setItemsCollection, toggleIsFetching} from "../../Store/Reducers/showcaseReducer/actionCreators";
import {Order, SetItemsCollectionTrigger} from "../../Store/Reducers/showcaseReducer/types/actionTypes"
import ShowcaseService from "../../Service/ShowcaseService";
import OrderService from "../../Service/OrderService";
import {CommonCodes, OrderCodes} from "../../Service/statusCodes";
import AuthMeService from "../../Service/AuthMeService";
import {IGetItemsCollectionResponse} from "../../Service/interfaces/IShowcaseService";
import {IOrderResponse} from "../../Service/interfaces/IOrderService";
import {IRefreshTokenResponse} from "../../Service/interfaces/IAuthMeService";

function* setItemsCollectionWorker<T extends SetItemsCollectionTrigger>({payload}: T) {

    const itemType: string = payload.itemType;

    try {
        yield put(toggleIsFetching({isFetching: true}));

        if (itemType) {

            const {
                items,
                status
            }: IGetItemsCollectionResponse = yield call(() => ShowcaseService.getItemsCollection(itemType));

            if (status === CommonCodes.Success) {
                yield put(setItemsCollection.success({itemsCollection: items}));
                yield put(toggleIsFetching({isFetching: false}));
            }
        }

    } catch (e) {
        console.log(e);
    }
}


function* orderWorker<T extends Order>({payload}: T) {
    const {UserId, ItemId, Size} = payload;

    try {
        const {status}: IOrderResponse = yield call(() => OrderService.Order(UserId, ItemId, Size));
        if (status === OrderCodes.Success) {
            yield put(order.success());
            yield delay(1500);
            yield put(order.success());
        }
    } catch (e: any) {
        if (e.response.status === OrderCodes.Error) {
            yield put(order.error());
            yield delay(1500);
            yield put(order.error());
        } else if (e.response.status === CommonCodes.invalidToken) {
            const {token, refreshToken}: IRefreshTokenResponse = yield call(() => AuthMeService.refreshToken());

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);

            yield put(order(payload));
        }
    }
}

export function* setItemsCollectionWatcher() {
    yield takeEvery(setItemsCollection.TRIGGER, setItemsCollectionWorker);
    yield takeLatest(order.TRIGGER, orderWorker);
}