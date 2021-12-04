export interface IRefreshTokenResponse {
    data: {
        "token": string,
        "refreshToken": string,
        "success": boolean,
        "errors": string | null,
        "statusCode": number
    },
    status: number,
}