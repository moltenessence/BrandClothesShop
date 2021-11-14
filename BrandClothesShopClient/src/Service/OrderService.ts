import {OrderAPI} from "./API";


interface OrderResponse {
    orderId: number,
    purchaseTime: string,
    userId: number,
    clothesItemId: number,
    size: string,
    price: number,
    name: string,
}

interface GetOrdersResponse {
    orderId: number,
    purchaseTime: string,
    userId: number,
    clothesItemId: number,
    size: string,
    price: number,
    name: string,
}

export default class OrderService {

    static async Order(UserId: number, ItemId: number, Size: string) {
        return OrderAPI.post
            < OrderResponse >
            ('/orders/purchase', {
                UserId,
                ItemId,
                Size,
            });
    }

    static async getOrders(UserId: number) {
        return OrderAPI.get
            < GetOrdersResponse >
            (`/orders/${UserId}`);
    }
}