import {addItemToCart, getCartItems, removeCartItem} from "../actionCreators";

export type SetCartItems = ReturnType<typeof getCartItems.success>;
export type AddItemToCart = ReturnType<typeof addItemToCart>;

export type RemoveCartItem = ReturnType<typeof removeCartItem>
export type CartItemRemoved = ReturnType<typeof removeCartItem.success>