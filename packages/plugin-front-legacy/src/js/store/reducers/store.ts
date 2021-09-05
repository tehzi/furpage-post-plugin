import { combineReducers, Reducer } from "redux";
import updateUrl from "./updateUrl";
import login from "./login";
import images from "./images";
import AppStore from "~types/AppStore";

export default function createReducers(): Reducer<AppStore> {
    return combineReducers({
        updateUrl,
        login,
        images,
    });
}
