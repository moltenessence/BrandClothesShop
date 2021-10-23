import { AuthMeAPI } from "./API"

export default class AuthMeService {

    static async login(email, password) {
        return AuthMeAPI.post('/account/authenticate', {
            email,
            password,
        });
    }

    static async register(username, email, password) {
        return AuthMeAPI.post('/account/register', {
            username,
            email,
            password,
        });
    }
}