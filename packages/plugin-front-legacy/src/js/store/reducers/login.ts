import {
    ACCESS_ALLOW,
    ACCESS_DENY,
    AUTH,
    DELETED_AUTH,
    SET_LOADING,
    LoginActions,
    Auth,
} from "~actions/login";
import { Payload } from "~types/actions";

export interface LoginReducer {
    auth: Auth;
    hasPermission: boolean;
    checkFailed: boolean;
    loading: boolean;
}

const DEFAULT_STATE: LoginReducer = {
    auth: null,
    hasPermission: false,
    checkFailed: null,
    loading: false,
};

export default function login(
    state = DEFAULT_STATE,
    action: LoginActions,
): LoginReducer {
    if (action.type === AUTH) {
        const { payload: auth } = action as Payload<Auth>;
        return {
            ...state,
            auth,
        };
    }

    if (action.type === DELETED_AUTH) {
        return {
            ...state,
            auth: null,
        };
    }

    if ([ACCESS_ALLOW, ACCESS_DENY].includes(action.type)) {
        return {
            ...state,
            hasPermission: action.type === ACCESS_ALLOW,
            checkFailed: action.type === ACCESS_DENY,
        };
    }

    if (action.type === SET_LOADING) {
        const { payload: loading } = action as Payload<boolean>;
        return {
            ...state,
            loading,
        };
    }

    return state;
}
