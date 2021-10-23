import { ShowcaseAPI } from "./API";

export default class ShowcaseService {

    static async getItemsCollection(itemType) {
        return ShowcaseAPI.get(`http://localhost:60671/api/items/${itemType}/?page=1&count=2`).then(response => response.data.items);
    }
}