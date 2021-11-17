import {createReducer} from '@reduxjs/toolkit';
import {login, logout, setServerError} from './actionCreators';
import {IAuthMeState} from './types/reducerTypes';
import {Login, SetServerError} from './types/actionTypes'


const initialState: IAuthMeState = {
    isAuth: false,
    userId: null,
    userName: null,
    email: null,
    serverError: '',
}


const authMe = createReducer(
    initialState,
    {
        [login.SUCCESS]: (state, {payload}: Login) => {

            const {token, username, id, email} = payload;

            localStorage.setItem('token', token);
            state.isAuth = true;
            state.userId = id;
            state.email = email;
            state.userName = username;
        },

        [logout.TRIGGER]: (state) => {
            state.isAuth = false;
            state.userId = null;
            state.email = null;
            state.userName = null;
            localStorage.removeItem('token');
        },

        [setServerError.TRIGGER]: (state, {payload}: SetServerError) => {
            state.serverError = payload.message;
        }
    }
);

export default authMe;