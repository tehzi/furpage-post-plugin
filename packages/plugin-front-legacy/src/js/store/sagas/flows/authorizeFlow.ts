import { call, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
// import refreshApiPermission from "~api/permission/refreshApiPermission";

export default function* authorizeFlow<T extends (...arguments_: unknown[]) => unknown>(
    generatorFlow: T,
    ...parameters: Parameters<T>
): SagaIterator {
    let result: ReturnType<T>;
    let apiTries = 0;

    try {
        const { apiAccessToken: accessToken /* , apiRefreshToken: refreshToken */ } = yield select(
            ({ login: { auth } }) => ({
                auth,
            }),
        );

        // noinspection LoopStatementThatDoesntLoopJS
        while (true) {
            try {
                result = yield call(generatorFlow as (...arguments_: unknown[]) => unknown, accessToken, ...parameters);
            } catch {
                switch (apiTries) {
                    case 0:
                        // try {
                        //     const { access_token: apiAccessToken, refresh_token: apiRefreshToken } = yield call(
                        //         refreshApiPermission,
                        //         refreshToken,
                        //     );
                        // } catch {}

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
