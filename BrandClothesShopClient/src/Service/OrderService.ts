import {OrderAPI} from "./API";
import IOrderService, {IOrderResponseData} from "./interfaces/IOrderService";


const OrderService: IOrderService = {

    async Order(UserId: number | null, ItemId: number, Size: string) {
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

}

export default OrderService;