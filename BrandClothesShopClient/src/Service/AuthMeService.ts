import {AuthMeAPI} from "./API"
import {IResponse} from "../Components/Common/commonInterfaces/commonInterfaces";


interface ILoginResponseData extends IResponse {
    token: string,
    id: number,
    username: string,
    refreshToken: string,
}

export interface ILoginResponse extends IResponse, ILoginResponseData {
}


interface IRegisterResponseData {
    username: string,
    email: string,
}

export interface IRegisterResponse extends IResponse, IRegisterResponseData {
}


export default class AuthMeService {

    static async login(email: string, password: string) {
        return await AuthMeAPI.post
            < ILoginResponseData >
            ('/account/authenticate', {
                email,
                password,
            }).then(response => ({
                status: response.status,
                token: response.data.token,
                id: response.data.id,
                username: response.data.username,
                refreshToken: response.data.refreshToken,
            }));
    }

    static async register(username: string | undefined, email: string, password: string) {
        return await AuthMeAPI.post
            < IRegisterResponseData >
            ('/account/register', {
                username,
                email,
                password,
            }).then(response => ({
                status: response.status,
                username: response.data.username,
                email: response.data.email,
            }));
    }

    static async refreshToken() {
        return await AuthMeAPI.post
            < IRegisterResponse >
            ('/account/refresh-token', {
                Token: localStorage.getItem('token'),
                RefreshToken: localStorage.getItem('refreshToken'),
            });
    }
}