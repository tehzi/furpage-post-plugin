import { call, put, take, takeEvery } from "redux-saga/effects";
import { EventChannel, eventChannel, SagaIterator } from "redux-saga";
import {
    Auth,
    auth,
    AUTH,
    DELETE_AUTH,
    deletedAuth,
    FIND_STORED_AUTH,
    unauthorized,
} from "~actions/login";
import { authError, authRead, authSaved } from "~actions/store";
import { ActionWithPayload } from "~types/actions";

export type SetChannel = (
    accessToken: Auth["accessToken"],
    userId: Auth["userId"],
    // apiAccessToken: Auth["apiAccessToken"],
    // apiRefreshToken: Auth["apiRefreshToken"],
) => EventChannel<boolean>;

const setChannel: SetChannel = (
    accessToken,
    userId,
    // apiAccessToken,
    // apiRefreshToken,
) => {
    return eventChannel(emit => {
        chrome.storage.sync.set(
            { accessToken, userId/* , apiAccessToken, apiRefreshToken */ },
            () => {
                emit(true);
            },
        );
        return (): void => {};
    });
};

export type GetChannel = () => EventChannel<Auth>;

const getChannel: GetChannel = () => {
    return eventChannel(emit => {
        chrome.storage.sync.get(
            ["accessToken", "userId"/* , "apiAccessToken", "apiRefreshToken" */],
            ({ accessToken, userId/* , apiAccessToken, apiRefreshToken */ }) => {
                emit({ accessToken, userId/* , apiAccessToken, apiRefreshToken */ });
            },
        );
        return (): void => {};
    });
};

export type RemoveChannel = () => EventChannel<boolean>;

const removeChannel: RemoveChannel = () => {
    return eventChannel(emit => {
        chrome.storage.sync.remove(
            ["accessToken", "userId"/* , "apiAccessToken", "apiRefreshToken" */],
            () => {
                emit(true);
            },
        );
        return (): void => {};
    });
};

function* saveAuth({
    payload: { accessToken, userId/* , apiAccessToken, apiRefreshToken  */},
}: ActionWithPayload<Auth>): SagaIterator {
    try {
        const saveChannel = yield call(
            setChannel,
            accessToken,
            userId,
            // apiAccessToken,
            // apiRefreshToken,
        );

        yield take(saveChannel);
        yield put(authSaved());
    } catch (error) {
        yield put(authError(error));
    }
}

function* putAuthToRedux(): SagaIterator {
    try {
        const readChannel = yield call(getChannel);
        const {
            accessToken = false,
            userId = false,
            // apiAccessToken = false,
            // apiRefreshToken = false,
        } = yield take(readChannel);
        if (accessToken && userId/*  && apiAccessToken && apiRefreshToken */) {
            yield put(
                auth({ accessToken, userId/* , apiAccessToken, apiRefreshToken */ }),
            );
            yield put(authRead());
        } else {
            yield put(unauthorized());
        }
    } catch (error) {
        yield put(authError(error));
    }
}

function* deleteAuthSaga(): SagaIterator {
    try {
        const deleteChannel = yield call(removeChannel);
        yield take(deleteChannel);
        yield put(deletedAuth());
    } catch (error) {
        yield put(authError(error));
    }
}

export default function* store(): SagaIterator {
    yield takeEvery(AUTH, saveAuth);
    yield takeEvery(FIND_STORED_AUTH, putAuthToRedux);
    yield takeEvery(DELETE_AUTH, deleteAuthSaga);
}
