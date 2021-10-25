import { createRoutine } from 'redux-saga-routines';
import { ISetItemsCollection, IToggleIsFetching } from './actionPayloadTypes';

export const setItemsCollection = createRoutine<ISetItemsCollection>('showcase/SET_ITEMS_COLLECTION');
export type SetItemsCollection = ReturnType<typeof setItemsCollection>;

export const toggleIsFetching = createRoutine<IToggleIsFetching>('showcase/TOGGLE_IS_FETCHING');
export type ToggleIsFetching = ReturnType<typeof toggleIsFetching>;

export type ActionTypes = SetItemsCollection;