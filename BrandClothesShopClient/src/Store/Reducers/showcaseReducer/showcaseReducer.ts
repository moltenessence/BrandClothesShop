import {createReducer} from '@reduxjs/toolkit';
import {toggleIsFetching, setItemsCollection, order} from './actionCreators';
import {ToggleIsFetching, SetItemsCollection} from './types/actionTypes';
import {IShowcaseState} from './types/reducerTypes';


const intialState: IShowcaseState = {
    itemsCollection: [],
    isFetching: false,
    orderSuccess: false,
    orderError: false,
}

const showcase = createReducer(
    intialState,
    {
        [setItemsCollection.SUCCESS]: (state, {payload}: SetItemsCollection) => {
            state.itemsCollection = payload.itemsCollection;
        },
        [toggleIsFetching.TRIGGER]: (state, {payload}: ToggleIsFetching) => {
            state.isFetching = payload.isFetching;
        },
        [order.SUCCESS]: (state) => {
            state.orderSuccess = !state.orderSuccess;
        },
        [order.ERROR]: (state) => {
            state.orderError = !state.orderError;
        },
    }
);

export default showcase;