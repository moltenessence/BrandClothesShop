import { createReducer } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

export const login = createRoutine('authMe/LOGIN');
export const register = createRoutine('authMe/REGISTER');

const authMe = createReducer(
    {
        isAuth: false,
        token: null,
    },
    {
        [login.SUCCESS]: (state, action) => {
            const { token } = action.payload;
            localStorage.setItem('token', token);
            state.isAuth = !state.isAuth;
        },
    }
);

export default authMe;