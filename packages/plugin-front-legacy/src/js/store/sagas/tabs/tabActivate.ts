import { EventChannel, eventChannel, SagaIterator } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { chromeError, tabChanged } from "~actions/chrome";

type TabActivateChannel = () => EventChannel<chrome.tabs.Tab>;

const tabActivateChannel: TabActivateChannel = () =>
    eventChannel(emit => {
        const onActivate = ({ tabId }: chrome.tabs.TabActiveInfo): void => {
            chrome.tabs.query({}, tabs => {
                const [tab] = tabs.filter(({ id }) => tabId === id);
                emit(tab);
            });
        };
        if (chrome.tabs?.onActivated) {
            chrome.tabs.onActivated.addListener(onActivate);
        }
        return (): void => {
            chrome.tabs.onActivated.removeListener(onActivate);
        };
    });

export default function* tabActivate(): SagaIterator {
    try {
        const channel = yield call(tabActivateChannel);
        while (true) {
            const tab = yield take(channel);
            yield put(tabChanged(tab));
        }
    } catch (error) {
        yield put(chromeError(error));
    }
}
