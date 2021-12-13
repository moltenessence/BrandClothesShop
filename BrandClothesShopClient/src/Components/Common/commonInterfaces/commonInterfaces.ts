export interface IResponse {
    status: number,
}

export interface IRefreshTokenResponse extends IResponse {
    data: {
        token: string,
        refreshToken: string,
        success: boolean,
        errors: string | null,
        statusCode: number
    },
}