import {BackgroundAPI} from "./API";
import {IResponse} from "../Components/Common/commonInterfaces/commonInterfaces";

interface IGetBackgroundResponseData {
    url: string,
}

export interface IGetBackgroundResponse extends IResponse, IGetBackgroundResponseData {
}

export default class BackgroundService{

    static async getBackground() {
        return await BackgroundAPI.get<IGetBackgroundResponseData>("http://localhost:60671/api/background/homepage").then(response => ({
            url: response.data,
            status: response.status,
        }));
    }
}