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
            const itemsCollection = payload?.itemsCollection;
            if (itemsCollection) state.itemsCollection = itemsCollection;
        },
        [toggleIsFetching.TRIGGER]: (state, { payload }: ToggleIsFetching) => {
            const isFetching = payload?.isFetching;
            if (isFetching) state.isFetching = isFetching;
        },
    }
);

export default showcase;