import createRoutine from '../../../Components/Common/utils/createRoutine/createRoutine';
import {ISetBackground} from './types/actionPayloadTypes';

export const setBackground = createRoutine<any, ISetBackground>('homePage/SET_BACKGROUND');
