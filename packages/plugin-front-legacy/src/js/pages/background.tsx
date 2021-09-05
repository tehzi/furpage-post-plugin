import React, { ComponentType } from "react";
import { render } from "react-dom";
import "~images/icon_19.png";
import "~images/icon_128.png";
import configureStore from "~store/configureStore";
import createReducers from "~store/reducers/store";
import App, { TAppProperties } from "../App";

const appContainer = document.createElement("div");

appContainer.id = "app";
document.body.append(appContainer);

const renderApp = (
    Application: ComponentType<TAppProperties>,
    mountNode: Element,
): void => {
    const store = configureStore(createReducers());

    return render(<Application store={store} />, mountNode);
};

renderApp(App, document.querySelector("#app"));
