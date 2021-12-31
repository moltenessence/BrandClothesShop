import {ICartItem} from "./reducerTypes";

export interface IGetCartItemsSuccess {
    itemCollection: ICartItem[],
}

export type RemoveCartItemPayload = Pick<ICartItem, 'itemId'>
export type RemoveCartItemSuccess = Omit<RemoveCartItemPayload, 'userId'>