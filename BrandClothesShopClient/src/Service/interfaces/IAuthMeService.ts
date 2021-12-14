import {IResponse} from "../../Components/Common/commonInterfaces/commonInterfaces";

export interface ILoginResponseData extends IResponse {
    token: string,
    id: number,
    username: string,
    refreshToken: string,
}

export interface ILoginResponse extends IResponse, ILoginResponseData {
}


export interface IRegisterResponseData {
    username: string,
    email: string,
}

export interface IRegisterResponse extends IResponse, IRegisterResponseData {
}


export interface IRefreshTokenResponseData {
    token: string,
    refreshToken: string,
    success: boolean,
    errors: string | null,
}

export interface IRefreshTokenResponse extends IResponse, IRefreshTokenResponseData {
}

export default interface IAuthMeService {
    login: (email: string, password: string) => Promise<ILoginResponse>,
    register: (username: string | undefined, email: string, password: string)=> Promise<IRegisterResponse>,
    refreshToken: () => Promise<IRefreshTokenResponse>,
}