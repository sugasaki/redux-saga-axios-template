import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import * as ActionTypes from "../actions/actionTypes";

//Reducerで設定する、プロパティの初期値を設定する
let initState = {
  isFetching: false,
  items: [],
  hasError: false,
  errorMessage: ""
};

//redux-actionsのhandleActions を使って、コード規約に沿ったreducerを作成する
const units = handleActions(
  {
    [ActionTypes.USER_FETCH_REQUESTED]: (state, action) => ({
      isFetching: true,
      hasError: false
    }),

    [ActionTypes.USER_FETCH_SUCCESS]: (state, action) => ({
      isFetching: false,
      items: action.payload
    }),

    [ActionTypes.USER_FETCH_FAILED]: (state, action) => ({
      isFetching: false,
      items: [],
      hasError: true,
      errorMessage: action.payload
    })
  },
  initState
);

const rootReducer = combineReducers({
  units: units
  //selectedReddit,
});

export default rootReducer;
