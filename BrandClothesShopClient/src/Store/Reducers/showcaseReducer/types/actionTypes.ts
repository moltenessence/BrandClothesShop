import {order, setItemsCollection, toggleIsFetching} from '../actionCreators';


export type SetItemsCollection = ReturnType<typeof setItemsCollection.success>;
export type SetItemsCollectionTrigger = ReturnType<typeof setItemsCollection>;

export type ToggleIsFetching = ReturnType<typeof toggleIsFetching>;

export type Order = ReturnType<typeof order>;


export type ActionTypes = SetItemsCollectionTrigger;