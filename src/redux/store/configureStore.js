import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware, { END } from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

export default function configureStore(history, initialState) {
  const logger = createLogger({
    // ...options
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
