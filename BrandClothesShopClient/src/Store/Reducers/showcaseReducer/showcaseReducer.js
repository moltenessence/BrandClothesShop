import { createReducer } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

export const setItemsCollection = createRoutine('showcase/SET_ITEMS_COLLECTION');

const showcase = createReducer(
    {
        itemsCollection: [],
    },
    {
        [setItemsCollection.SUCCESS]: (state, action) => {
            state.itemsCollection = action.payload.itemsCollection;
        }
    }
);

export default showcase;