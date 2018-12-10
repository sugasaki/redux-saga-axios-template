import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import * as ActionTypes from "../actions/actionTypes";

//Reducerで設定する、プロパティの初期値を設定する
let initState = {
  isFetching: false,
  isBuzy: false,
  items: []
};

//redux-actionsのhandleActions を使って、コード規約に沿ったreducerを作成する
const units = handleActions(
  {
    [ActionTypes.USER_FETCH_REQUESTED]: (state, action) => ({
      //ここではActionTypesのタイプは不要
      isFetching: true,
      isBuzy: true
    }),

    [ActionTypes.USER_FETCH_SUCCESS]: (state, action) => ({
      isFetching: false,
      isBuzy: false,
      items: action.payload
    })
  },
  initState
);

const rootReducer = combineReducers({
  units: units
  //selectedReddit,
});

export default rootReducer;
