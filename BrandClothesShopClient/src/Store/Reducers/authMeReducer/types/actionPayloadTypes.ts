
export type ILogin = { email: string, password: string, };
export type ILoginSucces = { email: string, token: string, id: number, username: string };

export type ILogout = { email: string, password: string, };
export type ILogoutSucces = never;

export type ISetServerError = { message: string };

export type IRegister = { username: string, email: string, password: string, };