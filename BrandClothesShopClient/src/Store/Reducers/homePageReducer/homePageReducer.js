import { createReducer } from '@reduxjs/toolkit';
import { setBackground } from './actionCreators';

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