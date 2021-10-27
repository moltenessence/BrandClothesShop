
export type ILoginTrigger = { email: string, password: string, };
export type ILoginSucces = { email: string, token: string, id: number, username: string };

export type ILogoutTrigger = null;
export type ILogoutSucces = null;

export type ISetServerError = { message: string };

export type IRegister = { username: string, email: string, password: string, };