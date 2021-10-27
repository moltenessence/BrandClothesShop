import { createReducer } from '@reduxjs/toolkit';
import { toggleIsFetching, setItemsCollection } from './actionCreators';
import { ToggleIsFetching, SetItemsCollection } from './types/actionTypes';
import { IShowcaseState } from './types/reducerTypes';


const intialState: IShowcaseState = {
    itemsCollection: [],
    isFetching: false,
}

const showcase = createReducer(
    intialState,
    {
        [setItemsCollection.SUCCESS]: (state, { payload }: SetItemsCollection) => {
            state.itemsCollection = payload.itemsCollection;
        },
        [toggleIsFetching.TRIGGER]: (state, { payload }: ToggleIsFetching) => {
            state.isFetching = payload.isFetching;
        },
    }
);

export default showcase;