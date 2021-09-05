// import { call, put, select, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
// import { ADD_IMAGE, setInQueue } from "~actions/images";
// import addToQueue from "~api/images/addToQueue";
// import { chromeError } from "../../actions/chrome";
// import { setLoading } from "../../actions/login";

export const MAX_TAGS = 5;
// TODO WIP
// function* addImage({
//     payload: {
//         image,
//         tags: tagsArray = [],
//         title,
//         url,
//     },
// }) {
//     const userId = yield select(({ login: { auth: { userId: id } } }) => id);
//     let tags = tagsArray.map(tag => `#${tag} `).slice(0, MAX_TAGS).join(" ").trim();
//     if (tags) {
//         tags = `#фурри ${tags}`;
//     } else {
//         tags = "#фурри #furry";
//     }
//     try {
//         yield put(setLoading(true));
//         yield call(addToQueue, tags, url, title, image, userId);
//         yield put(setLoading(false));
//         yield put(setInQueue(url));
//     } catch (err) {
//         yield put(chromeError(err));
//     }
// }

export default function* sendImage(): SagaIterator {
    // yield takeEvery(ADD_IMAGE, addImage);
}
