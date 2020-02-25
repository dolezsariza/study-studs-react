import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { throttle } from "lodash";

import repositoryReducer from "./store/reducers/repositoryReducer";
import errorHandlerReducer from "./store/reducers/errorHandlerReducer";
import loggedInReducer from "./store/reducers/loggedInReducer";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const allReducers = combineReducers({
    repository: repositoryReducer,
    errorHandler: errorHandlerReducer,
    loggedIn: loggedInReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 1000)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
