import { ItemsCollection } from "./reducerTypes";


export interface IToggleIsFetching {
    isFetching: boolean,
}

export interface ISetItemsCollection {
    itemsCollection?: ItemsCollection,
    itemType?: string,
}