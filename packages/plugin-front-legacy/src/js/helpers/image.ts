import { ADDED, QUEUE, ImageState } from "~store/reducers/images";

export const isAdded = (status: ImageState): boolean => status === ADDED;
export const isQueue = (status: ImageState): boolean => status === QUEUE;
export const canAdd = (status: ImageState): boolean => status === null;
