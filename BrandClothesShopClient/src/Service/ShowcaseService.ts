import {ShowcaseAPI} from "./API";
import IShowcaseService, {IGetItemsCollectionResponseData} from "./interfaces/IShowcaseService";


const ShowcaseService: IShowcaseService = {

    async getItemsCollection(itemType: string) {
        return await ShowcaseAPI.get
            < IGetItemsCollectionResponseData >
            (`http://localhost:60671/api/items/${itemType}/?page=1&count=20`).then(response => ({
                items: response.data.items,
                status: response.status,
            }));
    }
}

export default ShowcaseService;