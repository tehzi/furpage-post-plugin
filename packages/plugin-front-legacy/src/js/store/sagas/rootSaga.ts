import { all, fork, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import tabLoad from "./tabs/tabLoad";
import tabFlow from "./tabs/tabFlow";
import urlSaga from "./history/urlSaga";
import authorize from "./flows/authorize";
import store from "./flows/store";
import { findStoredAuth } from "~actions/login";
import { findMode } from "~helpers/mode";
import findImage from "./image/findImage";
import tabActivate from "./tabs/tabActivate";
import sendImage from "./image/sendImage";

export default function* rootSaga(): SagaIterator {
    let mode;

    try {
        mode = findMode();
    } catch {}

    const isCore = typeof mode === "undefined";

    try {
        yield all(
            [
                fork(tabLoad),
                fork(tabActivate),
                fork(tabFlow),
                fork(urlSaga),
                isCore && fork(authorize),
                isCore && fork(findImage),
                isCore && fork(sendImage),
                fork(store),
            ].filter(Boolean),
        );

        if (isCore) {
            yield put(findStoredAuth());
        }
    } catch {}
}
