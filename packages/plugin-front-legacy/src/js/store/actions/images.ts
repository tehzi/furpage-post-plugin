import { CallableAction } from "~types/actions";

export const ADD_IMAGE_LINK_TO_STORE = "ADD_IMAGE_LINK_TO_STORE";
export const addImageLinkToStore: CallableAction<string> = payload => ({
    type: ADD_IMAGE_LINK_TO_STORE,
    payload,
});

export const RESET_IMAGE = "RESET_IMAGE";
export const resetImage: CallableAction<string> = payload => ({
    type: RESET_IMAGE,
    payload,
});

export const UPDATE_IMAGE = "UPDATE_IMAGE";
export const updateImage: CallableAction<string> = payload => ({
    type: UPDATE_IMAGE,
    payload,
});

export const SET_IN_QUEUE = "SET_IN_QUEUE";
export const setInQueue: CallableAction<string> = payload => ({
    type: SET_IN_QUEUE,
    payload,
});

export const SET_ADDED = "SET_ADDED";
export const setAdded: CallableAction<string> = payload => ({
    type: SET_ADDED,
    payload,
});

export interface Image {
    url: string;
    image: string;
    tags: string[];
    title: string;
}

export const ADD_IMAGE = "ADD_IMAGE";
export const addImage: CallableAction<Image> = payload => ({
    type: ADD_IMAGE,
    payload,
});

type ActionTypes =
    | typeof addImageLinkToStore
    | typeof resetImage
    | typeof updateImage
    | typeof setInQueue
    | typeof setAdded
    | typeof addImage;

export type ImagesActions = ReturnType<ActionTypes>;
