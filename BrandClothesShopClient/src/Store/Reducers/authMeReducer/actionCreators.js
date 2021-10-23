import { createRoutine } from 'redux-saga-routines';

export const login = createRoutine('authMe/LOGIN');
export const register = createRoutine('authMe/REGISTER');