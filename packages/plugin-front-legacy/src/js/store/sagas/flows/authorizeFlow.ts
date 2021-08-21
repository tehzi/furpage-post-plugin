import { call, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import refreshApiPermission from "~api/permission/refreshApiPermission";

export default function* authorizeFlow<
    T extends (...args: unknown[]) => unknown
>(generatorFlow: T, ...parameters: Parameters<T>): SagaIterator {
    let result: ReturnType<T>;
    let apiTries = 0;

    try {
        const {
            apiAccessToken: accessToken,
            apiRefreshToken: refreshToken,
        } = yield select(({ login: { auth } }) => ({
            auth,
        }));

        // noinspection LoopStatementThatDoesntLoopJS
        while (true) {
            try {
                console.log(generatorFlow, accessToken, ...parameters);
                result = yield call(
                    generatorFlow as (...args: unknown[]) => unknown,
                    accessToken,
                    ...parameters,
                );
            } catch {
                switch (apiTries) {
                    case 0:
                        try {
                            const {
                                access_token: apiAccessToken,
                                refresh_token: apiRefreshToken,
                            } = yield call(refreshApiPermission, refreshToken);
                            // TODO WIP
                            console.log(apiAccessToken, apiRefreshToken);
                        } catch (error) {
                            // TODO WIP
                            console.log(error);
                        }

                        apiTries++;
                        break;
                    case 1:
                        break;
                    default:
                        apiTries++;
                }
            }
            break;
        }
    } catch {}

    return result;
}
