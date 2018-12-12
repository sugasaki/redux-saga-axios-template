import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import homeReducer from "./home";
import counterReducer from "./counter";

const rootReducer = history =>
  combineReducers({
    home: homeReducer,
    count: counterReducer,
    router: connectRouter(history)
  });

export default rootReducer;
