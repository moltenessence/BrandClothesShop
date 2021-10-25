import { createReducer } from '@reduxjs/toolkit';
import { toggleIsFetching, setItemsCollection, ToggleIsFetching, SetItemsCollection } from './actionCreators';


export type Photo = {
    url: string,
}

type Item = {
    clothesItemId: number,
    modelName: string,
    brand: string,
    size: string,
    description: string,
    price: number,
    type: string,
    photos: Photo[],
}

export type ItemsCollection = Array<Item>;

interface IShowcaseState {
    itemsCollection: ItemsCollection,
    isFetching: boolean,
}

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