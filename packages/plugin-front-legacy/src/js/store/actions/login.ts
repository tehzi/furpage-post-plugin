import { CallableAction } from "~types/actions";

export interface Auth {
    accessToken: string;
    userId: string;
    apiAccessToken: string;
    apiRefreshToken: string;
}

export const AUTH = "AUTH";
export const auth: CallableAction<Auth> = payload => ({
    type: AUTH,
    payload,
});

export const DELETE_AUTH = "DELETE_AUTH";
export const deleteAuth: CallableAction = () => ({ type: DELETE_AUTH });

export const DELETED_AUTH = "DELETED_AUTH";
export const deletedAuth: CallableAction = () => ({ type: DELETED_AUTH });

export const VK_AUTH = "VK_AUTH";
export const vkAuth: CallableAction = () => ({ type: VK_AUTH });

export const FIND_STORED_AUTH = "FIND_STORED_AUTH";
export const findStoredAuth: CallableAction = () => ({
    type: FIND_STORED_AUTH,
});

export const UNAUTHORIZED = "UNAUTHORIZED";
export const unauthorized: CallableAction = () => ({ type: UNAUTHORIZED });

export const ACCESS_ALLOW = "ACCESS_ALLOW";
export const accessAllow: CallableAction = () => ({ type: ACCESS_ALLOW });

export const ACCESS_DENY = "ACCESS_DENY";
export const accessDeny: CallableAction = () => ({ type: ACCESS_DENY });

export const SET_LOADING = "SET_LOADING";
export const setLoading: CallableAction<boolean> = payload => ({
    type: SET_LOADING,
    payload,
});

export const VK_API_AUTH = "VK_API_AUTH";
export const vkApiAuth: CallableAction = () => ({ type: VK_API_AUTH });

export type LoginActions = ReturnType<typeof auth | typeof setLoading>;
