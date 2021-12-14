import {BackgroundAPI} from "./API";
import IBackgroundService, {IGetBackgroundResponseData} from "./interfaces/IBackgroundService";


const BackgroundService: IBackgroundService = {

    async getBackground() {
        return await BackgroundAPI.get<IGetBackgroundResponseData>("http://localhost:60671/api/background/homepage").then(response => ({
            url: response.data.url,
            status: response.status,
        }));
    },
}

export default BackgroundService;