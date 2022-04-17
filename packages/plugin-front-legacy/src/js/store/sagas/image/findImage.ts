import { call, put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { setLoading } from "~actions/login";
import { CHROME_TAB_COMPLETE, chromeError, TAB_CHANGED, ChromeTabArgs } from "~actions/chrome";
import { findImageUrl } from "~helpers/mode";
import {
    ADD_IMAGE_LINK_TO_STORE,
    addImageLinkToStore,
    UPDATE_IMAGE,
    updateImage,
    setInQueue,
    setAdded,
} from "~actions/images";
// import getStatus from "~api/images/getStatus";
// import authorizeFlow from "../flows/authorizeFlow";
import { ActionWithPayload } from "~types/actions";
import getStatus from "~api/images/getStatus";

function* tabComplete({
    payload: {
        tab: { url },
    },
}: ActionWithPayload<ChromeTabArgs>): SagaIterator {
    if (findImageUrl(url)) {
        try {
            yield put(addImageLinkToStore(url));
        } catch {}
        // TODO WIP
        // function getBase64Image(img) {
        //     // Create an empty canvas element
        //     var canvas = document.createElement("canvas");
        //     canvas.width = img.width;
        //     canvas.height = img.height;
        //
        //     // Copy the image contents to the canvas
        //     var ctx = canvas.getContext("2d");
        //     ctx.drawImage(img, 0, 0);
        //
        //     // Get the data-URL formatted image
        //     // Firefox supports PNG and JPEG. You could check img.src to
        //     // guess the original format, but be aware the using "image/jpg"
        //     // will re-encode the image.
        //     var dataURL = canvas.toDataURL("image/png");
        //
        //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        // }
    }
}

function* updateImageStatus({ payload: url }: ActionWithPayload<string>): SagaIterator {
    try {
        // const hasPermission = yield select(({ login: { hasPermission } }) => hasPermission);
        const isImageResource = !!findImageUrl(url);

        if (/* hasPermission &&  */ isImageResource) {
            try {
                let inQueue = false;
                yield put(setLoading(true));
                const { url: imageUrl = null, date } = yield call(getStatus, url);

                if (date) {
                    inQueue = new Date(date * 1000).getTime() > Date.now();
                }

                if (!inQueue && imageUrl !== null) {
                    yield put(setAdded(url));
                }

                if (inQueue) {
                    yield put(setInQueue(url));
                }
                // debugger
                // TODO WIP
                // const { base = "0", queue = "0" } = yield call(getStatus, url);
                // yield put(setLoading(false));
                // if (queue > 0) {
                //     yield put(setInQueue(url));
                // }
                // if (base > 0) {
                //     yield put(setAdded(url));
                // }
                // if ([base, queue].every(item => item === "0")) {
                //     yield put(resetImage(url));
                // }
                yield put(setLoading(false));
            } catch (error) {
                yield put(chromeError(error));
            }
        }
    } catch {}
}

function* tabChanged({ payload: { url } }: ActionWithPayload<ChromeTabArgs["tab"]>): SagaIterator {
    try {
        yield put(updateImage(url));
    } catch (error) {
        yield put(chromeError(error));
    }
}

export default function* findImage(): SagaIterator {
    yield takeEvery(CHROME_TAB_COMPLETE, tabComplete);
    yield takeEvery(TAB_CHANGED, tabChanged);
    yield takeEvery([ADD_IMAGE_LINK_TO_STORE, UPDATE_IMAGE], updateImageStatus);
}
