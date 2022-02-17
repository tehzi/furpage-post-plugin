import { ADD_IMAGE_LINK_TO_STORE, ImagesActions, RESET_IMAGE, SET_ADDED, SET_IN_QUEUE } from "~actions/images";
import { Payload } from "~types/actions";

export const enum ImageState {
    ADDED = "ADDED",
    QUEUE = "QUEUE",
}

export interface ImagesReducer {
    [key: string]: ImageState;
}

const DEFAULT_STATE: ImagesReducer = {};

export const ADDED = "ADDED";
export const QUEUE = "QUEUE";

export default function images(state = DEFAULT_STATE, action: ImagesActions): ImagesReducer {
    if (action.type === ADD_IMAGE_LINK_TO_STORE) {
        const { payload: url } = action as Payload<string>;
        if (!Object.keys(state).includes(url)) {
            return {
                ...state,
                [url]: null,
            };
        }
    }

    if (action.type === RESET_IMAGE) {
        const { payload: url } = action as Payload<string>;
        return {
            ...state,
            [url]: null,
        };
    }

    if (action.type === SET_IN_QUEUE) {
        const { payload: url } = action as Payload<string>;
        return {
            ...state,
            [url]: ImageState.QUEUE,
        };
    }

    if (action.type === SET_ADDED) {
        const { payload: url } = action as Payload<string>;
        return {
            ...state,
            [url]: ImageState.ADDED,
        };
    }

    return state;
}
