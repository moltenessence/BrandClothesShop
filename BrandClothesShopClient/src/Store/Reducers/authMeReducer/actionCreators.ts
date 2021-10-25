import { ILogin, ILoginSucces, ILogout, IRegister, ISetServerError } from './actionPayloadTypes';
import createRoutine from '../../../Components/Common/utils/createRoutine/createRoutine';


export const login = createRoutine<ILogin, ILoginSucces>('authMe/LOGIN');
export type Login = ReturnType<typeof login.success>
export type LoginTrigger = ReturnType<typeof login>

export const logout = createRoutine<ILogout, ILoginSucces>('authMe/LOGOUT');
export type Logout = ReturnType<typeof logout.success>
export type LogoutTrigger = ReturnType<typeof logout>

export const register = createRoutine<IRegister>('authMe/REGISTER');
export type RegisterTrigger = ReturnType<typeof register>

export const setServerError = createRoutine<ISetServerError>('authMe/SET_SERVER_ERROR');
export type SetServerError = ReturnType<typeof setServerError>
