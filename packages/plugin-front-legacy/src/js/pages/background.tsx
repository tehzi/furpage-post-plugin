import "~images/icon_19.png";
import "~images/icon_128.png";
import configureStore, { sagaMiddleware } from "~store/configureStore";
import createReducers from "~store/reducers/store";
import { wrapStore } from "webext-redux";
import rootSaga from "~store/sagas/rootSaga";

const store = configureStore(createReducers());

wrapStore(store);

sagaMiddleware.run(rootSaga);
