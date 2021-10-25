import { createReducer } from '@reduxjs/toolkit';
import { login, Login, logout, SetServerError, setServerError } from './actionCreators';


interface IAuthMeState {
    isAuth: boolean,
    userId: number | null,
    userName: string | null | undefined,
    email: string | null,
    serverError: string | null,
}

const initialState: IAuthMeState = {
    isAuth: false,
    userId: null,
    userName: null,
    email: null,
    serverError: null,
}


const authMe = createReducer(
    initialState,
    {
        [login.SUCCESS]: (state, { payload }: Login) => {

            const { token, username, id, email } = payload;

            localStorage.setItem('token', token);
            state.isAuth = true;
            state.userId = id;
            state.email = email;
            state.userName = username;
        },

        [logout.TRIGGER]: (state) => {
            state.isAuth = false;
            localStorage.removeItem('token');
        },

        [setServerError.TRIGGER]: (state, { payload }: SetServerError) => {
            if (payload) state.serverError = payload.message;
        }
    }
);

export default authMe;