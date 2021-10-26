import createRoutine from '../../../Components/Common/utils/createRoutine/createRoutine';
import { ISetItemsCollection, IToggleIsFetching } from './types/actionPayloadTypes';

export const setItemsCollection = createRoutine<ISetItemsCollection>('showcase/SET_ITEMS_COLLECTION');

export const toggleIsFetching = createRoutine<IToggleIsFetching>('showcase/TOGGLE_IS_FETCHING');
