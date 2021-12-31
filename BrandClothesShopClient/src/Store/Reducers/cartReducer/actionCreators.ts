import createRoutine from "../../../Components/Common/utils/createRoutine/createRoutine";
import {IGetCartItemsSuccess, RemoveCartItemPayload, RemoveCartItemSuccess} from "./types/actionPayloadTypes";
import {IItemToAdd} from "../homePageReducer/types/actionPayloadTypes";


export const getCartItems = createRoutine<any, IGetCartItemsSuccess>('cart/GET_CART_ITEMS');
export const addItemToCart = createRoutine<any, IItemToAdd>('cart/ADD_ITEM_TO_CART');
export const removeCartItem = createRoutine<RemoveCartItemPayload, RemoveCartItemSuccess>('REMOVE_CART_ITEM');
