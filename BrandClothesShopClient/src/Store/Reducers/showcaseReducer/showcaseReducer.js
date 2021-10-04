import { createReducer } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

export const setItemsCollection = createRoutine('showcase/SET_ITEMS_COLLECTION');
export const toggleIsFetching = createRoutine('showcase/TOGGLE_IS_FETCHING');

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