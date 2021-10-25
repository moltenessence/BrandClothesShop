import { ItemsCollection } from "./showcaseReducer";


export interface IToggleIsFetching {
    isFetching: boolean,
}

export interface ISetItemsCollection {
    itemsCollection?: ItemsCollection,
    itemType?: string,
}