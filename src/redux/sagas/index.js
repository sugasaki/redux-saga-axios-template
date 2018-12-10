import { call, put, takeEvery, take, delay } from "redux-saga/effects";

import * as ActionTypes from "../actions/actionTypes";
import { actionCreators } from "../actions/index";

import axios from "axios";

export function axiosPostsApi(data) {
  const url = `https://jsonplaceholder.typicode.com/posts`;

  return axios({
    method: "get",
    url: url
  });
}

export function* fetchPosts(action) {
  //yield delay(2000)
  //    yield put(actions.requestPosts(reddit))

  //const posts = yield call(fetchPostsApi, {})
  //yield put(actionCreators.receivePosts(posts))

  //const action = yield take(ActionTypes.USER_FETCH_REQUESTED)

  const posts = yield call(axiosPostsApi, {});
  yield put(actionCreators.receivePosts(posts.data));
}

export default function* rootSaga() {
  yield takeEvery(ActionTypes.USER_FETCH_REQUESTED, fetchPosts);
}
