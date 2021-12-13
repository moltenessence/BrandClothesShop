import {ItemsCollection} from "../Store/Reducers/showcaseReducer/types/reducerTypes";
import {ShowcaseAPI} from "./API";
import {CommonCodes} from "./statusCodes";
import {IResponse} from "../Components/Common/commonInterfaces/commonInterfaces";


interface IGetItemsCollectionResponseData {
    items: ItemsCollection,
    total: number,
}

export interface IGetItemsCollectionResponse extends IResponse{
    items: ItemsCollection,
}

export default class ShowcaseService {

    static async getItemsCollection(itemType: string) {
        return await ShowcaseAPI.get
            < IGetItemsCollectionResponseData >
            (`http://localhost:60671/api/items/${itemType}/?page=1&count=20`).then(response => ({
                items: response.data.items,
                status: response.status,
            }));
    }
}