import {BackgroundAPI} from "./API";

export default class BackgroundService {

    static async getBackground() {
        return BackgroundAPI.get("http://localhost:60671/api/background/homepage").then(response => response.data);
    }
}