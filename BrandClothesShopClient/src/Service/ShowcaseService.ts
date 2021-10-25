import { ItemsCollection } from "../Store/Reducers/showcaseReducer/showcaseReducer";
import { ShowcaseAPI } from "./API";

type getItemsCollectionResponse = {
    items: ItemsCollection,
    total: number,
    statusCode: number,
}

export default class ShowcaseService {

    static async getItemsCollection(itemType: string) {
        return ShowcaseAPI.get
            <getItemsCollectionResponse>
            (`http://localhost:60671/api/items/${itemType}/?page=1&count=2`).then(response => response.data.items);
    }
}