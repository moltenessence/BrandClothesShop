import createRoutine from '../../../Components/Common/utils/createRoutine/createRoutine';
import { ISetItemsCollectionSuccess, ISetItemsCollectionTrigger, IToggleIsFetching } from './types/actionPayloadTypes';


export const setItemsCollection = createRoutine<ISetItemsCollectionTrigger, ISetItemsCollectionSuccess>('showcase/SET_ITEMS_COLLECTION');

export const toggleIsFetching = createRoutine<IToggleIsFetching>('showcase/TOGGLE_IS_FETCHING');
