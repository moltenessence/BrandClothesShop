import { createReducer } from '@reduxjs/toolkit';
import { toggleIsFetching, setItemsCollection } from './actionCreators';

const showcase = createReducer(
    {
        itemsCollection: [],
        isFetching: false,
    },
    {
        [setItemsCollection.SUCCESS]: (state, action) => {
            state.itemsCollection = action.payload.itemsCollection;
        },
        [toggleIsFetching.TRIGGER]: (state, action) => {
            state.isFetching = action.payload.isFetching;
        },
    }
);

export default showcase;