import { CallableAction } from "~types/actions";

export interface ChromeTabArgs {
    tabId: number;
    changeInfo: chrome.tabs.TabChangeInfo;
    tab: chrome.tabs.Tab;
}

export const TAB_CHANGED = "TAB_CHANGED";
export const tabChanged: CallableAction<ChromeTabArgs> = payload => ({
    type: TAB_CHANGED,
    payload,
});

export const CHROME_ERROR = "CHROME_ERROR";
export const chromeError: CallableAction<Error> = payload => ({
    type: CHROME_ERROR,
    payload,
});

export const CHROME_TAB_LOADING = "CHROME_TAB_LOADING";
export const chromeTabLoading: CallableAction<ChromeTabArgs> = payload => ({
    type: CHROME_TAB_LOADING,
    payload,
});

export const CHROME_TAB_COMPLETE = "CHROME_TAB_COMPLETE";
export const chromeTabComplete: CallableAction<ChromeTabArgs> = payload => ({
    type: CHROME_TAB_COMPLETE,
    payload,
});
