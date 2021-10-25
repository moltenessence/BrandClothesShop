import { AuthMeAPI } from "./API"

interface LoginResponsse {
    authenticateResponse: {
        id: number,
        username: string,
        email: string,
        token: string,
    },
    statusCode: number
}

interface RegisterResponse {
    registrationResponse: {
        username: string,
        email: string,
    },
    statusCode: number,
}

export default class AuthMeService {

    static async login(email: string, password: string) {
        return AuthMeAPI.post
            <LoginResponsse>
            ('/account/authenticate', {
                email,
                password,
            });
    }

    static async register(username: string | undefined, email: string, password: string) {
        return AuthMeAPI.post
            <RegisterResponse>
            ('/account/register', {
                username,
                email,
                password,
            });
    }
}