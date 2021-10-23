import { createReducer } from '@reduxjs/toolkit';
import { login } from './actionCreators';


const authMe = createReducer(
    {
        isAuth: false,
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