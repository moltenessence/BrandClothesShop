import { ItemsCollection } from "../Store/Reducers/showcaseReducer/types/reducerTypes";
import { ShowcaseAPI } from "./API";


interface GetItemsCollectionResponse {
    items: ItemsCollection,
    total: number,
    statusCode: number,
}

export default class ShowcaseService {

    static async getItemsCollection(itemType: string) {
        return ShowcaseAPI.get
            <GetItemsCollectionResponse>
            (`http://localhost:60671/api/items/${itemType}/?page=1&count=20`).then(response => response.data.items);
    }
}