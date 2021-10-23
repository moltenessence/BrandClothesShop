import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from './actionCreators';


const authMe = createReducer(
    {
        isAuth: false,
        userId: null,
        userName: null,
        email: null,
    },
    {
        [login.SUCCESS]: (state, action) => {
            const { token, username, id, email } = action.payload;
            localStorage.setItem('token', token);
            state.isAuth = true;
            state.userId = id;
            state.email = email;
            state.userName = username;
        },
        [logout.TRIGGER]: (state) => {
            state.isAuth = false;
            localStorage.removeItem('token');
        }
    }
);

export default authMe;