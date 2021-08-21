import { eventChannel, EventChannel, SagaIterator } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import {
    chromeError,
    chromeTabComplete,
    chromeTabLoading,
    ChromeTabArgs,
} from "~actions/chrome";

export type TabChangeChannel = () => EventChannel<ChromeTabArgs>;

const tabChangeChannel: TabChangeChannel = () =>
    eventChannel(emit => {
        const tabHandler = (
            tabId: number,
            changeInfo: chrome.tabs.TabChangeInfo,
            tab: chrome.tabs.Tab,
        ): void => {
            emit({
                tabId,
                changeInfo,
                tab,
            });
        };
        if (chrome.tabs?.onUpdated) {
            chrome.tabs.onUpdated.addListener(tabHandler);
        }
        return (): void => {
            chrome.tabs.onUpdated.removeListener(tabHandler);
        };
    });

export default function* tabLoad(): SagaIterator {
    try {
        const tabsChannel = yield call(tabChangeChannel);
        while (true) {
            const chromeEvent = yield take(tabsChannel);
            const {
                changeInfo: { status },
            } = chromeEvent;
            if (status === "loading") {
                yield put(chromeTabLoading(chromeEvent));
            }
            if (status === "complete") {
                yield put(chromeTabComplete(chromeEvent));
            }
        }
    } catch (error) {
        yield put(chromeError(error));
    }
}
