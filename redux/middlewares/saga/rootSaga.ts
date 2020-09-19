import { FETCH_POSTS_LIST } from "../../actions/postsList";
import { FETCH_POST } from "../../actions/post";
import { NEW_POST_PUSH } from "../../actions/newPost";

import { takeLatest, all } from "redux-saga/effects";

import { postsListSaga, postSaga, newPostSaga } from "../saga";

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_POSTS_LIST, postsListSaga),
    takeLatest(FETCH_POST, postSaga),
    takeLatest(NEW_POST_PUSH, newPostSaga),
  ]);
}
