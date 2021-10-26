import { ILogin, ILoginSucces, ILogout, IRegister, ISetServerError } from './types/actionPayloadTypes';
import createRoutine from '../../../Components/Common/utils/createRoutine/createRoutine';


export const login = createRoutine<ILogin, ILoginSucces>('authMe/LOGIN');

export const logout = createRoutine<ILogout, ILoginSucces>('authMe/LOGOUT');

export const register = createRoutine<IRegister>('authMe/REGISTER');

export const setServerError = createRoutine<ISetServerError>('authMe/SET_SERVER_ERROR');
