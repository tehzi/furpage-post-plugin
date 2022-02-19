import React, { FC, StrictMode } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import rootSaga from "~sagas/rootSaga";
import { sagaMiddleware } from "~store/configureStore";
import FurAffinity from "~components/FurAffinity";
import DeviantArt from "~components/DeviantArt";
import Popup from "~components/Popup";
import AppStore from "~types/AppStore";

export type TAppProperties = {
    store: Store<AppStore>;
    isSite?: boolean;
    isPopup?: boolean;
};

const App: FC<TAppProperties> = ({ store, isSite = false, isPopup = false }) => {
    sagaMiddleware.run(rootSaga);

    return (
        <StrictMode>
            <Provider store={store}>
                {" "}
                <>
                    {isSite && (
                        <>
                            <FurAffinity />
                            <DeviantArt />
                        </>
                    )}
                    {isPopup && <Popup />}
                </>
            </Provider>
        </StrictMode>
    );
};

export default App;
