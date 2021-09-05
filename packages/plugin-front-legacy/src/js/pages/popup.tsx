import React, { ComponentType } from "react";
import { render } from "react-dom";
import { applyMiddleware, Store } from "react-chrome-redux";
import { Store as ReduxStore } from "redux";
import { middleware } from "~store/configureStore";
import App, { TAppProperties } from "../App";
import AppStore from "~types/AppStore";

const renderApp = (
    Application: ComponentType<TAppProperties>,
    mountNode: Element,
): void => {
    const store = applyMiddleware(
        new Store({ portName: "FUR_PAGE" }),
        ...middleware,
    );
    render(
        <Application
            store={(store as unknown) as ReduxStore<AppStore>}
            isPopup
        />,
        mountNode,
    );
};

document.addEventListener("DOMContentLoaded", () =>
    renderApp(App, document.querySelector("#app")),
);
