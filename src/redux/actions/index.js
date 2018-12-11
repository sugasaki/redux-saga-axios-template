import { createAction } from "redux-actions";
import * as ActionTypes from "./actionTypes";

//アクションを作成する。クリック等のトリガーとなる。
export let actionCreators = {
  requestPosts: createAction(ActionTypes.USER_FETCH_REQUESTED),
  receivePosts: createAction(ActionTypes.USER_FETCH_SUCCESS),
  faildPosts: createAction(ActionTypes.USER_FETCH_FAILED)
};
