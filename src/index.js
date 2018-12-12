import "react-app-polyfill/ie11"; // For IE 11 support

import React from "react";
import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

// import { ConnectedRouter } from "react-router-redux";
// import { createBrowserHistory } from "history";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import configureStore from "./redux/store/configureStore";
import rootSaga from "./redux/sagas";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const history = createBrowserHistory({ basename: baseUrl });

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("react-root")
);

serviceWorker.unregister();
