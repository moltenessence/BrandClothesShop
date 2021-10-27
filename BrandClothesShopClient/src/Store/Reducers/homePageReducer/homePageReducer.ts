import { createReducer } from '@reduxjs/toolkit';
import { setBackground } from './actionCreators';
import { SetBackground } from './types/actionTypes';
import { IHomePageState } from './types/reducerTypes';


const intialState: IHomePageState = {
    backgroundUrl: '',
}

const homePage = createReducer(
    intialState,
    {
        [setBackground.SUCCESS]: (state, { payload }: SetBackground) => {
            state.backgroundUrl = payload.url;
        }
    }
);

export default homePage;