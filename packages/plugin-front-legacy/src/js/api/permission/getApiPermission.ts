import { ApiError } from "~types/ApiError";

const { API_URL } = process.env;
const { API_CLIENT_ID } = process.env;
const { API_CLIENT_SECRET } = process.env;

export interface Permission {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
    refresh_token: string;
}

export default async function getApiPermission(
    accessToken: string = null,
): Promise<Permission | ApiError | never> {
    if (!accessToken && typeof accessToken !== "string") {
        throw new Error("No access token");
    }
    const tokenResponse = await fetch(`${API_URL}/token/friendship`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            client_id: API_CLIENT_ID,
            client_secret: API_CLIENT_SECRET,
            access_token: accessToken,
        }),
    });
    if (tokenResponse.ok) {
        const token = await tokenResponse.json();
        return token;
    }
    throw new Error("Bad response");
}
