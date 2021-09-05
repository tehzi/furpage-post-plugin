import { HistoryTypeActions, UPDATE_URL } from "~actions/history";
import { Payload } from "~types/actions";

export interface UpdateUrlReducer {
    url: string;
}

const DEFAULT_STATE: UpdateUrlReducer = {
    url: null,
};

export default function updateUrl(
    state: UpdateUrlReducer = DEFAULT_STATE,
    action: HistoryTypeActions,
): UpdateUrlReducer {
    if (action.type === UPDATE_URL) {
        const { payload: url } = action as Payload<string>;
        return {
            ...state,
            url,
        };
    }

    return state;
}
