import {ItemsCollection} from "../../Store/Reducers/showcaseReducer/types/reducerTypes";
import {IResponse} from "../../Components/Common/commonInterfaces/commonInterfaces";

export interface IGetItemsCollectionResponseData {
    items: ItemsCollection,
    total: number,
}

export interface IGetItemsCollectionResponse extends IResponse {
    items: ItemsCollection,
}

export default interface IShowcaseService {
    getItemsCollection: (itemType: string) => Promise<IGetItemsCollectionResponse>,
}