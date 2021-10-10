import { createReducer } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';

export const setBackground = createRoutine('homePage/SET_BACKGROUND');

const homePage = createReducer(
    {
        backgroundUrl: '',
    },
    {
        [setBackground.SUCCESS]: (state, action) => {
            state.backgroundUrl = action.payload.url;
        }
    }
);

export default homePage;