import {IResponse} from "../../Components/Common/commonInterfaces/commonInterfaces";
import {ICartItem} from "../../Store/Reducers/cartReducer/types/reducerTypes";
import {IItemToAdd} from "../../Store/Reducers/homePageReducer/types/actionPayloadTypes";

////
export type GetCartItemsResponseData = ICartItem[];

export interface IGetCartItemsResponse extends IResponse {
    items: GetCartItemsResponseData
}

export default interface ICartService {
    getCartItems: (userId: number) => Promise<IGetCartItemsResponse>,
    addItemToCart: (itemInfo: IItemToAdd) => Promise<number>,
    removeCartItem: (itemId: number, userId: number) => Promise<number>,
}