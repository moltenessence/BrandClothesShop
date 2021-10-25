import { createReducer } from '@reduxjs/toolkit';
import { setBackground } from './actionCreators';

interface IHomePageState {
    backgroundUrl: string,
}

const intialState: IHomePageState = {
    backgroundUrl: '',
}

const homePage = createReducer(
    intialState,
    {
        [setBackground.SUCCESS]: (state, action) => {
            state.backgroundUrl = action.payload.url;
        }
    }
);

export default homePage;