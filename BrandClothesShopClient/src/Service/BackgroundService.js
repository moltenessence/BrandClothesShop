import { BackgroundAPI } from "./API";

export default class BackgroundService {

    static async getBackground(itemType) {
        return BackgroundAPI.get(`http://localhost:60671/api/items/${itemType}/?page=1&count=2`);
    }
}