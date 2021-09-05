import React, { ComponentType } from "react";
import { render } from "react-dom";
import { applyMiddleware, Store } from "react-chrome-redux";
import { Store as ReduxStore } from "redux";
import { middleware } from "~store/configureStore";
import App, { TAppProperties } from "../App";
import AppStore from "~types/AppStore";

const store = applyMiddleware(
    new Store({ portName: "FUR_PAGE" }),
    ...middleware,
);

const renderApp = (
    Application: ComponentType<TAppProperties>,
    mountNode: Element,
): void => {
    render(
        <Application
            store={(store as unknown) as ReduxStore<AppStore>}
            isSite
        />,
        mountNode,
    );
};

const appContainer = document.createElement("div");
appContainer.id = "furpage-app";
document.body.prepend(appContainer);

renderApp(App, document.querySelector("#furpage-app"));
