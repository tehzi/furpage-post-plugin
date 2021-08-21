import { eventChannel, SagaIterator, EventChannel } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { errorUrl, updateUrl } from "~actions/history";

export type TUrlReloadChannel = () => EventChannel<string>;

const urlReloadChannel: TUrlReloadChannel = () =>
    eventChannel(emit => {
        let url = window.location.href;
        const urlInterval = setInterval(() => {
            const { href } = window.location;
            if (url !== href) {
                url = href;
                emit(href);
            }
        }, 100);

        return (): void => {
            clearInterval(urlInterval);
        };
    });

export default function* urlSaga(): SagaIterator {
    try {
        const channel = yield call(urlReloadChannel);

        while (true) {
            try {
                const url = yield take(channel);
                yield put(updateUrl(url));
            } catch (error) {
                yield put(errorUrl(error));
            }
        }
    } catch {}
}
