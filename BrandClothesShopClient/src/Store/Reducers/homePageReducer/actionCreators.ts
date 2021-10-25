import createRoutine from '../../../Components/Common/utils/createRoutine/createRoutine';
import { ISetBackground } from './actionPayloadTypes';

export const setBackground = createRoutine<ISetBackground>('homePage/SET_BACKGROUND');
export type SetBackground = ReturnType<typeof setBackground>;

export type ActionTypes = SetBackground;