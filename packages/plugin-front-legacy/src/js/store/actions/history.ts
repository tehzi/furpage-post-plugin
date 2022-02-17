import { CallableAction } from "~types/actions";

export const UPDATE_URL = "UPDATE_URL";
export const updateUrl: CallableAction<string> = (payload) => ({
    type: UPDATE_URL,
    payload,
});

export const ERROR_URL = "ERROR_URL";
export const errorUrl: CallableAction<Error> = (payload) => ({
    type: ERROR_URL,
    payload,
});

export type HistoryTypeActions = ReturnType<typeof updateUrl | typeof errorUrl>;
