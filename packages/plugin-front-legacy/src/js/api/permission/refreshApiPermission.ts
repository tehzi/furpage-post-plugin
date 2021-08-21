import { Permission } from "~api/permission/getApiPermission";
import { ApiError } from "~types/ApiError";

const { API_URL } = process.env;
const { API_CLIENT_ID } = process.env;
const { API_CLIENT_SECRET } = process.env;

export default async function refreshApiPermission(
    refreshToken: string = null,
): Promise<Permission | ApiError | never> {
    if (!refreshToken && typeof refreshToken !== "string") {
        throw new Error("No refresh token");
    }
    const tokenResponse = await fetch(`${API_URL}/oauth/v2/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            client_id: API_CLIENT_ID,
            client_secret: API_CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: refreshToken,
        }),
    });
    if (tokenResponse.ok) {
        const token = await tokenResponse.json();
        return token;
    }
    throw new Error("Bad response");
}
