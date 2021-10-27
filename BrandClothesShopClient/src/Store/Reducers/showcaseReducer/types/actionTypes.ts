import { setItemsCollection, toggleIsFetching } from '../actionCreators';


export type SetItemsCollection = ReturnType<typeof setItemsCollection.success>;
export type SetItemsCollectionTrigger = ReturnType<typeof setItemsCollection>;

export type ToggleIsFetching = ReturnType<typeof toggleIsFetching>;


export type ActionTypes = SetItemsCollectionTrigger;