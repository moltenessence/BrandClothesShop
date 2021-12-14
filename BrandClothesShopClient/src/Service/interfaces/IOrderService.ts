import {IResponse} from "../../Components/Common/commonInterfaces/commonInterfaces";

export interface IOrderResponseData {
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

export default interface IOrderService {
    Order: (UserId: number | null, ItemId: number, Size: string) => Promise<IOrderResponse>,
}