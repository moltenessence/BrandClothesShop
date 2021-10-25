import { BackgroundAPI } from "./API";

export default class BackgroundService {

    static async getBackground(itemType: string) {
        return BackgroundAPI.get(``);
    }
}