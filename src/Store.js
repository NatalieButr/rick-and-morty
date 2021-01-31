import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { sagaWatcher } from "redux/sagas";
import rootReducer from "./redux";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(thunk, saga)));

saga.run(sagaWatcher);

export { store };
