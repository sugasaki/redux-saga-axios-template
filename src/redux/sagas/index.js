import { call, put, takeEvery, take, fork, delay } from "redux-saga/effects";
import { api, history } from "../services";

import * as ActionTypes from "../actions/actionTypes";
import { actionCreators } from "../actions/index";

//fetching Posts
export function* fetchPosts(action) {
  console.warn(action.payload);

  //fetch axiosPostsApi
  let data = action.payload;
  if (!data) data = "";
  const { result, err } = yield call(api.fetchPosts, data);
  console.warn(result);

  if (result) {
    //call receivePosts action
    yield put(actionCreators.receivePosts(result.data));
  } else {
    yield put(actionCreators.faildPosts(err.message));
  }
}

//initial rudux-saga
export default function* rootSaga() {
  yield takeEvery(ActionTypes.USER_FETCH_REQUESTED, fetchPosts);
}
