import { login, logout, setServerError } from "../actionCreators"
import { register } from '../actionCreators';


export type Login = ReturnType<typeof login.success>
export type LoginTrigger = ReturnType<typeof login>

export type Logout = ReturnType<typeof logout.success>
export type LogoutTrigger = ReturnType<typeof logout>

export type RegisterTrigger = ReturnType<typeof register>

export type SetServerError = ReturnType<typeof setServerError>


export type actionTypes = LoginTrigger | LoginTrigger | RegisterTrigger;