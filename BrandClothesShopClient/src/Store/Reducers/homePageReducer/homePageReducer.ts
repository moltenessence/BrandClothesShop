import { createReducer } from '@reduxjs/toolkit';
import { SetBackground, setBackground } from './actionCreators';

interface IHomePageState {
    backgroundUrl: string,
}

const intialState: IHomePageState = {
    backgroundUrl: '',
}

const homePage = createReducer(
    intialState,
    {
        [setBackground.SUCCESS]: (state, { payload }: SetBackground) => {
            const url = payload?.url;
            if (url) state.backgroundUrl = url;
        }
    }
);

export default homePage;