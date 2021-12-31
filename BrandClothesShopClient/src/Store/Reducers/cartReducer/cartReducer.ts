import {ICartState} from "./types/reducerTypes";
import {createReducer} from "@reduxjs/toolkit";
import {getCartItems, removeCartItem} from "./actionCreators";
import {CartItemRemoved, SetCartItems} from "./types/actionTypes";

const initialState: ICartState = {
    itemCollection: []
}

export const cart = createReducer(initialState, {
    [getCartItems.SUCCESS]: (state, action: SetCartItems) => {
        state.itemCollection = action.payload.itemCollection;
    },
    [removeCartItem.SUCCESS]: (state, {payload: {itemId}}: CartItemRemoved) => {
        state.itemCollection = state.itemCollection.filter((item) => item.itemId !== itemId);
    },
});