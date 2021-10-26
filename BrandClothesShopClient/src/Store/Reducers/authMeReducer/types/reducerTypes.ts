
export interface IAuthMeState {
    isAuth: boolean,
    userId: number | null,
    userName: string | null | undefined,
    email: string | null,
    serverError: string,
}