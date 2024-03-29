import { call, put, select, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { ADD_IMAGE, IAddImage, setInQueue } from "~actions/images";
// import addToQueue from "~api/images/addToQueue";
import { chromeError } from "~actions/chrome";
import { ActionWithPayload } from "~types/actions";
import { setLoading } from "~actions/login";
import createQueue from "~api/images/createQueue";
import addToQueue from "~api/images/addToQueue";
import publishQueue from "~api/images/publishQueue";
import IAppStore from "~types/IAppStore";

// export const MAX_TAGS = 5;

const authorSelector = ({
    login: {
        auth: { userId, authorId },
    },
}: IAppStore) => ({ userId, authorId });

// TODO WIP
function* addImage({
    payload: { image: fileUrl, tags: tagsArray = [], title, url },
}: ActionWithPayload<IAddImage>): SagaIterator {
    // let tags = tagsArray.map(tag => `#${tag} `).slice(0, MAX_TAGS).join(" ").trim();
    // if (tags) {
    //     tags = `#фурри ${tags}`;
    // } else {
    //     tags = "#фурри #furry";
    // }
    try {
        const { authorId } = yield select(authorSelector);

        yield put(setLoading(true));

        const queueId = yield call(createQueue, authorId);
        const imageId = yield call(addToQueue, queueId, url, title, JSON.stringify(tagsArray), fileUrl);

        if (imageId) {
            const queuePublishedId = yield call(publishQueue, queueId);

            if (queuePublishedId) {
                yield put(setLoading(false));
                yield put(setInQueue(url));
            }
        }
    } catch (error) {
        yield put(chromeError(error));
    }
}

export default function* sendImage(): SagaIterator {
    yield takeEvery(ADD_IMAGE, addImage);
}
