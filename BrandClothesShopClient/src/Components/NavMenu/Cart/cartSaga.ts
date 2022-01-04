import {call, delay, put, select, takeEvery, fork} from "redux-saga/effects";
import {IGetCartItemsResponse} from "../../../Service/interfaces/ICartService";
import CartService from "../../../Service/CartService";
import {CommonCodes} from "../../../Service/statusCodes";
import {addItemToCart, getCartItems, removeCartItem} from "../../../Store/Reducers/cartReducer/actionCreators";
import {RootState} from "../../../Store/store";
import {AddItemToCart, RemoveCartItem} from "../../../Store/Reducers/cartReducer/types/actionTypes";
import {IRefreshTokenResponse} from "../../../Service/interfaces/IAuthMeService";
import AuthMeService from "../../../Service/AuthMeService";
import {Task} from "redux-saga";
import {order} from "../../../Store/Reducers/showcaseReducer/actionCreators";


const selectUserId = (state: RootState) => state.authMe.userId;

function* getCartItemsWorker(): unknown {
    try {
        const userId: number = yield select(selectUserId);

        const response: IGetCartItemsResponse = yield call(() => CartService.getCartItems(userId));
        const {items, status} = response

        if (status === CommonCodes.Success) {
            yield put(getCartItems.success({itemCollection: items}));
        }
    } catch (e: any) {
        if (e.response && e.response.status === CommonCodes.invalidToken) {
            const {token, refreshToken}: IRefreshTokenResponse = yield call(() => AuthMeService.refreshToken());

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);

            yield fork(getCartItemsWorker);
        }else{
            console.log(e)
        }
    }
}

function* addItemToCartWorker(action: AddItemToCart): unknown {
    const itemInfo = action.payload;

    try {
        if (!itemInfo.userId) throw new Error('Unauthorized!');
        if (itemInfo.size === '') throw new Error('Size is required!');

        const status: number = yield call(() => CartService.addItemToCart(itemInfo));
        console.log(status);

    } catch (e: any) {
        if (e.response && e.response.status === CommonCodes.invalidToken) {
            const {token, refreshToken}: IRefreshTokenResponse = yield call(() => AuthMeService.refreshToken());

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);

            console.log(action.payload)
            // yield put(addItemToCart(action.payload))
            yield fork(addItemToCartWorker, action);
        }

        console.log(e);
    }
}


function* removeCartItemWorker(action: RemoveCartItem): unknown {
    const {itemId} = action.payload;
    const userId: number = yield select((state: RootState) => state.authMe.userId);
    if (!userId) throw new Error('Unauthorized!');

    try {
        const status: number = yield call(() => CartService.removeCartItem(itemId, userId));
        if (status !== CommonCodes.Success) throw new Error('Some error occurred!');

        yield put(removeCartItem.success({itemId}))
    } catch (e: any) {
        if (e.response && e.response.status === CommonCodes.invalidToken) {
            const {token, refreshToken}: IRefreshTokenResponse = yield call(() => AuthMeService.refreshToken());

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);

            // yield put(removeCartItem(action.payload));
            yield fork(removeCartItemWorker, action);
        }

        console.log(e);
    }
}


export function* cartWatcher() {
    yield takeEvery(getCartItems.TRIGGER, getCartItemsWorker);
    yield takeEvery(addItemToCart.TRIGGER, addItemToCartWorker);
    yield takeEvery(removeCartItem.TRIGGER, removeCartItemWorker);
}