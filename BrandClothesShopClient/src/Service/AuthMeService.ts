import {AuthMeAPI} from "./API"
import IAuthMeService, {
    ILoginResponseData,
    IRefreshTokenResponseData,
    IRegisterResponseData
} from "./interfaces/IAuthMeService";


const AuthMeService: IAuthMeService = {

    async login(email: string, password: string) {
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
    },

    async register(username: string | undefined, email: string, password: string) {
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
    },

    async refreshToken() {
        return await AuthMeAPI.post
            < IRefreshTokenResponseData >
            ('/account/refresh-token', {
                Token: localStorage.getItem('token'),
                RefreshToken: localStorage.getItem('refreshToken'),
            }).then(response => ({
                status: response.status,
                token: response.data.token,
                refreshToken: response.data.refreshToken,
                success: response.data.success,
                errors: response.data.errors,

            }));
    },
}

export default AuthMeService;