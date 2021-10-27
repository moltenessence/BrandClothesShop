import { ItemsCollection } from "./reducerTypes";


export interface IToggleIsFetching {
    isFetching: boolean,
}


export interface ISetItemsCollectionSuccess {
    itemsCollection: ItemsCollection,
}

export interface ISetItemsCollectionTrigger {
    itemType: string,
}
