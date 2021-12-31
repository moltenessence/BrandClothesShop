import {CartAPI} from "./API";
import ICartService, {GetCartItemsResponseData} from "./interfaces/ICartService";
import {IItemToAdd} from "../Store/Reducers/homePageReducer/types/actionPayloadTypes";


const CartService: ICartService = {

    async getCartItems(userId: number) {
        return await CartAPI.get<GetCartItemsResponseData>(`/cart/${userId}`).then(response => ({
            items: response.data,
            status: response.status,
        }));
    },

    async addItemToCart(itemInfo) {
        return await CartAPI.post<IItemToAdd>('/cart/add', itemInfo).then(response => response.status);
    },

    async removeCartItem(itemId, userId) {
        return await CartAPI.delete(`/cart/delete?userId=${userId}&itemId=${itemId}`).then(response => response.status);
    }
}

export default CartService;