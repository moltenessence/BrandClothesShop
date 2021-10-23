import { createReducer } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

export const login = createRoutine('authMe/LOGIN');

const authMe = createReducer(
    {
        isAuth: false,
        token: null,
    },
    {
        [login.SUCCESS]: (state, action) => {
            state.token = action.payload.token;
            state.isAuth = !state.isAuth;
        },
    }
);

export default authMe;