import { ILoginTrigger, ILoginSucces, ILogout, IRegister, ISetServerError } from './types/actionPayloadTypes';
import createRoutine from '../../../Components/Common/utils/createRoutine/createRoutine';


export const login = createRoutine<ILoginTrigger, ILoginSucces>('authMe/LOGIN');

export const logout = createRoutine<ILogout>('authMe/LOGOUT');

export const register = createRoutine<IRegister>('authMe/REGISTER');

export const setServerError = createRoutine<ISetServerError>('authMe/SET_SERVER_ERROR');
