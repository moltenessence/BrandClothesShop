import { createRoutine } from 'redux-saga-routines';

export const login = createRoutine('authMe/LOGIN');
export const logout = createRoutine('authMe/LOGOUT');
export const register = createRoutine('authMe/REGISTER');
