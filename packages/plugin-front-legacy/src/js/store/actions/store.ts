import { CallableAction } from "~types/actions";

export const AUTH_SAVED = "AUTH_SAVED";
export const authSaved: CallableAction = () => ({ type: AUTH_SAVED });

export const AUTH_REMOVED = "AUTH_REMOVED";
export const authRemoved: CallableAction = () => ({ type: AUTH_REMOVED });

export const AUTH_READ = "AUTH_READ";
export const authRead: CallableAction = () => ({ type: AUTH_READ });

export const AUTH_ERROR = "AUTH_ERROR";
export const authError: CallableAction<Error> = payload => ({ type: AUTH_ERROR, payload });
