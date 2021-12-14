import {IResponse} from "../../Components/Common/commonInterfaces/commonInterfaces";

export interface IGetBackgroundResponseData {
    url: string,
}

export interface IGetBackgroundResponse extends IResponse, IGetBackgroundResponseData {
}

export default interface IBackgroundService {
    getBackground: () => Promise<IGetBackgroundResponse>,
}