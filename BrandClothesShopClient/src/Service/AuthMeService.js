import { AuthMeAPI } from "./API"

export default class {
    static async registration(username = '', email, password) {
        return AuthMeAPI.post('/account/register', {
            username,
            email,
            password,
        });
    }
}