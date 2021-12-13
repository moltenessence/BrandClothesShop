import {OrderAPI} from "./API";
import {IResponse} from "../Components/Common/commonInterfaces/commonInterfaces";


interface IOrderResponseData {
    orderId: number,
    purchaseTime: string,
    userId: number,
    clothesItemId: number,
    size: string,
    price: number,
    name: string
}

export interface IOrderResponse extends IResponse {
}


interface IGetOrdersResponse {
    orderId: number,
    purchaseTime: string,
    userId: number,
    clothesItemId: number,
    size: string,
    price: number,
    name: string,
}

export default class OrderService {

    static async Order(UserId: number | null, ItemId: number, Size: string) {
        return OrderAPI.post
            < IOrderResponseData >
            ('/orders/purchase', {
                UserId,
                ItemId,
                Size,
            }).then(response => ({
                status: response.status,
            }));
    }

    static async getOrders(UserId: number) {
        return OrderAPI.get
            < IGetOrdersResponse >
            (`/orders/${UserId}`);
    }
}