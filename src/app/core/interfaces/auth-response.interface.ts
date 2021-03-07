export interface AuthResponse {
    data: Data;
}

export interface Data {
    attributes: TokenInformation;
    type: string;
}

export interface TokenInformation {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
}
